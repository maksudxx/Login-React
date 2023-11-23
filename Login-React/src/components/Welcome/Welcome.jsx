import styles from "../Welcome/Welcome.module.css"
import imgSofttek from "../../assets/Softtek.gif"
export const Welcome = () => {
  return (
    <div className={styles.containerWelcome}>
      <div className={styles.containerInfo}>
      <img src={imgSofttek} alt="softtek-logo" className={styles.imageLogo}/>
        <p className={styles.pagraphOne}>Nice to see you again</p>
        <h1>WELCOME BACK</h1>
        <p className={styles.pagraphTwo}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quo
          commodi odit quia assumenda excepturi magni error, sequi consequatur
          nesciunt molestias placeat deleniti sunt magnam qui? Commodi officia
          voluptate a.
        </p>
       
      </div>
      
    </div>
  );
};
