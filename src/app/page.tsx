import Link from 'next/link';
import Image from 'next/image';
import homeImg from 'public/images/home.jpg';
import Hero from '@/components/hero';

export default function HomePage() {
  return (
    <Hero imgData={homeImg} imgAlt="robotic arms assembling cars in a car factory seen from above" title="Professional Cloud Hosting" />
  );
}
