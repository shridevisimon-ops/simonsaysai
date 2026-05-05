import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar({ onSignOut }) {
  const router = useRouter();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/chat', label: 'Chat' },
    { href: '/insights', label: 'Insights' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' }
  ];

  return (
    <nav className="flex justify-between items-center px-20 py-6">
      <Link href="/" className="text-xl font-medium tracking-wide text-[#1A1A1A] hover:text-[#6C8CFF] transition-colors">
        simonsays
      </Link>

      <div className="flex gap-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors ${
              router.pathname === item.href
                ? 'text-[#6C8CFF]'
                : 'text-[#6B7280] hover:text-[#1A1A1A]'
            }`}
          >
            {item.label}
          </Link>
        ))}

        <button
          onClick={onSignOut}
          className="text-sm font-medium text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}