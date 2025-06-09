import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Home() {
  const [registrationType, setRegistrationType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    golfer2: "",
    golfer3: "",
    golfer4: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>811 Day of Service Golf Outing</title>
      </Head>
      <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <Image src="/images/banner.png" width={800} height={200} alt="Event Banner" />
        <h1>811 Day of Service Golf Outing</h1>
        <p>Date: September 19, 2025 — 8:00 AM Shotgun | Registration at 7:15 AM</p>
        <p>Location: Western Lakes Golf Club, Pewaukee, WI</p>

        {submitted ? (
          <h2>Thank you for registering!</h2>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
            <label>Name: <input required name="name" onChange={handleChange} /></label><br />
            <label>Email: <input required name="email" type="email" onChange={handleChange} /></label><br />
            <label>Phone: <input required name="phone" onChange={handleChange} /></label><br />
            <label>Registration Type:
              <select required onChange={(e) => setRegistrationType(e.target.value)}>
                <option value="">Select</option>
                <option value="individual">Individual - $75</option>
                <option value="foursome">Foursome - $250</option>
              </select>
            </label><br />
            {registrationType === "foursome" && (
              <>
                <label>Golfer #2: <input name="golfer2" onChange={handleChange} /></label><br />
                <label>Golfer #3: <input name="golfer3" onChange={handleChange} /></label><br />
                <label>Golfer #4: <input name="golfer4" onChange={handleChange} /></label><br />
              </>
            )}
            <button type="submit">Submit</button>
          </form>
        )}

        <div style={{ marginTop: "3rem" }}>
          <h2>Location</h2>
          <iframe
            src="https://maps.google.com/maps?q=Western%20Lakes%20Golf%20Club,%20Pewaukee,%20WI&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </>
  );
}