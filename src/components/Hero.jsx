import React, { useState } from 'react';

function Hero() {
  const [input, setInput] = useState('');
  const [value, setValue] = useState('');

  const handleData = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const binaryToText = binary => {
      return binary.trim().split(' ')
                   .map(bin => String.fromCharCode(parseInt(bin, 2)))
                   .join('');
    };

    try {
      const result = binaryToText(input);
      setValue(result);
    } catch (error) {
      setValue('Invalid binary input', error);
    }
  };

  return (
    <div className='main bg-gray-900 min-h-screen min-w-full'>
      <div className="flex flex-col justify-center items-center">
        <h1 className='text-6xl font-bold text-white'>Binary To Text</h1>
        <div className="container py-15 flex flex-col justify-center items-center gap-3">
          <p className='text-2xl text-white text-center'>Enter a binary number and get its equivalent text</p>
          <textarea 
            onChange={handleData} 
            className='no-resize w-1/2 h-40 rounded-lg outline-none font-semibold p-4 text-2xl bg-gray-400' 
            placeholder="Enter the binary number here"
          ></textarea>
          <button 
            onClick={handleClick} 
            className='w-1/4 h-10 rounded-lg cursor-pointer bg-gray-600 text-white font-semibold'
          >
            Convert
          </button>
          <textarea 
            value={value} 
            className='no-resize w-1/2 h-40 rounded-lg outline-none font-semibold p-4 text-2xl bg-gray-400' 
            placeholder="Text will appear here" 
            readOnly
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Hero;
