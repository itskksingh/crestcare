"use client";

import CustomLinkButton from "@/components/Buttons";
import MiniTitle from "@/components/MiniTitle";
import doctorImage from "@/public/img/dr-sushil-sir.jpg";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
// import Stetho from "/img/image.png";

const Aboutus = () => {
  return (
    <main className='w-full relative h-auto bg-white'>
      <section className='max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12'>
        {/* Left side content  */}
        <div className='lg:flex-1 flex relative w-full'>
          <Image
            src={"/img/image.png"}
            width={50}
            height={50}
            alt='stetho-crestcare'
            className='absolute top-0 left-0'
          />
          <Image
            src={"/img/bg-pattern.png"}
            width={100}
            height={100}
            alt='stetho-crestcare'
            className='absolute top-0 left-50'
          />
          <div className='w-full relative aspect-[3/4] '>
            <Image
              src={doctorImage}
              alt='Dr. Sushil Kumar - CrestCare'
              // fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
        </div>
        {/* Right Content Section */}
        <div className='flex-1 w-full flex flex-col space-y-5'>
          <MiniTitle title='ABOUT US' />
          <h2 className='text-headline text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug'>
            Raising the Standards of Healthcare in Giridih & Jharkhand
          </h2>
          <p className='text-body font-rubik text-base md:text-lg'>
            At Crest Care Multi Specialty Hospital, we are committed to offering world-class medical services with a
            human touch. Equipped with advanced technology, experienced doctors, and round-the-clock emergency support,
            we ensure that every patient receives personalized, affordable, and reliable care — right here in the heart
            of Jharkhand.
          </p>

          <div>
            <h4 className='text-lg md:text-xl font-semibold mb-4'>Why people trust Crest Care</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-body font-rubik'>
              {[
                "24×7 Emergency & Trauma Center",
                "ICU with Advanced Life Support",
                "Pregnancy & Newborn Care",
                "General & Laparoscopic Surgery",
                "Expert Specialist Doctors",
                "Digital X-Ray and & Ultrasound",
              ].map((item, idx) => (
                <p key={idx} className='inline-flex items-center'>
                  <FaCheckCircle className='text-primary mr-2 shrink-0' />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className='flex gap-5 items-center'>
            <div className="flex items-center gap-2 text-primary text-lg font-semibold">
              <FaPlayCircle className="text-primary text-4xl"/> Play Video
            </div>
            <CustomLinkButton href='/' text='Read More' bgcolor='bg-primary hover:bg-headline' />
          </div>
        </div>
      </section>
      <Image
        src={"/img/image.png"}
        className='absolute bottom-0 z-1 right-0'
        width={150}
        height={500}
        alt='backtournd'
      />
    </main>
  );
};

export default Aboutus;
