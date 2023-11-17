import Link from 'next/link';
import Image from 'next/image';
import homeImg from 'public/images/home.jpg';

export default function HomePage() {
  return <div>
    Home Page
    <div className='absolute inset-0 -z-10'>
    <Image
    src={homeImg}
    fill
    className='object-cover'
    alt="robotic arms assembling cars in a car factory seen from above" />
    </div>
  </div>
}
