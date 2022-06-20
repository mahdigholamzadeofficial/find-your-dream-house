import React from 'react';
import TeamCard from './TeamCard';
import styles from "./team.module.css";
import person1 from "../../images/person1.jpg"
import person2 from "../../images/person2.jpg"
import person3 from "../../images/person3.jpg"
import person4 from "../../images/person4.jpg"
const Team=()=>{
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto text-center">
            <h5>Team</h5>
            <h3>Meet Our Crew Member</h3>
            <p>
              sit amet consectetur adipisicing elit. Illum, assumenda soluta omnis alias distinctio doloremque sed mollitia voluptatum iusto autem repellat neque expedita fugit! Rem, minima dicta. Tempora, eaque a.
            </p>
          </div>
        </div>
        <div className='row justify-content-evenly g-4'>
          <TeamCard image={person1} name="Jack" career = "Architect"/>
          <TeamCard image={person2} name="Oliver" career = "Architect"/>
          <TeamCard image={person3} name="Liam" career = "Business"/>
          <TeamCard image={person4} name="Maria" career = "Electronic"/>
        </div>
      </div>
    </section>
  )
}
export default Team