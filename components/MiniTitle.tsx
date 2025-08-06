import { FC } from "react";
import { GiHealthNormal } from "react-icons/gi";

interface MiniTitleProps {
  title: string;
}

const MiniTitle: FC<MiniTitleProps> = ({ title }) => {
  return (
    <p className='text-primary text-[18px] font-semibold inline-flex items-center gap-2' data-aos='fade-up'>
      <GiHealthNormal />
      {title}
    </p>
  );
};

export default MiniTitle;
