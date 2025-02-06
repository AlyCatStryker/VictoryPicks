import { FaTelegramPlane, FaTwitter, FaDiscord, FaYoutube } from 'react-icons/fa';
import { MdSportsFootball, MdSportsBaseball, MdSportsBasketball } from 'react-icons/md';

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">VictoryPicks</h1>
      <div className="flex gap-4">
        <a href="/tokenomics" className="hover:text-gray-400">
          <MdSportsFootball size={24} />
        </a>
        <a href="#" className="hover:text-gray-400">
          <MdSportsBaseball size={24} />
        </a>
        <a href="#" className="hover:text-gray-400">
          <MdSportsBasketball size={24} />
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
        <a href="https://youtube.com/youryoutubelink" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaYoutube size={24} />
        </a>
      </div>
    </header>
  );
}