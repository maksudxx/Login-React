import { Login } from "../../components/Login/Login";
import { Welcome } from "../../components/Welcome/Welcome";
import styles from "../Login/ViewLogin.module.css"
export const ViewLogin = () => {
  return (
    <div className={styles.containerLogin}>
      <Welcome />
      <Login />
    </div>
  );
};
