import Link from 'next/link';
import React from 'react'

const NavLinks = () => {
  return (
    <div >
      <div>
        <ul className="hidden md:flex md:items-center">
          <Link href="/about">
            <li className="mx-4 uppercase hover:border-b  border-gray-600 text-xl">
              Why us
            </li>
          </Link>
          <Link href="/contact">
            <li className="mx-4 uppercase hover:border-b border-gray-600 text-xl">
              Contact
            </li>
          </Link>
          <Link href="/services">
            <li className="mx-4 uppercase hover:border-b  border-gray-600 text-xl">
              services
            </li>
          </Link>
          <Link href="/ourservices">
            <li className="mx-4 uppercase hover:border-b  border-gray-600 text-xl">
              our-services
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavLinks