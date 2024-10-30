import React, { useState } from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import s1 from '../Assets/h1.webp'
import s2 from '../Assets/h2.webp'
import s3 from '../Assets/h3.webp'
import  Typewriter  from 'typewriter-effect';
import { Link } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';


const Slider = () => {

  

  const [flip, setFlip] = useState(false)

  const props = useSpring({
    to: {opacity:1},
    from: {opacity:0},
    reset:true,
    reverse:flip,
    delay:200,
    onRest: () => setFlip(!flip),
  })
  return (

    <div className="sl">
    <div className='slide'>

    <section className='hero-slider'>


      <div className='slide-l'>

        <h1>
        <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings:[
                        "Live in care",
                        "Live in wealth",
                        "Live in health",
                      ],
                  }}
                  />
        
        </h1>


      </div>

      <div className='slide-r'>


          <Swiper
          // install Swiper modules
          // modules={[EffectFade]} effect="fade"
          className='swipe'
          navigation={false}
          modules={[Autoplay, Scrollbar, A11y, EffectFade]}
          effect={"fade"}
          loop

          spaceBetween={20}
          slidesPerView={1}

          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          style={{ zIndex: 0}}
          
        >
            <SwiperSlide className='s-c'>
              
                  <img src={s1} alt="" />

            </SwiperSlide>


            <SwiperSlide>
              
                  <img src={s2} alt="" />

            </SwiperSlide>

            <SwiperSlide>
              
                  <img src={s3} alt="" />

            </SwiperSlide>

            

            

            </Swiper>

          </div>


          </section>


          

  </div>
  </div>
  )
}

export default Slider