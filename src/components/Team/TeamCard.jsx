import React from 'react';
import styles from "./TeamCard.module.css"
import {BsInstagram,BsFacebook, BsTwitter} from "react-icons/bs"
const TeamCard=({image,career,name})=> {
  return (
    <div className='col-md-3 d-flex justify-content-center'>
      <div className={styles.teamCard}>
        <img src={image} alt="person images" />
        <h6>{name}</h6>
        <h6>{career}</h6>
        <ul className={styles.socialMediaIcons}>
          <li><a href="#"><BsInstagram/></a></li>
          <li><a href="#"><BsFacebook/></a></li>
          <li><a href="#"><BsTwitter/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default TeamCard;