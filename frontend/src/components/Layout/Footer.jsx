import { Github, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black text-white mt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Lets Connect!
              </h3>
              <p className="text-gray-400 mt-2">
                Open to opportunities in Full-Stack Development
              </p>
            </div>

            <div className="flex space-x-6">
              
                <a href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>

              
              <a href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              
                <a href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-sky-500/50 text-gray-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>Copyright {currentYear} Portfolio. Built with React and Tailwind CSS.</p>
            <p className="mt-2">Seeking opportunities in Full-Stack Development</p>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient"></div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;