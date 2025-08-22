import React from 'react'
import Categories from './components/Categories'
import Hero from './components/Hero'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='container space-y-5'>
      <Hero/>
      <Categories/>
    </div>
  )
}

export default HomePage