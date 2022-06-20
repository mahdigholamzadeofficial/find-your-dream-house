import React from 'react'
import styles from "./featureCard.module.css"
const FeaturesCard=({title,icon})=> {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className={styles.featureCard}>
          <div className={styles.featuresCardIcon}><span>{icon}</span></div>
          <h4>{title}</h4>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum accusamus ipsam omnis? Possimus veniam, sint, ipsa perspiciatis.
          </p>
        </div>
      </div>
    </>
  )
}
export default FeaturesCard;