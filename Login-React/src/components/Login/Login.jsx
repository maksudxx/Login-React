import styles from "../Login/Login.module.css";
export const Login = () => {
  return (
    <div className={styles.containerLogin}>
      <p className={styles.titleLogin}>Login Account</p>
      <p className={styles.pagraphOneLogin}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id temporibus
        voluptatum possimus dolor nihil, est beatae repudiandae rem a, cumque
        quia
      </p>

      <div className={styles.containerInputs}>
        <input type="email" placeholder="EMAIL" className={styles.input} />
        <input
          type="password"
          placeholder="PASSWORD"
          className={styles.input}
        />
        <div className={styles.containerCheckbox}>
          <div>
            <input type="checkbox" />
            <p>Keep me signed in</p>
          </div>
          <p className={styles.newUser}>Create Account</p>
        </div>
        <button className={styles.btnLogin}>LOGIN</button>
      </div>
    </div>
  );
};
