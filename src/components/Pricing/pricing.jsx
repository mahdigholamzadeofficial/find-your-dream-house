import React from 'react'
import PricingCard from './PricingCard'
import styles from "./pricing.module.css"
const Pricing=()=>{
  return (
    <section className={styles.pricingSection}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-11 mx-auto text-center">
            <h5>Pricing</h5>
            <h3>The Average Prices</h3>
            <p>
              maxime id architecto commodi provident doloribus repellat laborum error, exercitationem enim molestiae eligendi, non explicabo vero quisquam corporis necessitatibus? Corporis, accusamus?
            </p>
          </div>
        </div>
        <div className="row g-4">
          <PricingCard 
            price="1000,000"
            type="Downtown Starting"
            safety={false}
            value={true}
            quality={false}
            facilities={false}
            />
          <PricingCard 
            price="1000,000"
            type="Downtown Ending"
            safety={true}
            value={true}
            quality={true}
            facilities={true}
            />
          <PricingCard 
            price="1000,000"
            type="suburban Starting"
            safety={true}
            value={true}
            quality={false}
            facilities={false}
            />
          <PricingCard 
            price="1000,000"
            type="suburban Ending"
            safety={true}
            value={true}
            quality={true}
            facilities={true}
            />
        </div>
      </div>
    </section>
  )
}
export default Pricing