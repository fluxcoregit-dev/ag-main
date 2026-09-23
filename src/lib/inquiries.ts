import { appendFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

export type InquiryRecord = {
  name: string;
  email: string;
  organization: string;
  intent: string;
  message: string;
  createdAt: string;
};

export async function saveInquiry(inquiry: InquiryRecord) {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  let deliveredToWebhook = false;

  if (webhook) {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(inquiry),
    });
    if (!response.ok) {
      throw new Error(`Contact webhook responded with ${response.status}`);
    }
    deliveredToWebhook = true;
  }

  try {
    const dir = path.join(process.cwd(), 'data');
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, 'inquiries.jsonl'),
      `${JSON.stringify(inquiry)}\n`,
      'utf8',
    );
  } catch (error) {
    if (!deliveredToWebhook) {
      throw error;
    }
  }
}
