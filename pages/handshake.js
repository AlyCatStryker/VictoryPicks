import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa';
import { MdSportsFootball, MdSportsBaseball, MdSportsBasketball } from 'react-icons/md';

export default function Handshake() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 text-black relative"
         style={{ backgroundImage: "url('/basketball-new.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      {/* Header */}
      <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
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
          <a href="https://dexscreener.com/dexscreenerlink" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <img src="/dexscreener1.png" alt="Dexscreener" className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* Content */}
      <section className="w-11/12 max-w-4xl mt-20 bg-gray-700 bg-opacity-90 p-6 rounded-lg shadow text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Handshake & Partnerships 🤝</h1>
        <p className="text-lg text-center text-gray-300">
          We value strong partnerships and trust within the community. Our handshake initiative is dedicated to forming reliable collaborations that drive innovation and growth.
        </p>

        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold mb-4">How We Build Trust</h2>
          <ul className="list-disc text-gray-300 text-left mx-auto w-10/12 md:w-8/12">
            <li>Transparent transactions and fair distribution</li>
            <li>Collaboration with reputable crypto & Web3 communities</li>
            <li>Security audits and compliance verification</li>
            <li>Commitment to long-term development</li>
          </ul>
        </div>
      </section>
    </div>
  );
}