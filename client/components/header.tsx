'use server'

import { login } from '@/app/actions/login'
import { register } from '@/app/actions/register'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { signOut } from 'next-auth/react'
import NavItem, { NavigationItemProps } from './nav-item'

type NavigationProps = NavigationItemProps[]

const navigationItems = [
  { href: '/', name: 'Home', current: true, variant: 'link' },
  { href: `${process.env.AUTH_A12N_ISSUER}/login`, name: 'Login', current: false, onclick: login, variant: 'auth' },
  { href: `${process.env.AUTH_A12N_ISSUER}/register`, name: 'Register', current: false, onclick: register, variant: 'auth' },
  {
    href: `${process.env.AUTH_A12N_ISSUER}/logout`, name: 'Logout', current: false,
    onclick: signOut, variant: 'auth'
  }
] as NavigationProps


export default async function Header() {

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigationItems.map((item) => (
                  <NavItem item={item} key={item.href} /> 
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigationItems.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={item.onclick}
              aria-current={item.current ? 'page' : undefined}
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900">
              {item.name}
            </DisclosureButton>

          ))}
        </div>
      </DisclosurePanel>
    </Disclosure >
  )
}
