import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa';
import { MdSportsFootball, MdSportsBaseball, MdSportsBasketball } from 'react-icons/md';

export default function Roadmap() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 text-black relative" style={{ backgroundImage: "url('/baseball-new.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
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
      <section className="w-11/12 max-w-4xl mt-20 bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Roadmap</h1>
        <ul className="list-disc list-inside">
          <li className="mb-4">
            <h2 className="text-xl font-bold">Phase 1: Launch</h2>
            <p className="text-gray-300">Launch the platform and engage the community with our first free-to-play contests.</p>
          </li>
          <li className="mb-4">
            <h2 className="text-xl font-bold">Phase 2: Expansion</h2>
            <p className="text-gray-300">Introduce more sports and events, expanding our user base globally.</p>
          </li>
          <li className="mb-4">
            <h2 className="text-xl font-bold">Phase 3: Rewards</h2>
            <p className="text-gray-300">Incorporate token-based rewards to incentivize active participation and community contributions.</p>
          </li>
          <li className="mb-4">
            <h2 className="text-xl font-bold">Phase 4: Partnerships</h2>
            <p className="text-gray-300">Collaborate with major brands and influencers to enhance visibility and credibility.</p>
          </li>
          <li className="mb-4">
            <h2 className="text-xl font-bold">Phase 5: Innovation</h2>
            <p className="text-gray-300">Continue to innovate by adding new features, such as live event tracking and predictive analytics.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}