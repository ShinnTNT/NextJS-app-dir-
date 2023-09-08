import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Traversy Media</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Our Teams</Link>
          <Link href="/code/repo">Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;