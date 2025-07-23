"use client";

import React, { useState } from "react";

export default function TokenAllocationCalculator() {
  const [mindshare, setMindshare] = useState(0);
  const [fdv, setFDV] = useState(50000000);

  const totalSupply = 1_000_000_000;
  const communityAllocationPercent = 0.325;

  const allocationTokens = (communityAllocationPercent / 100) * totalSupply;
  const userTokens = (mindshare / 100) * allocationTokens;
  const tokenPrice = fdv / totalSupply;
  const userDollarValue = userTokens * tokenPrice;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      {" "}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-300">
          Union Yapper Allocation Calculator
        </h1>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-sm">
            Mindshare (%)
          </label>
          <input
            type="number"
            className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={mindshare}
            onChange={(e) => setMindshare(parseFloat(e.target.value) || 0)}
            min="0"
            max="100"
            step="0.01"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-sm">FDV ($)</label>
          <input
            type="number"
            className="w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={fdv}
            onChange={(e) => setFDV(parseFloat(e.target.value))}
            min="0"
            step="1000000"
          />
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg mb-1">You receive:</p>
          <p className="text-4xl font-bold text-green-400">
            $
            {userDollarValue.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="text-lg mt-1 text-blue-300">
            (~ {``} $U {``}
            {userTokens.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
            )
          </p>
        </div>
        <p className="text-xs text-gray-400 mt-6 text-center">
          Based on a {communityAllocationPercent}% community allocation from a
          1B token supply.
        </p>
        <p className="text-s text-center text-yellow-500 mt-2">
          FDV: ${fdv.toLocaleString(undefined)}
        </p>
        <p className="text-xs text-white mt-4">by @__medico_</p>
      </div>
    </div>
  );
}
