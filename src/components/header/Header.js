import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_NAMES } from '../../constants/routesConstants'

export default function Header() {
  return (
    <div>
      <nav className="bg-gray-50 py-2 dark:bg-gray-100 flex  justify-center items-center">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-900 text-base font-bold dark:text-gray hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
to={ROUTE_NAMES.CONTACT}
                  className="text-gray-900 text-base font-bold dark:text-gray  hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                   to={"/login"}
                  className="text-gray-900 text-base font-bold dark:text-gray  hover:underline"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                   to={"/signup"}
                  className="text-gray-900 text-base font-bold dark:text-gray  hover:underline"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  )
}
