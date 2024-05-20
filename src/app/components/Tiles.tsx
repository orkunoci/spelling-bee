'use client'
import React from 'react'
import Tile from './Tile'

interface TilesProps {
  dictionary: {
    mustUsed: string
    restOfLetters: string[]
    words: string[]
  };

}

const Tiles = ({dictionary}:TilesProps) => {
  return (
   <div className='relative h-[500px] w-[250px] '>
    <Tile cName='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4  z-20' letter={dictionary.mustUsed} isEssential={true}/>
    <Tile cName='absolute -left-[10%] top-2/4 -translate-y-2/4'  letter={dictionary.restOfLetters[0]}/>
    <Tile cName='absolute top-[19%] left-[30%]  -translate-x-2/4'  letter={dictionary.restOfLetters[1]}/>
    <Tile cName='absolute top-[19%] left-[70%]  -translate-x-2/4'  letter={dictionary.restOfLetters[2]}/>
    <Tile cName='absolute -right-[13%] top-2/4 -translate-y-2/4'  letter={dictionary.restOfLetters[3]}/>
    <Tile cName='absolute bottom-[18%] left-[30%]  -translate-x-2/4'  letter={dictionary.restOfLetters[4]}/>
    <Tile cName='absolute bottom-[18%] left-[70%]  -translate-x-2/4'  letter={dictionary.restOfLetters[5]}/>

    </div>
  
  )
}

export default Tiles