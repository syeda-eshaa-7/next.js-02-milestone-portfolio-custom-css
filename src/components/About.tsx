import React from 'react';
import Image from 'next/image';
import styles from '../app/styles/About.module.css'


const About = () => {
  return (
    <div className={`${styles.about} w-full h-screen text-center flex`} >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 '>
        <div className='col-span-2 '>
          <p className={`${styles.uppercase} text-xl tracking-widest text-[#5651e5]`}>
           <p> CUSTOM CSS SECTION</p>
            About
          </p>
          <h2 className={`${styles.heading} py-4`}>Who I Am</h2>
          <p className={`${styles.paragraph} py-2 text-gray-600`}>
            I specialize in building mobile responsive front-end UI applications
            that connect with APIs and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className={`${styles.paragraph} py-2 text-gray-600`}>
            My journey in web development started with a passion for design and technology. 
            I love transforming ideas into engaging interfaces that enhance user experiences.
            I’m always eager to learn new skills and stay updated with the latest trends in the industry.
          </p>
        </div>
        <div className={`w-full h-auto m-auto ${styles.shadowXL} shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4`}>
          <Image src={'/assets/about.jpg'} className='rounded-xl' alt='/'
          width={300}
          height={500} />
        </div>
      </div>
    </div>
  );
};

export default About;
