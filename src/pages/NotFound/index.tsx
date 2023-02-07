import React from 'react'
import Container404 from './style'


const NotFound: React.FC = () => {
  return (
    <>
      <Container404>
        <div className='wscn-http404'>
          <div className='pic-404'>
            <img className='pic-404__parent' src={require('../../assets/404_images/404.png')} alt="" />
            <img className='pic-404__child left' src={require('../../assets/404_images/404_cloud.png')} alt="" />
            <img className='pic-404__child mid' src={require('../../assets/404_images/404_cloud.png')} alt="" />
            <img className='pic-404__child right' src={require('../../assets/404_images/404_cloud.png')} alt="" />
          </div>
          <div className='bullshit'>
            <div className='bullshit__oops'>OOPS!</div>
            <div className='bullshit__info'>
              All right reserved
            </div>
            <div className='bullshit__headline'>The webmaster said that you can not enter this page...</div>
            <div className='bullshit__info'>Please check that the URL you entered is correct, or click the button below to return to the homepage.</div>
          </div>
        </div>
      </Container404>
    </>
  )
}

export default NotFound