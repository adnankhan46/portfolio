
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="socials" className="mt-10 text-center text-lg text-gray-500 pb-28 md:pb-8 scroll-mt-24">
      <p className="text-sm">© 2025 AK. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a
          href="https://www.github.com/adnankhan46"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/adnankhan93"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.x.com/adnankhan_93"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter (X)
        </a>
      </div>
    </footer>
  );
};

export default Footer;
