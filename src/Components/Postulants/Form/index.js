import styles from './form.module.css';

function PostulantsForm({ id, handleSubmit }) {
  const onSubmit = (event) => {
    event.preventDefault();
    const newCandidate = {
      name: 'Candidate ffffff',
      email: 'mail@gmaidl.com',
      username: 'mtreble1',
      password: 'tR0R234kUD',
      gender: 'male',
      address: '2386 Fuller Trail',
      phoneNumber: 545454456,
      dateOfBirth: '1956/07/18',
      zipCode: '9928',
      city: 'Bloemfontein',
      state: 'Troms',
      country: 'South Africa'
    };
    handleSubmit(newCandidate);
  };
  console.log(id);
  return (
    <form className={styles.form} onSubmit={onSubmit}>
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

export default PostulantsForm;
