import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropdownCategory() {
  return (
    <div className="h-[70px] w-full bg-[#022278] flex justify-evenly items-center font-simple text-white text-lg mt-10 max-md:flex-wrap">
      <Menu as="div" className="relative inline-block text-left mb-4 md:mb-0">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-[16px] font-semibold text-white">
            Restaurants
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white" />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 w-[130px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Juice Bar
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Food
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Cafe
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Pizza
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
      <Menu as="div" className="relative inline-block text-left mb-4 md:mb-0">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-[16px] font-semibold text-white">
            Education
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white" />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 w-[120px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                IT Course
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Chinese
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                French
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                English
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Khmer
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
      <Menu as="div" className="relative inline-block text-left mb-4 md:mb-0">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-[16px] font-semibold text-white">
            Auto Services
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white" />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 w-[150px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Auto repair
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Car dealer
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Car wash
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
      <Menu as="div" className="relative inline-block text-left mb-4 md:mb-0">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-[16px] font-semibold text-white">
            Home Services
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white" />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 w-[160px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Electricians
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Contractors
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Plumbers
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Cleaner
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                HVAC
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
      <Menu as="div" className="relative inline-block text-left mb-4 md:mb-0">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-[16px] font-semibold text-white">
            Electronics
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white" />
          </MenuButton>
        </div>
        <MenuItems
          transition
          className="absolute right-0 z-10 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                TV and Audio repair
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Computer repair
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Camera repair
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-5 py-2 text-sm text-gray-700 data-[focus]:bg-Primary data-[focus]:text-white"
              >
                Phone repair
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}
