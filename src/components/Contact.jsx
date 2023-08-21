import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="bg-gradient-to-b from-purple-700 to-blue w-full h-screen text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">

        <div className="mt-8">
          <p className="text-2xl font-bold mb-4 inline border-b-4 border-blue-300 text-blue-700">Contact Information</p><br/>
        </div>

        <div className="mt-7  flex justify-center items-center">
            <p className='font-semibold text-black'>Contact Number : <span className='text-2xl font-bold text-lime-700 font-signature'>7353073261</span> </p>
            <p className='font-semibold  text-black'> Alternate Number : <span className='text-2xl font-bold text-lime-700 font-signature'> 7348894914</span></p>
            <p className='font-semibold  text-black'>Email : <span className='text-2xl font-bold text-lime-700 font-signature'>Devarajissur33@gmal.com</span></p>
             <p className='font-semibold  text-black'>Location :  <span className='text-2xl font-bold text-lime-700 font-signature'>Bangalore Karnataka</span></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
