import React from 'react'
import { Link } from 'react-router-dom'

import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import blog from "../images/blog-1.jpg";
import {HiOutlineArrowLeft} from 'react-icons/hi'
import Container from '../components/Container';
const SingleBlog = () => {
  return (
    <>
       <Meta title='Dynamic Blog Name'/>
      <BreadCrumb title='Dynamic Blog Name'/>
      <Container className="blog-wrapper home-wrapper-2 py-5">
       
          <div className="row">
            <div className="col-12">
                <div className="single-blog-card">
                    <Link to='/blogs' className='d-flex align-items-center gap-10'>
                        <HiOutlineArrowLeft className='fs-4'/> Go back to Blogs</Link>
                    <h3 className="title">
                        A Beautiful Sunday Morning Renaissance
                    </h3>
                    <img src={blog} className='img-fluid w-100 my-4' alt="blog" />
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis asperiores, repellendus rerum reprehenderit dicta voluptas magnam quibusdam nam, tenetur non, repudiandae distinctio ipsum vitae ipsa. A iste tempore dolor?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nobis asperiores, repellendus rerum reprehenderit dicta voluptas magnam quibusdam nam, tenetur non, repudiandae distinctio ipsum vitae ipsa. A iste tempore dolor?</p>
                </div>
            </div>
          </div>
        
      </Container>
    </>
  )
}

export default SingleBlog
