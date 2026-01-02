import { Hero } from '@/components/sections/Hero';
import { Role } from '@/components/sections/Role';
import { Ecosystem } from '@/components/sections/Ecosystem';
import { Intelligence } from '@/components/sections/Intelligence';
import { Process } from '@/components/sections/Process';
import { LongTerm } from '@/components/sections/LongTerm';

export default function Home() {
  return (
    <>
      <Hero />
      <Role />
      <Ecosystem />
      <Intelligence />
      <Process />
      <LongTerm />
    </>
  );
}
