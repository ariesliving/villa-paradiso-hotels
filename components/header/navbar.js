import { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

import Logo from 'components/icons/logo'
import Container from 'components/container'
import Button from 'components/button'

function Navbar() {
  const { route } = useRouter()

  return (
    <Container center>
      <nav className="f-reset">
        <div className="mobile-top">
          <Link href="/">
            <a className="mobile-logo" title="Go to the homepage">
              <Logo />
            </a>
          </Link>

          <div className="book">
            <Button href="/">Book</Button>
          </div>
        </div>

        <div className="links">
          <Link href="/">
            <a className="logo">
              <Logo />
            </a>
          </Link>

          <Link href="/">
            <a className={cn('mute', { selected: route.startsWith('/rooms') })} title="Rooms">
              Rooms
            </a>
          </Link>

          <Link href="/">
            <a className={cn('mute', { selected: route.startsWith('/about') })}>About</a>
          </Link>

          <div className="book">
            <Button href="/">Book</Button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        nav {
          position: relative;
          flex: 1;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .links {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          z-index: 1;
        }

        .links a {
          text-decoration: none;
          transition: color 0.2s ease;
          margin-left: 1rem;
        }

        .links a:hover {
          color: #000;
        }

        .links a.selected {
          color: #0070f3;
          text-shadow: 0px 0px 1px #0070f3;
        }

        .links a:first-child {
          display: flex;
          margin: 0;
        }

        a.icon,
        a.icon > :global(div.container) {
          /* Remove additional space from SVG */
          display: inline-flex;
          justify-content: center;
        }

        a.icon > :global(div.container) {
          overflow: visible;
        }

        .mobile-logo,
        .mobile-top {
          display: none;
        }

        .header-feedback {
          display: inline-flex;
        }

        .book :global(a) {
          background-color: var(--accents-1);
          color: #fff;
          border: 1px solid var(--accents-1);
          padding: 0.25rem 1rem;
          margin: 0;
        }
        .book :global(a:focus),
        .book :global(a:hover) {
          background-color: transparent;
          color: var(--accents-1);
        }

        /* Mobile */

        @media (max-width: 640px) {
          .mobile-logo {
            display: block;
          }

          nav {
            height: unset;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 1rem 0;
          }

          nav .links .logo,
          nav .links .book {
            display: none;
          }

          nav .links a {
            font-size: 14px;
          }

          nav .links a:nth-child(2) {
            margin: 0;
          }

          .mobile-top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 0.5rem;
          }

          .book {
            margin-left: 0.5rem;
          }
        }

        @media (max-width: 1020px) {
          .header-feedback {
            display: none;
          }
        }
      `}</style>
    </Container>
  )
}

export default memo(Navbar)
