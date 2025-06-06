import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [isFoursome, setIsFoursome] = useState(false);

  return (
    <>
      <Head>
        <title>Brooksource & Eight Eleven Golf Outing</title>
        <meta name="description" content="Join us for our annual golf outing!" />
      </Head>
      <main className="min-h-screen bg-green-100 text-gray-800 p-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <img src="/brooksource.png" alt="Brooksource Logo" className="h-12 mb-4" />
          <img src="/eight_eleven.png" alt="Eight Eleven Logo" className="h-12 mb-4" />
          <h1 className="text-2xl font-bold mb-4">Brooksource & Eight Eleven Golf Outing</h1>
          <p className="mb-2">📍 Western Lakes Golf Club, Pewaukee, WI</p>
          <p className="mb-6">📅 September 19th | 🕖 7:15 AM Registration | ⛳ 8:00 AM Shotgun Start</p>

          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
            <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" required />
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => setIsFoursome(e.target.value === 'foursome')}
            >
              <option value="">Select Entry Type</option>
              <option value="individual">Individual - $75</option>
              <option value="foursome">Foursome - $250</option>
            </select>

            {isFoursome && (
              <div className="space-y-2">
                <input type="text" placeholder="Golfer #2" className="w-full p-2 border rounded" />
                <input type="text" placeholder="Golfer #3" className="w-full p-2 border rounded" />
                <input type="text" placeholder="Golfer #4" className="w-full p-2 border rounded" />
              </div>
            )}

            <button
              type="button"
              onClick={() => window.open(isFoursome ? 'https://buy.stripe.com/test_7sY6oG9nG93Y5avbc887K01' : 'https://buy.stripe.com/test_3cIdR8dDW6VQeL5dkg87K00', '_blank')}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Register & Pay
            </button>
          </form>
        </div>
      </main>
    </>
  );
}