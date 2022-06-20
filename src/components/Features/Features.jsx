import React from 'react'
import { BsCurrencyDollar, BsHeart,BsFillEmojiAngryFill,BsFillPeopleFill,BsShieldShaded,BsFillChatLeftTextFill } from "react-icons/bs";
import styles from "./features.module.css"
import FeaturesCard from './FeaturesCard';
const Features=()=>{
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-11 text-center mx-auto">
            <h5>Features</h5>
            <h3>Our Features</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, laboriosam. Incidunt ex voluptate velit, magnam adipisci deleniti tempore vitae nihil fugiat, nulla, obcaecati molestias sunt necessitatibus eligendi delectus. Dolorum, suscipit.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-3">
          <FeaturesCard icon = {<BsCurrencyDollar/>} title="Don't worry about Price"/>
          <FeaturesCard icon = {<BsHeart/>} title="Healthy"/>
          <FeaturesCard icon = {<BsFillEmojiAngryFill/>} title="Scammer"/>
          <FeaturesCard icon = {<BsFillPeopleFill/>} title="You have our advice!"/>
          <FeaturesCard icon = {<BsShieldShaded/>} title="Privacy"/>
          <FeaturesCard icon = {<BsFillChatLeftTextFill/>} title="Suggestion"/>
        </div>
      </div>
    </section>
  )
}
export default Features