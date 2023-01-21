import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link style={linkStyle} href="/">
          Home
        </Link>
        <Link style={linkStyle} href="/about">
          About
        </Link>
        <Link style={linkStyle} href="/projects">
          Projects
        </Link>
        <Link style={linkStyle} href="/contact">
          Contacts
        </Link>
    </div>
)

export default Header