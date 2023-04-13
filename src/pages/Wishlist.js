import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
const Wishlist = () => {
  return (
    <>
         <Meta title='Wish List'/>
      <BreadCrumb title='Wish List'/>
      <Container className="wishlist-wrapper home-wrapper-2 py-2">
        
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg"
                className='position-absolute cross img-fluid'
                alt="cross" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg"
                  className='img-fluid w-100'
                  alt="watch" />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">
                            Honor T17.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi_3G Tablet
                        </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg"
                className='position-absolute cross img-fluid'
                alt="cross" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg"
                  className='img-fluid w-100'
                  alt="watch" />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">
                            Honor T17.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi_3G Tablet
                        </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img src="images/cross.svg"
                className='position-absolute cross img-fluid'
                alt="cross" />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg"
                  className='img-fluid w-100'
                  alt="watch" />
                </div>
                <div className="py-3 px-3">
                <h5 className="title">
                            Honor T17.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi_3G Tablet
                        </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                </div>
              </div>
            </div>
          </div>
    
      </Container>
    </>
  )
}

export default Wishlist
