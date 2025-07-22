import React from 'react'
import Discount from '../components/Discount'
import Features from '../components/Features'
import Companies from '../components/Companies'
import Discover from '../components/Discover'

import Products from '../components/Products'
import Featured from '../components/Featured'
import Essential from '../components/Essential'
import Beauty from '../components/Beauty'
import Heroo from '../components/Heroo'





const Home:React.FC = () => {
  return (
    <>
     
      <Heroo/>
      <Featured/>
      <Products/>
      <Discount/>

      <Features/>
      <Companies/>
      <Essential/>
      <Beauty/>
      <Discover/>
    </>
  
  )
}

export default Home