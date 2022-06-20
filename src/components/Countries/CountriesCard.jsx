import React from 'react'
import styles from "./countriesCard.module.css"
const CountriesCard=({images,countryName})=> {
  return (
    <div className='col-lg-4'>

      <div className={styles.countriesCard}>
        <div className={styles.countriesCardInner}>
          <div className={styles.countriesCardInnerFront}>
            <img src={images} alt="country name" />
          </div>

          <div className={styles.countriesCardInnerBack}>
            <h3>{countryName}</h3>
            <p>adipisicing elit. Neque esse rerum doloremque dicta ullam fugit, suscipit aperiam accusantium expedita laborum nam, id corrupti saepe aspernatur culpa ad architecto, provident hic.</p>
            <button className='btn btn-light'>Read more!</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CountriesCard