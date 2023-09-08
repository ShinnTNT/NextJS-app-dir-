import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome To Traversy Media</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  );
}
