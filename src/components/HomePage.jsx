//rafce
import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className='vh-100'>
        <Header></Header>
        <div className='d-flex h-75'>
            <div className='w-25 h-100 bg-primary d-flex flex-column justify-content-center'>
                <Navigation></Navigation>
            </div>
            <div className='w-75 h-100 bg-danger d-flex flex-column justify-content-center'>
                <Content></Content>
            </div>
            </div>
            <Footer></Footer>
    </div>
  )
}

export default HomePage