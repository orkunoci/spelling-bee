import React from 'react'
import Stepper from './Stepper'
import FoundedWordsList from './FoundedWordsList'
const ResultBlock = () => {

  return (
    <div className='flex items-center flex-col mb-8 md:mb-0 gap-y-4  flex-1 md:w-full max-w-full'>
    <Stepper/>
    <FoundedWordsList/>
    </div>
  )
}

export default ResultBlock