import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {BiPhoneCall} from 'react-icons/bi'
import Container from '../components/Container'
const Contact = () => {
  return (
    <>
       <Meta title='Contact Us'/>
      <BreadCrumb title='Contact Us'/>
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.505502147241!2d38.77890347392354!3d9.017565589170072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85067b91b083%3A0x8d25ab6def0bd9d3!2sHayes%20Hotel%20Addis%20Ababa!5e0!3m2!1sen!2sde!4v1681397198945!5m2!1sen!2sde"
             width="600" 
             height="450" 
             style="border:0;" 
             allowfullscreen="" 
             loading="lazy"
             title="This is a unique title" 

              referrerpolicy="no-referrer-when-downgrade"></iframe>
            

          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
               <div><h3 className="contact-title mb-4">
                Contact
                </h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className='form-control'  placeholder='Name'/>
                  </div>
                  <div>
                    <input type="email" className='form-control' placeholder='Email'/>
                  </div>
                  <div>
                    <input type="tel" className='form-control' placeholder='Phone Number'/>
                  </div>
                  <div>
                    <textarea name="" placeholder='Comments' id="" className='w-100 form-control' cols="30" rows="4"></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
                </div>
               <div><h3 className="contact-title mb-4">
                Get in touch with us
                </h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome className='fs-5'/>
                    <address className='mb-0'>Hno:574, near hayse hotel, Addis Ababa, Ethiopia</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><BiPhoneCall className='fs-5'/>
                    <a href="tel:+251 991843509">+251 991843509</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5'/>
                    <a href="mailto:makjbmoges746@gmail.com">makjbmoges746@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><BsInfoCircle className='fs-5'/>
                    <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
                
                </div>
            </div>
          </div>
          </div>
        
      </Container>
    </>
  )
}

export default Contact
