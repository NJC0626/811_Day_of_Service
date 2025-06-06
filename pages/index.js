
import Head from "next/head";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>811 Day of Service</title>
      </Head>
      <div className="container">
        <img src="/EE_black_HEX_horizontal-01.png" alt="Eight Eleven Logo" className="logo" />
        <img src="/BRK_2c_HEX_horizontal-01 (1).png" alt="Brooksource Logo" className="logo" />
        <h1 className="title">811 Day of Service</h1>
        <p className="description">
          Join us on September 19th at Western Lakes Golf Club in Pewaukee, WI for our annual golf outing!
        </p>
        <a href="#register" className="button">Register Now</a>
      </div>
    </>
  );
}
