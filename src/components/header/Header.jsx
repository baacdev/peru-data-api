import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-gray-950/90 min-h-[8vh]">
      <nav className="flex items-center mx-auto justify-between lg:justify-center max-w-screen-xl text-center p-6 lg:px-8" aria-label="Global">
        <div className="flex pr-20">
          <Link to={'/peru-data-api'} className="-m-1.5 p-1.5">
            <img
              className='h-auto w-auto'
              src='/peru-data-api/vite.svg'
              alt=''
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to={'/peru-data-api/consultar-dni'}
            className="text-gray-100 text-lg font-bold font-mono bg-indigo-700 px-4 py-2 rounded-full shadow-lg shadow-black leading-6 hover:bg-indigo-800"
          >
            CONSULTAR DNI
          </Link>
          <Link
            to={'/peru-data-api/consultar-ruc'}
            className="text-gray-100 text-lg font-bold font-mono bg-indigo-700 px-4 py-2 rounded-full shadow-lg shadow-black leading-6 hover:bg-indigo-800"
          >
            CONSULTAR RUC
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link
              to={'/peru-data-api'}
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/vite.svg"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to={'/peru-data-api/consultar-dni'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-xl font-mono font-semibold leading-7 text-gray-300 hover:bg-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Consultar DNI
                </Link>
                <Link
                  to={'/peru-data-api/consultar-ruc'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-xl font-mono font-semibold leading-7 text-gray-300 hover:bg-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Consultar RUC
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header