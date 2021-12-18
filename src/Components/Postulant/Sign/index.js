import styles from './sign.module.css';

function Sign() {
  return (
    <section className={styles.container}>
      <div className={styles.containerTitle}>
        <h2 className={styles.title}>Are you ready to take your first step into your future?</h2>
      </div>
      <div className={styles.containerButton}>
        <button className={styles.btnLogin}>SIGN IN</button>
        <button className={styles.btnRegister}>SIGN UP</button>
      </div>
    </section>
  );
}

export default Sign;
