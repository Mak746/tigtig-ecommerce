import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard'
import Color from '../components/Color'
import ReactImageZoom from 'react-image-zoom'
import Container from '../components/Container';
const SingleProduct = () => {
    const props={
        with:400,
        height:600,
        zoomWidth:600,
        img:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    const [orderedProduct,setorderedProduct]=useState(true);

    const copyToClipboard = (text) => {
      console.log("text", text);
      var textField = document.createElement("textarea");
      textField.innerText = text;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
    };
  return (
    <>
        <Meta title='Product Name'/>
      <BreadCrumb title='Product Name'/>
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
      <button
        type="button" hidden
        onClick={() => setorderedProduct("blue")}
      >Blue</button>
            <div className="row">
                <div className="col-6">
                 <div className="main-product-image">
                        <div>
                            <ReactImageZoom {...props}/>
                        </div>
                 </div>
                 <div className="other-product-images d-flex flex-wrap gap-15">
                    <div ><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid' alt="" /></div>
                    <div ><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid' alt="" /></div>
                    <div ><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid' alt="" /></div>
                    <div ><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid' alt="" /></div>
                 </div>
                </div>
                <div className="col-6">
                    <div className="main-product-details">
                        <div className='border-bottom'>
                        <h3 className='title'>Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>

                        </div>
                        <div className="border-bottom py-3">
                          <p className="price">$ 100</p>
                          <div className="d-flex align-items-center gap-10">
                          <ReactStars
                            count={3}
                            value={4}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                               />
                               <p className="mb-0 t-review">(2 Reviews)</p>
                          </div>
                          <a className='review-btn' href="#review">Write a Review</a>

                        </div>
                        <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availablity :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      type="button"
                    >
                      Add to Cart
                    </button>
                    <button className="button signup">Buy It Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We
                    ship all US domestic orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  <a
                    href="/"
                    onClick={() => {
                      copyToClipboard(
                        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
                        {/* <div className="border-bottom py-3">
                          <div className='d-flex align-items-center gap-10'>
                            <h3>Abc: </h3> <p className='product-data'></p>
                          </div>
                          <div className='d-flex align-items-center gap-10'>
                            <h3>Abc: </h3> <p className='product-data'></p>
                          </div>
                          <div className='d-flex align-items-center gap-10'>
                            <h3>Abc: </h3> <p className='product-data'></p>
                          </div>
                          <div className='d-flex align-items-center gap-10'>
                            <h3>Abc: </h3> <p className='product-data'></p>
                          </div>
                        </div> */}
                    </div>
                  </div>
            </div>
      
      </Container>
      <Container class1="description-wrapper home-wrapper-2 py-5">
         
            <div className="row">
                <div className="col-12">
                <h4>Description</h4>

                    <div className="bg-white p-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel exercitationem corporis saepe rem modi sed reprehenderit vero hic eaque in atque earum sint praesentium ducimus voluptas, deserunt fugit quos?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel exercitationem corporis saepe rem modi sed reprehenderit vero hic eaque in atque earum sint praesentium ducimus voluptas, deserunt fugit quos?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel exercitationem corporis saepe rem modi sed reprehenderit vero hic eaque in atque earum sint praesentium ducimus voluptas, deserunt fugit quos?
                    
                    </p>
                    </div>
                  
                </div>
            </div>
       
      </Container>
      <Container id="review" class1="reviews-wrapper home-wrapper-2 ">
        
            <div className="row">
                <div className="col-12">
                    <h4>Reviews</h4>
                    <div className="review-inner-wrapper">

                    
                    <div className="review-head d-flex justify-content-between align-items-end">
                         <div>
                            <h4 className="mb-4">Customer Reviews</h4>
                            <div className="d-flex align-items-center gap-10">
                            <ReactStars
                            count={3}
                            value={4}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                               />
                               <p className="mb-0">Based on 2 Reviews</p>
                            </div>
                         </div>

                         {
                            orderedProduct && (
                                <div>
                                    <a href='/' className='text-dark text-decoration-underline' >Write a Review</a>
                                </div>
                            )
                         }
                         
                    </div>
                    <div className="review-form py-4">
                    <form action="" className='d-flex flex-column gap-15'>
                        <h4>Write a Review</h4>
                    <div>
                    <ReactStars
                                    count={5}
                                    value={4}
                                    edit={false}
                                    size={24}
                                    activeColor="#ffd700"
                                    />
                    </div>
                  <div>
                    <textarea name="" placeholder='Comments' id="" className='w-100 form-control' cols="30" rows="4"></textarea>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
                    </div>
                    <div className="reviews mt-4">
                        <div className="review">
                            <div className="d-flex align-items-center gap-10">
                             <h6 className='mb-0'>Navdeep</h6>
                             <ReactStars
                                    count={5}
                                    value={4}
                                    edit={false}
                                    size={24}
                                    activeColor="#ffd700"
                                    />
                            </div>
                     
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, asperiores.
                                         Voluptatem quasi tempora esse eveniet aliquam, dolorem sed a cupiditate rerum. 
                                         Corporis laboriosam dolorem, nulla sed perferendis numquam enim ipsa!</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
     
      </Container>
      <Container class1="popular-wrapper home-wrapper-2 py-5">
     
        <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          

        </div>
        <div className="row">
     
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
       
    </Container>
    </>
  )
}

export default SingleProduct
