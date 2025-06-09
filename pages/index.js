
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [golferCount, setGolferCount] = useState(1);

  return (
    <div className="container">
      <Head>
        <title>811 Day of Service Golf Outing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/BRK_logo.png" alt="Brooksource Logo" className="logo" />
        <img src="/EE_logo.png" alt="Eight Eleven Logo" className="logo" />
        <h1 className="title">811 Day of Service Golf Outing</h1>
        <p className="description">Join us on September 19th at Western Lakes Golf Club!</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for registering!");
          }}
          className="form"
        >
          <label>
            Registration Type:
            <select
              onChange={(e) => setGolferCount(e.target.value === "foursome" ? 4 : 1)}
            >
              <option value="individual">Individual</option>
              <option value="foursome">Foursome</option>
            </select>
          </label>
          <label>
            Golfer #1:
            <input type="text" name="golfer1" required />
          </label>
          {golferCount > 1 &&
            [...Array(golferCount - 1)].map((_, i) => (
              <label key={i}>
                Golfer #{i + 2}:
                <input type="text" name={`golfer${i + 2}`} required />
              </label>
            ))}
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <button type="submit">Register</button>
        </form>
      </main>
    </div>
  );
}
