'use server'

import { login } from '@/app/actions/login'
import { register } from '@/app/actions/register'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

type NavigationItem = {
  href?: string
  name: string
  current: boolean
  onclick?: () => void
}

type NavigationProps = NavigationItem[]

const navigation = [
  { href: '/', name: 'Home', current: true },
  { href: `${process.env.AUTH_A12N_ISSUER}/login`, name: 'Login', current: false, onclick: login },
  { href: `${process.env.AUTH_A12N_ISSUER}/register`, name: 'Register', current: false, onclick: register },
] as NavigationProps

export default async function Header() {
  const authNavItems = ['Login', 'Register']
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
                {navigation.map((item) => (
                  authNavItems.includes(item.name) ?
                    <form action={item.onclick} key={item.name} className={
                      item.current
                        ? 'px-3 bg-gray-900 text-white font-medium rounded-md'
                        : 'text-gray-300 hover:text-white '
                    }>
                      <button type="submit">{item.name}</button>
                    </form> : <a
                    key={item.name}
                    href={item.href}
                      onClick={item.onclick}
                    aria-current={item.current ? 'page' : undefined}
                    className={
                      item.current
                        ? 'px-3 bg-gray-900 text-white font-medium rounded-md'
                        : 'text-gray-300 hover:text-white '
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
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
