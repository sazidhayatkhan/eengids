import React from 'react'
import Categories from './components/Categories'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='container space-y-5'>
      <div className='w-full h-[300px] bg-amber-100'></div>
      <Categories/>
    </div>
  )
}

export default HomePage