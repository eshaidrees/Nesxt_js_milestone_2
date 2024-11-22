import Link from "next/link";
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <h2><Link href="/">My Portfolio</Link></h2>
      <ul className="list">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>

      </ul>
    </div>
  );
} 