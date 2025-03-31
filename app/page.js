"use client";

import { useState } from "react";

export default function Home() {
  const [rank, setRank] = useState("");
  const [payout, setPayout] = useState(null);
  const calculatePayout = (e) => {
    e.preventDefault();
    if (!rank || rank < 1 || rank > 200) {
      alert("Please enter a valid rank (1-200)");
      return;
    }

    const totalPrize = 1_000_000;
    const totalWeights = 20100;
    const weight = 201 - parseInt(rank, 10);
    const share = (weight / totalWeights) * totalPrize;

    setPayout(share.toFixed(2));
  };
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-indigo-100 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          UNION KAITO YAP LEADERBOARD CALCULATOR
        </h1>
        <form onSubmit={calculatePayout} className="space-y-4">
          <div>
            <label
              htmlFor="rank"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Your Rank (1-200)
            </label>
            <input
              type="number"
              id="rank"
              min="1"
              max="200"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Calculate My Share
          </button>
        </form>

        {payout !== null && (
          <div className="mt-6 p-4 bg-indigo-50 rounded-md">
            <h2 className="text-lg font-semibold text-indigo-800">
              Your Estimated Payout:
            </h2>
            <p className="text-2xl font-bold text-[#00987e]">${payout}</p>
            <p className="text-sm text-gray-600 mt-1">
              Based on rank <span className="font-medium">{rank}</span> in the
              UNION KAITO YAP LEADERBOARD.
            </p>
          </div>
        )}

        <div className="mt-6 text-xs text-gray-500">
          <p>
            Formula: <code>(201 - Your Rank) / 20,100 × $1,000,000</code>
          </p>
        </div>
      </div>
    </div>
  );
}
