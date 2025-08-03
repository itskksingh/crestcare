import { FaCalendarAlt } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import CustomLinkButton from "./Buttons";

const DrAvijeetSlide = () => (
  <div className="w-full h-screen bg-[url('/img/hero_slider_1.jpg')] bg-cover bg-center">
    <div className='max-w-lg md:max-w-2xl lg:max-w-7xl h-full mx-auto py-20 flex flex-col items-start justify-center space-y-10'>
      <div className='lg:max-w-2xl space-y-5'>
        <h1 className='text-5xl lg:text-6xl font-bold leading-auto'>
          Trusted
          <span className='text-primary '> Cardiologist</span> for Heart Health
        </h1>
        <p className='font-rubik text-body text-lg lg:text-xl'>
          Dr. Rohit Kumar is a skilled cardiologist dedicated to diagnosing and managing heart diseases with modern,
          non-invasive and interventional cardiology techniques. Your heart health is in expert hands.
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
export default DrAvijeetSlide;
