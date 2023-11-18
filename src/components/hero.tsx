import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
    }

export default function Hero(props: HeroProps) {
  return (
    <div className='relative h-screen'>
        <div className='absolute inset-0 -z-10'>
    <Image
    src={props.imgData}
    fill
    className='object-cover'
    alt={props.imgAlt}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900">
    <div className="pt-48 flex justify-center items-center">
    <h1 className="text-white text-6xl">{props.title}</h1>
    </div>
    </div>
    </div>
    </div>
  );
}
