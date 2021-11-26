/* import { useState } from 'react'; */
import styles from './form.module.css';

function Form() {
  /* const [candidate, setCandidate] = useState({}); */

  // Aca va la request de POST
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  // Hacer una request para buscar por ID unico aca o en handleUpdate del Postulants/index

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formField}>
        <label>Name</label>
        <input type="text" />
      </div>
      <div className={styles.formField}>
        <label>Email</label>
        <input type="text" />
      </div>
      <div className={styles.formField}>
        <label>Username</label>
        <input type="text" />
      </div>
      <div className={styles.formField}>
        <label>Password</label>
        <input type="password" />
      </div>
      <div className={styles.formField}>
        <label>Gender</label>
        <select>
          <option value="male" key="m">
            Male
          </option>
          <option value="female" key="f">
            Female
          </option>
          <option value="Other" key="o">
            Other
          </option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
