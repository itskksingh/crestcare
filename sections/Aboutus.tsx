"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Aboutus = () => {
  return (
    <main className='w-full relative min-h-screen bg-white'>
      <Image
        src={"/img/image.png"}
        className='absolute bottom-0 z-1 right-0'
        width={150}
        height={500}
        alt='backtournd'
      />
      <section className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12'>
        {/* Right Content Section */}
        <div className='flex-1 w-full flex flex-col space-y-6'>
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
                "Digital X-Ray, CT Scan & Ultrasound",
              ].map((item, idx) => (
                <p key={idx} className='inline-flex items-center'>
                  <FaCheckCircle className='text-primary mr-2 shrink-0' />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Aboutus;
