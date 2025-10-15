import React from 'react'
import SampleDrawings from "../components/SampleDrawings/SampleDrawings"
import Header from '../components/header/nav'
import Footer from '../components/footer/footer'
const Page = () => {
  return (
    <div>
        <Header/>
      <SampleDrawings/>
      <Footer/>
    </div>
  )
}

export default Page
