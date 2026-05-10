
import Link from "next/link";
import React from "react";

const commonClassName = `text-gray-600 hover:text-blue-600 underline`

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-4 mb-8">
      <Link
        href="https://github.com/adnankhan46"
        className={commonClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </Link>
      <Link
        href="https://www.linkedin.com/in/adnankhan93"
        className={commonClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin
      </Link>
      <Link
        href="https://www.x.com/adnankhan_93"
        className={commonClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {"twitter(x)"}
      </Link>
      <a
        href="mailto:adnank122333@gmail.com"
        className={commonClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        email
      </a>
    </div>
  );
};

export default SocialLinks;
