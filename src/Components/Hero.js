import React from 'react'
import Header from './Header'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/scrollbar";
import { FaPersonBurst } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { IoRibbonSharp } from "react-icons/io5";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";

import Slider from './Slider';
import {FaPhone, FaPhoneAlt} from 'react-icons/fa'
import img1 from '../Assets/h4.webp'



const Hero = () => {
  return (
    <div className='hero'> 
        <Header/>

        <Slider/>

        <div className="care">
          <h1>What is live in care?</h1>

          <h2></h2>

          <h3>Live-in care provides constant, round-the-clock care from a dedicated carer who lives with you in your home, offering a helping hand at a moment’s notice.</h3>
          <p>We understand that being supported by or looking after a loved one with care needs can often be overwhelming. That’s why our live-in care is centred around your personal needs, routines and preferences. With live-in care from Helping Hands, you and your loved ones can focus on the most important thing of all: spending quality time together.</p>
          <p>Live-in care offers you the opportunity to have one of our compassionate, expertly-trained carers live with you in your own home, supporting you at any time of day or night. Not only will your live-in carer be able to provide you with practical and physical care, they can also be a wonderful source of companionship and emotional support. All of our live-in carers are handpicked for their kind, empathetic personalities, and your local care manager will pair you with someone who matches your likes and interests.</p>
        </div>

        <div className="call">
          <p><span>Call us to find out more about live-in care </span>
            <span className='call-n'><a href="">
              <FaPhoneAlt/>
              <span>091-3245-8765</span>
              </a></span>
            </p>
        </div>

        <div className="always">
          <h1>Are live in care and 24-hour care the same?</h1>
          <h2></h2>

          <div className='always-c'>
            <img src={img1} alt="" />
            <div>
              <h4>If you have advanced care needs, 24-hour care offers a round-the-clock live-in support option.</h4>

              <p>With 24-hour care, there will usually be one main live-in carer who lives with you full time and other carers who may support you overnight or during the day when your regular carer is taking a break or needs assistance with moving and handling duties.</p>
              <p>You can also opt for live-in care if you need regular support for some ailments, but don’t need constant care. There could be a variety of different reasons why someone may need 24-hour care. Here are some examples:</p>
            </div>
          </div>
        </div>


        <div className="reasons">

          <section className='health'>

            <h2>Some reasons why you may need live-in care:</h2>

            <div className='benefits'>
                <div>
                    <FaHandHoldingHeart className='p-icon'/>
                    <h3>Personal care</h3>
                    <p>A live-in carer can provide you with discreet and sensitive personal care that will mean you won’t have to worry about asking family members to help with intimate routines. Personal care might include assistance with bathing, toileting, getting dressed and more.</p>
                </div>

                <div>
                    <FaUsers className='p-icon'/>
                    <h3>Companionship</h3>
                    <p>If you’re living alone, or living with a partner but are too far away from your loved ones to see them regularly, a live-in carer can be there to watch your favourite TV programmes with you, play a board game, help you attend a club, or just have a natter over a cup of tea.</p>
                </div>

                <div>
                    <FaPeopleRoof className='p-icon'/>
                    <h3>Household chores</h3>
                    <p>Whether you need someone to take care of all your housework or simply to help you cope with it, a live-in carer will be able to ensure your home is always kept clean and tidy – meaning you can enjoy a truly comfortable and relaxing environment.</p>
                </div>

                <div>
                    <IoRibbonSharp className='p-icon'/>
                    <h3>Getting out and about</h3>
                    <p>One of the wonderful things about staying at home for care is being able to enjoy your independence. A live-in carer can accompany you out of your home whenever you like – whether it’s popping to the shops, visiting a friend or going away for the weekend.</p>
                </div>

                <div>
                    <FaHeartPulse className='p-icon'/>
                    <h3>Dietary needs</h3>
                    <p>Your live-in carer will be able to prepare your favourite meals, drinks and snacks at the times that suit you, as well as washing everything up and tidying away afterwards. They can also prepare nutritious food that adheres to a specific dietary plan.</p>
                </div>

                <div>
                    <FaScaleBalanced className='p-icon'/>
                    <h3>Complex care</h3>
                    <p>If you have more complex care needs, our live-in carers can receive additional nurse-led training that will equip them to offer catheter and stoma management. We can provide bespoke support for the most complex conditions, including types of dementia and cancer.</p>
                </div>

            </div>

        </section>
          
        </div>
        
        

    </div>

    
  
  )
}

export default Hero