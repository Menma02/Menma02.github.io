import React from 'react';
import Slide from './Slide';
import Footer from '../components/Footer';
import logoImg from '../images/aw_logo.png';
import bjmplogo from '../images/bjmp-logo.png';

const About = () => {
  return (
    <div>
      <div className='container rounded-lg mx-auto my-20 p-14 lg:shadow-xl sm:shadow-none'>
        <h1 className="text-4xl font-bold text-blue">What is Asset<span className='text-orange'>Wise</span>?</h1>
        <p className="mt-4 text-xl">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellendus, culpa autem quasi error blanditiis fugiat temporibus illum excepturi possimus accusamus beatae! Aperiam numquam pariatur veniam eum illum unde voluptate.
        </p>
        <p className="mt-4 text-xl">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellendus, culpa autem quasi error blanditiis fugiat temporibus illum excepturi possimus accusamus beatae! Aperiam numquam pariatur veniam eum illum unde voluptate.
        </p>
        <p className="mt-4 text-xl">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellendus, culpa autem quasi error blanditiis fugiat temporibus illum excepturi possimus accusamus beatae! Aperiam numquam pariatur veniam eum illum unde voluptate.
        </p>
        <p className="mt-4 text-xl">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellendus, culpa autem quasi error blanditiis fugiat temporibus illum excepturi possimus accusamus beatae! Aperiam numquam pariatur veniam eum illum unde voluptate.
        </p>
        <p className="mt-4 text-xl">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellendus, culpa autem quasi error blanditiis fugiat temporibus illum excepturi possimus accusamus beatae! Aperiam numquam pariatur veniam eum illum unde voluptate.
        </p>
      </div>
      <div className='bg-white flex flex-col items-center justify-center h-50vh'>
          <div className='flex items-center space-x-4 lg:space-x-8'>
              <div className='flex flex-col items-center'>
                  <img src={bjmplogo} alt="logoImg" className="w-16 h-16 lg:w-48 lg:h-48" />
                  <h2 className='mt-2 lg:mt-4 text-blue text-4xl font-bold'>BJMP</h2>
              </div>
              <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/x.png" alt="x"/>
              <div className='flex flex-col items-center'>
                  <img src={logoImg} alt="logoImg" className="w-16 h-16 lg:w-48 lg:h-48" />
                  <h2 className='mt-2 lg:mt-4 text-blue text-4xl font-bold'>Asset<span className='text-orange'>Wise</span></h2>
              </div>
          </div>
      </div>

      <div className='bg-blue p-4 lg:p-8'>
            <h1 className='text-white text-4xl lg:text-5xl font-semibold mb-4 lg:mb-6 text-shadow-xl'>Meet the <span className='text-orange'>Team</span>:</h1>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 text-white'>
              <div className="flex flex-col items-center">
                  <img src="https://pngimg.com/uploads/ice_age/ice_age_PNG8.png" alt="Profile placeholder" className="w-20 h-20 lg:w-40 lg:h-40 transition-transform duration-300 ease-in-out transform hover:scale-110" />
                  <h1 className='text-xl font-semibold lg:text-3xl'>Akira P. Ibaretta</h1>
                  <p>UI/UX <span  className='text-orange'>Designer</span></p>
              </div>
              <div className="flex flex-col items-center">
                  <img src="https://purepng.com/public/uploads/large/purepng.com-ice-age-sidice-ageiceage2002omputer-animated-buddycomedy20th-century-fox-1701528608591g12du.png" alt="Profile placeholder" className="w-20 h-20 lg:w-40 lg:h-40 transition-transform duration-300 ease-in-out transform hover:scale-110" />
                  <h1 className='text-xl font-semibold lg:text-3xl'>Ivan Paul S. Santiago</h1>
                  <p>Project <span className='text-orange'>Manager</span></p>
              </div>
              <div className="flex flex-col items-center">
                  <img src="https://pngimg.com/uploads/ice_age/ice_age_PNG65.png" alt="Profile placeholder" className="w-20 h-20 lg:w-40 lg:h-40 transition-transform duration-300 ease-in-out transform hover:scale-110" />
                  <h1 className='text-xl font-semibold lg:text-3xl'>Mark June D. Santiago</h1>
                  <p>Front-End <span  className='text-orange'>Developer</span></p>
              </div>
              <div className="flex flex-col items-center">
                  <img src="https://images6.fanpop.com/image/photos/32100000/Toon-Crash-v2-ice-age-crash-and-eddie-32183941-1200-1873.png" alt="Profile placeholder" className="w-20 h-20 lg:w-40 lg:h-40 transition-transform duration-300 ease-in-out transform hover:scale-110" />
                  <h1 className='text-xl font-semibold lg:text-3xl'>Franz Rainier Adriano</h1>
                  <p>Full-Stack <span  className='text-orange'>Developer</span></p>
              </div>
              <div className="flex flex-col items-center">
                  <img src="https://th.bing.com/th/id/R.2644b01b438f9eb999944d45e579cc4a?rik=cf%2bc9FBUw0zJPg&riu=http%3a%2f%2fvignette1.wikia.nocookie.net%2ficeage%2fimages%2fb%2fbc%2fBuck_(artwork_image).png%2frevision%2flatest%2fscale-to-width%2f300%3fcb%3d20150102181654&ehk=bEYH9ga4sIcbR9eNBpaVBiEB9A9L4sRdvNTV5796i%2bE%3d&risl=&pid=ImgRaw&r=0" alt="Profile placeholder" className="w-20 h-20 lg:w-40 lg:h-40 transition-transform duration-300 ease-in-out transform hover:scale-110" />
                  <h1 className='text-xl font-semibold lg:text-3xl'>Clark Aaron C. Cabuhat</h1>
                  <p>Back-End <span  className='text-orange'>Developer</span></p>
              </div>
              <div className="flex flex-col items-center">
              <img src="https://pngimg.com/uploads/ice_age/ice_age_PNG48.png" alt="Profile placeholder" className="w-20 h-20 lg:w-40 lg:h-40 transition-transform duration-300 ease-in-out transform hover:scale-110" />

                  <h1 className='text-xl font-semibold lg:text-3xl'>Cherold Lomotan</h1>
                  <p>Data <span  className='text-orange'>Analyst</span></p>
          </div>
      </div>
    </div>




      <Slide />
      <Footer />
    </div>
  );
};

export default About;
