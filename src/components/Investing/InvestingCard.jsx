import React from 'react'
import styles from "./investingCard.module.css"
const InvestingCard=({title,image})=> {
  return (
    <div className='col-md-6 col-lg-4'>
      <div className={styles.investingCard}>
          <img src={image} alt="countriesImages" />
          <div className={styles.investingCardDetail}>
            <div>
              <h4>{title}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat non id, repellat aperiam reiciendis necessitatibus!
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}
export default InvestingCard;