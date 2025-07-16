'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="static inset-x-0 top-0 z-20 bg-background">
      <div className="container">
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          dir="ltr"
          className="relative z-10 flex max-w-max flex-1 items-center justify-center min-w-full"
        >
          <div className="flex w-full items-center justify-between gap-12 py-4">
            {/* Logo */}
 <div className="flex items-center gap-3">
      <Link href="/">
        <Image
          src="/LogoBhai.jpeg"
          alt="Logo"
          width={50}
          height={50}
          className="h-12 w-auto rounded-full"
        />
      </Link>
      <div className={"text-2xl font-semibold tracking-wide text-gray-800 "}>
        Prem Pal Jewellers
      </div>
    </div>

            {/* Desktop Navigation */}
            <div style={{ position: 'relative' }}>
              <ul
                data-orientation="horizontal"
                className="group flex-1 list-none items-center justify-center space-x-1 hidden lg:flex"
                dir="ltr"
              >
                {['Platform', 'Use cases', 'Developers', 'Resources'].map((label) => (
                  <li key={label}>
                    <button
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                    >
                      {label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

       

            {/* Mobile Hamburger */}
            <div className="flex items-center gap-4 lg:hidden">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                aria-label="Main Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu size-4"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dropdown Placeholder */}
          <div className="absolute left-0 top-full flex justify-center"></div>
        </nav>
      </div>
    </div>
  );
}
