import React from 'react'
import styles from "./landing.module.css"
const Landing=()=>{
  return (
    <section className={styles.landingSection}>
      <div className='container'>
        <div className='row'>
          <div className="col-md-6 mx-auto text-center">
            <h1 className={styles.headerH1}>Find Your Dream House!</h1>
            <p className={styles.headerP}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque iusto nemo exercitationem voluptate sint, illum totam sed id commodi ea accusamus ut vero.
            </p>
            <button className='btn btn-light'>Get Started!</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Landing