import { Hero } from '@/components/sections/Hero';
import { Audiences } from '@/components/sections/Audiences';
import { Practices } from '@/components/sections/Practices';
import { Comparison } from '@/components/sections/Comparison';
import { Essays } from '@/components/sections/Essays';
import { Inquiry } from '@/components/sections/Inquiry';

export default function Home() {
  return (
    <>
      <Hero />
      <Audiences />
      <Practices />
      <Comparison />
      <Essays />
      <Inquiry />
    </>
  );
}
