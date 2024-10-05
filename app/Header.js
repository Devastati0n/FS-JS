import Link from 'next/link';
import './shared/header.css'

export default function Header() {
  return (

    <header>
      <nav class="nav">
        
        <Link class="header-title" href="/">My-Superbowl</Link>

         <ul class="header-nav"> 
          <Link href="/">Link</Link>
          <Link href="/">Link2</Link>
          <Link href="/">Link3</Link>
          <Link href="/">Sign-In</Link>

         </ul>
      </nav>
    </header>
  );
}