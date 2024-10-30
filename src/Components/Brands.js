import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import b1 from '../Assets/bagify.jpeg'
import b2 from '../Assets/quickfarm.jpeg'
import b3 from '../Assets/quickpower.jpeg'
import b4 from '../Assets/build 2.jpeg'


const Brands = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 710 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 710, min: 0 },
          items: 1
        }
      };



  return (
    <div className='brands'>

        <h2>Brands that trust us</h2>
      
      <Carousel className='one'
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={ true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
      <div>
        <img src={b1} alt="" /> 
     </div>

     <div>
        <img src={b2} alt="" />
     </div>

     <div>
        <img src={b3} alt="" />
     </div>

     <div>
        <img src={b4} alt="" />
     </div>
     <div>
        <img src={b1} alt="" />
     </div>

     <div>
        <img src={b2} alt="" /> 
     </div>


     <div>
       <img src={b3} alt="" />
     </div>
        
      </Carousel>

    </div>
  )
}

export default Brands