import React from 'react'
import styles from "./countries.module.css";
import CountriesCard from './CountriesCard';
import Germany from "../../images/germany-flag.jpg";
import France from "../../images/france-flag.jpg";
import Italy from "../../images/italy-flag.jpg"
const Countries=()=>{
  return (
    <section className={styles.countriesSection}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-11 text-center mx-auto">
            <h5>Countries</h5>
            <h3>The Most Beautiful Countries In Europe</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nisi pariatur totam consequatur eius iste ad iusto voluptatum, dolorum quisquam sint, suscipit dolor beatae expedita eveniet esse alias maiores nam!
            </p>
          </div>
        </div>
        <div className="row g-4">
          <CountriesCard countryName = "Germany" images= {Germany}/>
          <CountriesCard countryName = "Italy" images= {Italy}/>
          <CountriesCard countryName = "France  " images= {France}/>
        </div>
      </div>
    </section>
  )
}
export default Countries