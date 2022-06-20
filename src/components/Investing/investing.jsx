import React from 'react'
import styles from "./investing.module.css";
import InvestingCard from './InvestingCard';
import Atlanta from "../../images/atlanta.jpeg"
import Chicago from "../../images/chicago.jpeg"
import Miami from "../../images/miami.jpeg"
import NewYork from "../../images/newyork.jpeg"
import Sanfransisco from "../../images/sanfrancisco.jpeg"
import Losangeles from "../../images/losangeles.jpeg"

const Investing=()=> {
  return (
    <section className={styles.investingSection}>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-11 mx-auto">
            <h5>Investing</h5>
            <h3>The Best Cities In America</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto porro, ullam eveniet quidem aliquam quis quo enim explicabo at, laboriosam exercitationem provident iste dolorum debitis repudiandae modi! Nostrum, ut!
            </p>
          </div>
        </div>
        <div className="row g-4">
          <InvestingCard title="Sanfransisco" image= {Sanfransisco}/>
          <InvestingCard title="Atlanta" image= {Atlanta}/>
          <InvestingCard title="Chicago" image= {Chicago}/>
          <InvestingCard title="Miami" image= {Miami}/>
          <InvestingCard title="New York" image= {NewYork}/>
          <InvestingCard title="Losangeles" image= {Losangeles}/>
        </div>
      </div>
    </section>
  )
}
export default Investing;