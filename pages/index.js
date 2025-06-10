import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>811 Day of Service Golf Outing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.logos}>
            <img src="/assets/brooksource-logo-placeholder.png" alt="Brooksource Logo" className={styles.logo} />
            <img src="/assets/eight-eleven-logo-placeholder.png" alt="Eight Eleven Logo" className={styles.logo} />
          </div>
          <h1>811 Day of Service Golf Outing</h1>
          <p>Join us for a fun day on the green supporting Journey House!</p>
          <a href="#register" className={styles.registerBtn}>Register Now</a>
        </div>
      </header>
      <main className={styles.details}>
        <div className={styles.container}>
          <h2>Event Details</h2>
          <div className={styles.eventInfo}>
            <p><strong>Location:</strong> Western Lakes Golf Club, Pewaukee</p>
            <p><strong>Date:</strong> August 11, 2025</p>
            <p><strong>Schedule:</strong> 7:15 AM Registration | 8:00 AM Shotgun Start</p>
          </div>
          <h2>About the Cause</h2>
          <p>
            We’re proud to partner with <strong>Journey House</strong>, a Milwaukee-based organization
            empowering families through education, youth development, and community engagement. All
            proceeds from this event will support their mission.
          </p>
          <h2>Silent Auction</h2>
          <p>
            Don’t miss our <strong>silent auction</strong> featuring exclusive items and experiences! Bid
            during the event to help raise funds for Journey House.
          </p>
          <a href="#register" className={styles.secondaryBtn}>Get Involved</a>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2025 811 Day of Service | Powered by Brooksource & Eight Eleven</p>
        </div>
      </footer>
    </div>
  );
}
