import { Link } from 'react-router';
import { WavingHand } from './icons/Hand';

type HeroProps = {
  name?: string;
  text?: string;
};

const Hero = ({
  name = 'Anna',
  text = 'I build friendly web experiences and help others become confident, modern developers.',
}) => {
  return (
    <header className='bg-gray-900 text-white text-center px-4 py-20 transition-colors duration-300'>
      <h2 className='flex justify-center items-center gap-3 text-4xl font-bold mb-4'>
        Hey, I'm {name} <WavingHand />
      </h2>
      <p className='max-w-2xl mx-auto text-gray-300 text-lg mb-6'>{text}</p>
      <div className='flex justify-center gap-4'>
        <Link
          to='/projects'
          className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300'
        >
          View Projects
        </Link>
        <Link
          to='/contact'
          className='border border-blue-500 hover:bg-blue-600 text-blue-400 hover:text-white px-6 py-2 rounded transition duration-300'
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;
