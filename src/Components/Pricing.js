import React, {useState} from 'react'
import img1 from '../Assets/h1.webp'
import img2 from '../Assets/h3.webp'
import Footer from './Footer';
import c1 from '../Assets/c1.jpeg'
import c2 from '../Assets/c2.jpeg'
import c3 from '../Assets/c3.jpeg'
import c4 from '../Assets/c6.jpeg'
import c5 from '../Assets/c4.jpeg'
import c6 from '../Assets/c5.jpeg'
import a1 from '../Assets/a1.jpeg'
import a2 from '../Assets/a2.jpeg'
import a3 from '../Assets/a3.jpeg'
import b1 from '../Assets/a11.jpeg'
import b2 from '../Assets/a2.jpeg'
import b3 from '../Assets/b3.jpeg'
import b4 from '../Assets/b4.jpeg'
import b5 from '../Assets/b5.jpeg'
import b6 from '../Assets/b6.webp'











const Pricing = () => {

 


    const [list1, setList1] = useState(true)
    const [list2, setList2] = useState(false)
    const [list3, setList3] = useState(false)

    function month(){
        setList1(true)
        setList2(false)
        setList3(false)
    }

    function quarter(){
        setList2(true)
        setList3(false)
        setList1(false)
    }

    function year(){
        setList3(true)
        setList2(false)
        setList1(false)
    }

  return (
    <div className='pricing'>
        <h2>Our Services</h2>

        <div className='price-plan'>
            <span onClick={month} className={` ${list1 ? 'active' : 'inactive'}`}>International Nurse Recruitment</span>
            <span onClick={quarter} className={` ${list2 ? 'active' : 'inactive'}`}>Community Care Support</span>
            <span onClick={year} className={` ${list3 ? 'active' : 'inactive'}`}>Temporary Staffing</span>
        </div>


        


        {list1 ? (

        <div className="lists">
            <p>Our service includes international recruitment of Nurses for NHS Trusts, independent hospitals and healthcare trusts. The recruitment process is simple and aimed to recruit the best candidate at a competitive rate all over the world.</p>

            <h4>WE RECRUIT</h4>


            <div className="services">

                <section>
                    <h2>REGISTERED NURSES:</h2>

                    <div className='details'>
                        <img src={a1} alt="" />
                        <div>
                            <h3>REGISTERED NURSES</h3>
                            <p>All general specialties, including Medical, Surgical, Orthopaedics, Elderly Medicine, Oncology, Theatres, Gynaecology, Paediatrics, PICU, NICU, ICU, ITU & CCU</p>
                        </div>
                    </div>

                </section>


            </div>

            

            <div className="services">

                <section>
                    <h2>ALLIED HEALTH PROFESSIONALS</h2>

                    <div className='details'>
                        
                        <div>
                            <h3>ALLIED HEALTH PROFESSIONALS:</h3>
                            <p>Radiographers (Diagnostic), Cardiac Physiologists (Invasive/Non-Invasive), Biomedical Scientists, Physiotherapists & Occupational Therapists.</p>
                        </div>

                        <img src={a2} alt="" />
                    </div>

                </section>
                
            </div>

            <div className="services">

                <section>
                    <h2>MEDICAL DOCTORS:</h2>

                    <div className='details'>
                        <img src={a3} alt="" />
                        <div>
                            <h3>MEDICAL DOCTORS</h3>
                            <p>Our International Recruitment division recruits’ doctors for permanent roles in the UK, from short-term placements to long-term offers.</p>
                        </div>
                    </div>

                </section>


            </div>


            
            

        </div>) : null}

        {list2 ? (

            <div className="lists">

            <p>At Connect Care, our Community care services and packages are structured to support individuals who need care and support to live with dignity and independence in the community with a centred based care. The services are aimed at the elderly, those who have mental illness, learning disability and physical disability.</p>

            <h4>OUR SERVICES</h4>



            <div className="services">

            <section>
                <h2>Learning Disability</h2>

                <div className='details'>
                    
                    <div>
                        <h3>Support to live life your way</h3>
                        <p>Our tailored to fit standard is perfect for clients with learning and physical disabilities. Our team of specialist/special caregivers will develop with you, a care plan which suits the needs of your loved one.</p>
                        <p>Taking a final decision on the best care choice for a loved one can be hard but we will work with you, guide you through the process of choosing care for your loved ones in areas that you may need counsel. Our experience in providing homecare spans with dedicated and experienced care staff that can support clients with various needs and requirements. Each care plan is unique to meet the individual needs of a client.</p>
                    </div>

                    <img src={b1} alt="" />
                </div>

            </section>

            </div>


            <div className="services">



                <section>
                    <h2>Domiciliary</h2>

                    <div className='details'>
                        <img src={b2} alt="" />
                        <div>
                            <h3>Our Service offering</h3>
                            <p>With over 3 years’ experience, Connect Care provides exceptional homecare services and tailored fit healthcare solutions. We are fully registered and regulated by the Care Quality Commission (CQC).</p>
                            <p>As one of the fastest growing homecare providers, Connect Care has the expertise and know how to ensure that the needs of you or your loved one is properly cared for by the best professional carers in the industry. We deal with utmost professionalism, absolute discreet, dignity and respect. Going beyond the limit to meet and exceed client expectations is our mission.</p>
                            <p>At Connect Care, our scope and services have been broadened to support you or a loved one in any capacity. In this regard, we guarantee whatever services you require from us will be delivered with dignity and respect. Irrespective of the extent of care needed or just and enquiry, Connect Care would be your final search.</p>
                        </div>
                    </div>

                </section>


            </div>



            <div className="services">

                <section>
                    <h2>Live In</h2>

                    <div className='details'>
                        
                        <div>
                            <h3>The Live-in care option that may be suitable for you:</h3>
                            <p>We want to support you to live your life independently in the safety and comfort of your own home. At Connect Care, the care services we provide are quite exceptional. We support you to live in the safety of your own home comfortably and independently.</p>
                            <p>We have the option of Live-in carer which allows you access to care and comfort anytime you want it. Connect Care team go extra mile to meet your requirements, this is our quality assurance to supporting your individual care needs and desires. For us it is a point of duty to ensure we meet and exceed your expectations of the care services required from us. We go all the way with you to plan and execute a tailored fit service to perfectly suit your need.</p>
                        </div>

                        <img src={b3} alt="" />
                    </div>

                </section>
                
            </div>

            <div className="services">

                <section>
                    <h2>Mental Illness Care and Support</h2>

                    <div className='details'>
                        <img src={b4} alt="" />
                        <div>
                            <h3>Care and support</h3>
                            <p>At Connect Care we understand that caring for a loved one with a mental health issue can be challenging and demanding. That is why we have fully equipped our team members to help you, and those you love to manage the challenges a mental illness diagnosis can bring.</p>
                            <p>We understand that each individual experience of mental illness is different thus we cater to every specific case exclusively. Our person centred care approach allows our carers to deliver the prescribed medical, emotional and social support needed by the client, to assist them continue their lives at their own terms in comfort and engaging in the daily duties to improve quality of life and ease their symptoms. and we cater to each individual’s specific requirements.</p>
                        </div>
                    </div>

                </section>


            </div>


            <div className="services">

                <section>
                    <h2>Domestic chores</h2>

                    <div className='details'>
                        
                        <div>
                            <h3>Domestic chores</h3>
                            <p>Connect Care recruits highly professional domestic staff with healthcare training. we would match the best candidate in relation to your domestic requirements. Our staff are trained to support private homes to build long-lasting professional relationships.</p>
                            <p>Competence, loyalty and dedication – combined with a positive attitude – all of these attributes are essential in a good housekeeper. This type of employee is always in demand, particularly when combined with healthcare and cooking skills.</p>
                        </div>

                        <img src={b5} alt="" />
                    </div>

                </section>
                
            </div>

            <div className="services">

                <section>
                    <h2>Happy Shopper</h2>

                    <div className='details'>
                        
                        <div>
                            <h3>Happy Shopper</h3>
                            <p>This is an important part of wellbeing and independence enabling you to be in control of what food to purchase. With Connect Care support your shopping will be a pleasure because you are escorted by us to make your day better. Whatever you choose, either escorted or home delivery services, we can support you.</p>
                            <p>We offer support with the shopping list, transport, pick up, pack the goods, carrying goods, unpack at your home, and make you comfortable and safe.</p>
                        </div>

                        <img src={b6} alt="" />
                    </div>

                </section>
                
            </div>




            </div>) : null}


        {list3 ? (

            <div className="lists">

            <p>At Connect Care, we place temporary staff to accommodate pressure on the healthcare services. You are rest assured our Nurses, Midwives and HCAs have to meet strict standards before we'll place them with you. Our Compliance Team is responsible for obtaining and verifying candidates' documents and ensuring they have completed any specific training you require. This means that you can use Connect Care Ltd to fill your nurse jobs with confidence that all candidates will be fully qualified and up to standard. For over 3 years, we have been placing temporary healthcare workers to NHS Trusts, private hospitals and care & residential homes.</p>
            <h4>OUR PROVISION INCLUDES</h4>


            <div className="services">

                <section>
                    <h2>HCA / SUPPORT WORKER</h2>

                    <div className='details'>
                        <img src={c1} alt="" />
                        <div>
                            <h3>HCA / SUPPORT WORKER</h3>
                            <p>Our healthcare assistants and support workers both soft and strong. They empathise with the person in their care and strong enough to handle traumatic situations without falling apart. They are trained with good communication skills which is valuable to providing emotional support in difficult times. All required trainings are monitored and up to date for a quality and satisfactory service.</p>
                        </div>
                    </div>

                </section>


            </div>



            <div className="services">

                <section>
                    <h2>TEAM LEADER</h2>

                    <div className='details'>
                        
                        <div>
                            <h3>TEAM LEADER</h3>
                            <p>Our team leaders are trained to build strong relationships with all those around them, making sure family and friends feel welcomed. We make sure our professional team are kept well-informed to have a smooth run of the day. They engender a meritocracy, ensuring no-one is above anyone else and allowing everyone to feel as though they can contribute freely. With this sort of culture thus create a fundamental foundation of a successful team.</p>
                        </div>

                        <img src={c2} alt="" />
                    </div>

                </section>
                
            </div>

            <div className="services">

                <section>
                    <h2>SENIOR CARE ASSISTANT</h2>

                    <div className='details'>
                        <img src={c3} alt="" />
                        <div>
                            <h3>Care Assistant</h3>
                            <p>We are used to caring for others, that’s why we are passionate about what we do, flexible in approach and great at building a rapport with everyone we deal with.</p>
                            <p>Our culture encompasses the following: We inspire professionalism, we cope with difficult situations using tact and diplomacy and take responsibility for resolving them, we enjoy collaborating with others and sharing information and ideas and we raise standards through innovation</p>
                        </div>
                    </div>

                </section>


            </div>


            <div className="services">

                <section>
                    <h2>REGISTERED NURSE</h2>

                    <div className='details'>
                        
                        <div>
                            <h3>REGISTERED NURSE</h3>
                            <p>Our Specialist Nursing Team specialises in matching ITU, Paediatric, A&E and Theatres Nurses to roles in NHS, private hospitals. These roles can become available around the country and we are experts at filling positions for these nurse jobs with ideal candidates. We have history placing for community nurse jobs, mental health nurse jobs and more throughout the UK including Liverpool, Birmingham, Manchester and London.</p>
                        </div>

                        <img src={c4} alt="" />
                    </div>

                </section>
                
            </div>


            <div className="services">

                <section>
                    <h2>HOUSE KEEPING</h2>

                    <div className='details'>
                        
                        <div>
                            <h3>HOUSE KEEPING</h3>
                            <p>Our staff are regularly trained and equipped to use the latest technology in managing their daily chores. Our house keeping work to the highest of standards to ensure the home is clean and immaculately presented</p>
                        </div>

                        <img src={c5} alt="" />
                    </div>

                </section>
                
            </div>


            <div className="services">

                <section>
                    <h2>KITCHEN ASSISTANT</h2>

                    <div className='details'>
                        
                        <div>
                            <h3>KITCHEN ASSISTANT</h3>
                            <p>Our Kitchen Assistant understands the importance of health and hygiene, that’s why they Demonstrate this understanding in the nature of their duty. The ability to pick up detailed instructions quickly and follow them closely are part of the features of our kitchen assistant. Religion and diet are put into consideration when service is been provided. They possess good spoken communication skills in order to relate well to service users and staff.</p>
                        </div>

                        <img src={c6} alt="" />
                    </div>

                </section>
                
            </div>




            </div>) : null}




        <Footer/>

    </div>
  )
}

export default Pricing