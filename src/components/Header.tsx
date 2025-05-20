import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img 
              src="/images/logo-white.jpg" 
              alt="TAG Logo" 
              className="h-12 w-auto"
            />
            <Link to="/" className="text-2xl font-bold text-barbershop-blue">
              TAG
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-barbershop-blue">
              Home
            </Link>
            
            {!isAuthenticated ? (
              <Link to="/login" className="text-gray-600 hover:text-barbershop-blue">
                Login
              </Link>
            ) : (
              <Menu as="div" className="relative ml-3">
                <Menu.Button className="flex items-center gap-2 text-gray-600 hover:text-barbershop-blue">
                  <span className="hidden md:block">{user?.name}</span>
                  <UserCircleIcon className="h-8 w-8" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/dashboard"
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Dashboard
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logout}
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 