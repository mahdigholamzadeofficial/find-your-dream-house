import React from 'react'
import styles from "./pricingCard.module.css";
import {BsFillCheckCircleFill,BsFillXCircleFill} from "react-icons/bs"
const PricingCard=({price,type,safety,value,quality,facilities})=> {
  return (
    <div className='col-md-6 col-lg-3'>
      <div className={styles.pricingCard}>
        <h5>{type}</h5>
        <h4>~{price} $</h4>
        <span className={styles.priceBorder}></span>
        <ul>
          <li><span>{safety ? <BsFillCheckCircleFill/> : <BsFillXCircleFill/>}</span>Safety</li>
          <li><span>{value ? <BsFillCheckCircleFill/> : <BsFillXCircleFill/>}</span>Value</li>
          <li><span>{quality ? <BsFillCheckCircleFill/> : <BsFillXCircleFill/>}</span>Quality</li>
          <li><span>{facilities ? <BsFillCheckCircleFill/> : <BsFillXCircleFill/>}</span>Facilities</li>
        </ul>
        <a className='btn btn-dark w-100' href="#">Get started!</a>
      </div>
    </div>
  )
}

export default PricingCard;