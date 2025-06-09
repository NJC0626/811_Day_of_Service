import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [registrationType, setRegistrationType] = useState("individual");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    golfer2: "",
    golfer3: "",
    golfer4: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistrationTypeChange = (e) => {
    setRegistrationType(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>811 Day of Service Golf Outing</title>
        <meta name="description" content="Register for our charity golf outing!" />
      </Head>

      <main className={styles.main}>
        <img src="/brooksource-logo.png" alt="Brooksource Logo" className={styles.logo} />
        <img src="/eight-eleven-logo.png" alt="Eight Eleven Logo" className={styles.logo} />
        <h1 className={styles.title}>811 Day of Service Golf Outing</h1>
        <p className={styles.description}>
          Join us at <strong>Western Lakes Golf Club</strong> in Pewaukee on <strong>September 19th</strong>!
          <br />
          Shotgun start at <strong>8:00 AM</strong>, registration opens at <strong>7:15 AM</strong>.
        </p>

        <form className={styles.form}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Registration Type:
            <select name="registrationType" value={registrationType} onChange={handleRegistrationTypeChange}>
              <option value="individual">Individual Golfer - $75</option>
              <option value="foursome">Foursome - $250</option>
            </select>
          </label>
          {registrationType === "foursome" && (
            <>
              <label>
                Golfer #2:
                <input type="text" name="golfer2" value={formData.golfer2} onChange={handleChange} />
              </label>
              <label>
                Golfer #3:
                <input type="text" name="golfer3" value={formData.golfer3} onChange={handleChange} />
              </label>
              <label>
                Golfer #4:
                <input type="text" name="golfer4" value={formData.golfer4} onChange={handleChange} />
              </label>
            </>
          )}
          <button type="submit">Submit</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <p>All proceeds benefit Journey House Milwaukee | Silent Auction on-site</p>
      </footer>
    </div>
  );
}