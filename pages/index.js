import { useState, useEffect } from "react";
import io from "socket.io-client";
import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa';
import { MdSportsFootball, MdSportsBaseball, MdSportsBasketball } from 'react-icons/md';

const socket = io("https://your-backend-url.com"); // Change this to your backend URL

export default function Home() {
  const [wallet, setWallet] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [predictions, setPredictions] = useState({
    finalScore: "",
  });

  useEffect(() => {
    socket.on("newSubmission", (walletAddress) => {
      setNotifications((prev) => [
        `${walletAddress} just submitted their bet!`,
        ...prev.slice(0, 4),
      ]);
    });

    return () => socket.off("newSubmission");
  }, []);

  const handleChange = (e) => {
    setPredictions({ ...predictions, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!wallet) {
      alert("Please enter your wallet address.");
      return;
    }

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wallet, ...predictions }),
    });

    if (response.ok) {
      socket.emit("newSubmission", wallet); // Send event to WebSocket
      alert("Prediction submitted!");
    } else {
      alert("Error submitting prediction.");
    }
  };

  const athletes = [
    {
      name: "Patrick Mahomes",
      bets: [
        { key: "mahomesRushingYards", label: "Rushing Yards (30.5)" },
        { key: "mahomesPassingYards", label: "Passing Yards (253.5)" },
        { key: "mahomesPassingTDs", label: "Passing Touchdowns (1.5)" },
        { key: "mahomesRushingAttempts", label: "Rushing Attempts (6.5)" },
        { key: "mahomesInterceptions", label: "Interceptions (0.5)" },
        { key: "mahomesRushingTDs", label: "Rushing TDs (0.5)" },
      ],
    },
    {
      name: "Travis Kelce",
      bets: [
        { key: "kelceReceivingYards", label: "Receiving Yards (62.5)" },
        { key: "kelceRushRecTDs", label: "Rush + Rec TDs (0.5)" },
        { key: "kelceReceptions", label: "Receptions (6.5)" },
        { key: "kelceTargets", label: "Targets (8.5)" },
      ],
    },
    {
      name: "Isiah Pacheco",
      bets: [
        { key: "pachecoRushingYards", label: "Rushing Yards (22.5)" },
        { key: "pachecoRushingAttempts", label: "Rushing Attempts (6.5)" },
      ],
    },
    {
      name: "Xavier Worthy",
      bets: [
        { key: "worthyReceivingYards", label: "Receiving Yards (54.5)" },
        { key: "worthyReceptions", label: "Receptions (5.5)" },
      ],
    },
    {
      name: "Jalen Hurts",
      bets: [
        { key: "hurtsRushingYards", label: "Rushing Yards (38.5)" },
        { key: "hurtsPassingYards", label: "Passing Yards (214.5)" },
        { key: "hurtsPassingTDs", label: "Passing Touchdowns (1.5)" },
        { key: "hurtsCompletions", label: "Completions (18.5)" },
      ],
    },
    {
      name: "Saquon Barkley",
      bets: [
        { key: "rushingYards", label: "Rushing Yards (115.5)" },
        { key: "longestRush", label: "Longest Rush (23.5)" },
        { key: "rushingAttempts", label: "Rushing Attempts (22.5)" },
        { key: "receptions", label: "Receptions (2.5)" },
        { key: "fumblesLost", label: "Fumbles Lost (0.5)" },
      ],
    },
    {
      name: "AJ Brown",
      bets: [
        { key: "brownReceivingYards", label: "Receiving Yards (70.5)" },
        { key: "brownReceptions", label: "Receptions (5.5)" },
      ],
    },
    {
      name: "Devonta Smith",
      bets: [
        { key: "smithReceivingYards", label: "Receiving Yards (50.5)" },
        { key: "smithReceptions", label: "Receptions (4.5)" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 text-black relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/trophy-new.png')] bg-cover bg-fixed opacity-40"></div>

      {/* Header */}
      <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center relative z-10">
        <a href="/" className="text-xl font-bold hover:underline">VictoryPicks</a>
        <div className="flex gap-4">
          <a href="/tokenomics" className="hover:text-gray-400">
            <MdSportsFootball size={24} title='Tokenomics' />
          </a>
          <a href="/roadmap" className="hover:text-gray-400">
            <MdSportsBaseball size={24} title='Roadmap' />
          </a>
          <a href="/handshake" className="hover:text-gray-400">
            <MdSportsBasketball size={24} title="Handshake" />
          </a>
          <a href="https://t.me/yourtelegramlink" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTelegramPlane size={24} />
          </a>
          <a href="https://twitter.com/yourtwitterlink" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://discord.com/yourdiscordlink" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaDiscord size={24} />
          </a>
          <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <img src="/dexscreener1.png" alt="Dexscreener" className="w-6 h-6" title="Dexscreener" />
          </a>
        </div>
      </header>

      {/* Content */}
      <section className="w-11/12 max-w-3xl mt-8 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow relative z-10">
        <h1 className="text-3xl font-bold text-center text-white">Free Entry! Predict and Win Big Prizes 🏈💰</h1>
      </section>

      <section className="w-11/12 max-w-3xl mt-4 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow relative z-10">
        <p className="text-lg text-center text-gray-300">
          We’re giving back to the Solana blockchain with this 100% free-to-play giveaway! Whether your time in crypto has been profitable or painful, we want to reward the community and show that real, trustworthy teams exist. No sign-ups, no personal info, no catches—just enter your Solana wallet, make your picks, and get paid if you win!
        </p>
      </section>

      <section className="w-11/12 max-w-3xl mt-6 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow relative z-10">
        <label className="block font-semibold text-lg text-white">Wallet Address:</label>
        <input
          type="text"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          className="w-full p-2 border rounded mt-2 bg-gray-600 text-white"
          placeholder="Enter your Solana wallet"
        />
      </section>

      <section className="w-11/12 max-w-3xl mt-6 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow relative z-10">
        {athletes.map((athlete) => (
          <div key={athlete.name} className="mt-6">
            <h2 className="text-2xl font-bold border-b border-gray-500 pb-2 mb-4 text-white">{athlete.name}</h2>
            {athlete.bets.map((bet) => (
              <div key={bet.key} className="mt-4">
                <label className="text-gray-300">{bet.label}</label>
                <select
                  name={bet.key}
                  onChange={handleChange}
                  className="w-full mt-1 border rounded p-2 bg-gray-600 text-white"
                >
                  <option value="">Select</option>
                  <option value="higher">Higher</option>
                  <option value="lower">Lower</option>
                </select>
              </div>
            ))}
          </div>
        ))}
        <div className="mt-8">
          <h3 className="font-bold text-white">Final Score Prediction</h3>
          <label className="block mt-2 text-gray-300">What is your prediction for the final score of Super Bowl LIX?</label>
          <input
            type="text"
            name="finalScore"
            onChange={handleChange}
            className="w-full mt-2 border rounded p-2 bg-gray-600 text-white"
            placeholder="e.g. 31-24"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded mt-6"
        >
          Submit Your Prediction
        </button>
      </section>
    </div>
  );
}