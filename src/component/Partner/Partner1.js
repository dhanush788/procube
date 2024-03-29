import React from 'react'
import mic from '../../assets/images/icons/mic.svg'
import AnimatedParagraph from '../AnimatedPara'


const data = [
  {
    title: 'Services Offering',
    description: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    icon: mic
  },
  {
    title: 'Marketing Support',
    description: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    icon: mic
  },
  {
    title: 'Revenue Share',
    description: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    icon: mic
  },
  {
    title: 'Lead Share',
    description: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    icon: mic
  },
  {
    title: 'Exact Visibilit',
    description: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    icon: mic
  },
  {
    title: 'Dedicated Support',
    description: "Lorem ipsum dolor sit amet consectetur. Vel aliquam feugiat proin tincidunt feugiat viverra. Commodo etiam vestibulum quam tristique non venenatis sed.",
    icon: mic
  }
]



const Partner1 = () => {

  return (
    <div className='px-6 md:px-24 pb-6 md:pb-12'>
      <AnimatedParagraph className='font-normal text-4xl md:text-7xl max-w-5xl text-center mx-auto pb-10 md:pb-[70px] uppercase !leading-tight'>Why Join our Partner Program?</AnimatedParagraph>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10'>
        {data.map((item, index) => (
          <div key={index} className='border-b-[1px] border-opacity-40 border-white pb-5 md:pb-8'>
            <img src={item.icon} alt='icon' className='w-12 h-12 md:w-16 md:h-16 mb-5 md:mb-8' />
            <p className='font-bold text-xl md:text-3xl md:pb-4'>{item.title}</p>
            <p className='text-sm md:text-lg opacity-60'>{item.description}</p>
            {/* <div className='flex justify-between mt-8 md:mt-16 w-full'>
              <div className='md:text-lg my-auto'>0{index+1}</div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partner1