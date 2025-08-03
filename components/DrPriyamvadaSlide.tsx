import { FaCalendarAlt } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import CustomLinkButton from "./Buttons";

const DrPriyamvadaSlide = () => (
  <div className="w-full h-screen bg-[url('/img/hero_slider_3.jpg')] bg-cover bg-center">
    <div className='max-w-lg md:max-w-2xl lg:max-w-7xl h-full mx-auto py-20 flex flex-col items-start justify-center space-y-10'>
      <div className='lg:max-w-2xl space-y-5'>
        <h1 className='text-5xl lg:text-6xl font-bold leading-auto'>
          Women’s Health &<span className='text-primary '> Pregnancy</span> Care Expert
        </h1>
        <p className='font-rubik text-body text-lg lg:text-xl'>
          Dr. Avijeet Prasad, MBBS, MS (Ortho), brings advanced orthopedic care to Giridih. From fractures to total
          joint replacements, he’s known for delivering high success rates with modern, minimally invasive techniques.
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <CustomLinkButton href='/contact' text='Book Appointment' icon={<FaCalendarAlt />} />
        <CustomLinkButton
          href='/contact'
          bgcolor='bg-headline hover:bg-primary'
          text='Call Emergency'
          icon={<PiPhoneCallFill />}
        />
      </div>
    </div>
  </div>
);
export default DrPriyamvadaSlide;
