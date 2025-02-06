import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { MdSportsFootball, MdSportsBaseball, MdSportsBasketball } from 'react-icons/md';
import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Tokenomics() {
  const data = {
    labels: ['Circulating Supply (90%)', 'VP Prize Pool (6%)', 'Team (4%)'],
    datasets: [
      {
        data: [90, 6, 4],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 text-black relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/football-new.png')] bg-cover bg-fixed opacity-40"></div>

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
            <MdSportsBasketball size={24} title='Handshake' />
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

      <section className="w-11/12 max-w-4xl bg-gray-900 bg-opacity-90 text-white p-8 rounded-lg shadow mt-20 relative z-10">
        <h1 className="text-4xl font-extrabold text-center mb-6">$VP Token Distribution</h1>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Pie Chart */}
          <div className="w-full md:w-1/2 p-4">
            <Pie data={data} options={{
              plugins: {
                legend: {
                  labels: {
                    color: 'white', // Change legend text color to white
                  },
                },
              },
            }} />
          </div>

          {/* Token Allocation Breakdown */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-extrabold mb-4">Token Allocation Breakdown</h2>

            <div className="mb-4">
              <h3 className="font-extrabold text-white text-xl">Circulating Supply (90%)</h3>
              <p className="text-gray-300">
                Fairly launched and available to the world. This ensures wide distribution and community ownership from day one.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-extrabold text-white text-xl">VP Prize Pool (6%)</h3>
              <p className="text-gray-300">
                Prize pool for participants and winners of the VictoryPicks contests. This allocation incentivizes active participation and rewards those who contribute to the ecosystem’s growth.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-extrabold text-white text-xl">Team (4%)</h3>
              <p className="text-gray-300">
                Development of the VictoryPicks ecosystem and community. This allocation ensures continued development and improvement of the platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}