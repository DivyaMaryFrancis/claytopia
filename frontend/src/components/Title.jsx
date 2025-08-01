import React from 'react'

const Title = ({text1,text2}) => {
  return (
      <div className='w-full flex justify-center items-center gap-2 mb-3'>
      <p className='text-3xl font-bold text-gray-700'>
        {text1}
        <span className='text-gray-800 font-medium'> {text2}</span>
      </p>
      <div className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-400'></div>
    </div>
  )
}

export default Title