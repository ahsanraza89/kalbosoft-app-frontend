import React from 'react';

export default function Card(props) {
  return (
  
      <div className=' flex flex-col md:flex-row justify-center items-center gap-10  rounded-lg  w-full md:w-[45%]'>

       <div className='flex items-center w-[50%]  '>
        <img
         className="w-[350px] h-[100px] object-cover"
          src={props.image}
          alt="Program"
        />
        </div>

        <div className='flex flex-col '>
          <h5 className="text-2xl font-semibold mb-4 text-gray-800">{props.title}</h5>
          <p className="text-gray-600 text-base">
            {props.description}
          </p>
        </div>

      </div>

 
  );
}
