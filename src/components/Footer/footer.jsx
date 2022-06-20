import React from 'react'
import styles from "./footer.module.css"
const Footer=()=>{
  return (
    <footer className={styles.footerContainer}>
      <div className="container">
        <div className="row justify-content-between g-4 border-bottom pb-3 border-1 border-dark">
          <div className="col-lg-3 col-md-12">
            <h4 className='border-start border-dark ps-2 border-2'>Find your dream house</h4>
            <p className='text-secondary'>In the end we hope that you can find your future house!</p>
          </div>

          <div className="col-lg-2 col-md-4">
            <h4>Europe</h4>
            <ul>
              <li><a href="#">Germany</a></li>
              <li><a href="#">France</a></li>
              <li><a href="#">Italy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4">
            <h4>America</h4>
            <ul>
              <li><a href="#">New York</a></li>
              <li><a href="#">Chicago</a></li>
              <li><a href="#">Atlanta</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4">
            <h4>Asia</h4>
            <ul>
              <li><a href="#">China</a></li>
              <li><a href="#">Japan</a></li>
              <li><a href="#">Iran</a></li>
            </ul>
          </div>

        </div>
        <div className="row pt-3 g-3">
          <div className="col-md-12 col-lg-4">
            <p className=' text-center text-md-start'>&copy; Find-Your-Dream-House.com</p>
          </div>
          <div className="col-md-12 col-lg-8">
            <ul className='list-unstayled d-flex align-items-center justify-content-evenly'>
              <li><a href="#">Terms Of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer