import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '../hooks/useAuth'

export default function Navbar() {
  const context = useAuth()
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/guides"><a>Guides</a></Link></li>
          <li onClick={() => context.login()} className="btn">Login / Signup</li>
          <li onClick={() => context.logout()} className="btn">Log out</li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  )
}
