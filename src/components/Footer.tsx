import { Linkedin, Instagram, Mail } from "lucide-react"; // Ensure you have lucide-react installed

const Footer = () => {
  return (
    <footer className="w-full bg-pink-100 py-6 px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Brand Name */}
        <p className="text-gray-600 text-sm">© 2025 Team Babble SE-24. All rights reserved.</p>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-pink-500 transition">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-500 transition">
            <Instagram size={20} />
          </a>
          <a href="mailto:hello@babble.com" className="text-gray-500 hover:text-pink-500 transition">
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
