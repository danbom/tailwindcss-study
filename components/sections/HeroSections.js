/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Button from "../common/Button";

const navigation = [
  { name: "회사 소개", href: "#" },
  { name: "고객센터", href: "#" },
  { name: "자주 묻는 질문", href: "#" },
  { name: "공동인증서 관리", href: "#" },
  { name: "채용", href: "#" },
];

export default function HeroSections() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="relative mx-auto z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32">
          <Popover>
            <div className="relative pt-3 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#" className="w-20">
                      <span className="sr-only">Workflow</span>
                      <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 453.07 120"
                        class=" "
                      >
                        <path
                          d="M124.25 59.34a54.37 54.37 0 00-53.4-48.06h-.6a54.58 54.58 0 00-27.31 7.35l-.41.25-.36.21C11.09 37.6 0 80.34 0 106.36l25-14.45c8.82 16.81 25.75 27.88 44.62 28.09h.6a53.62 53.62 0 006.3-.37 54.37 54.37 0 0047.73-60.29zM399.63 86.56c3.67 7.29 10.23 11.08 18.91 11.06 8.52 0 13.08-4.15 13.06-9 0-5.93-8.84-7.28-19.36-9.38-13.85-2.88-29.24-7.1-29.24-24.45 0-13.85 13.33-25.91 33.58-25.81 16.08 0 26.17 5.56 33.64 15.09L432.73 54.2c-3.36-5.47-8.55-8.65-16.16-8.63-8.22 0-12.17 3.38-12.16 8 0 5.17 6.72 6.52 18.75 9.08 13.71 2.7 29.86 7.38 29.91 25 0 12.79-11.35 27.27-35.25 27.19-18 .05-29.93-6.17-36.83-17.44zM324.52 86.56c3.68 7.29 10.23 11.08 18.91 11.06 8.52 0 13.08-4.15 13.07-9 0-5.93-8.85-7.28-19.36-9.38-13.86-2.86-29.25-7.08-29.29-24.43 0-13.85 13.32-25.91 33.57-25.81 16.09 0 26.17 5.56 33.65 15.09L357.62 54.2c-3.36-5.47-8.55-8.65-16.16-8.63-8.22 0-12.17 3.38-12.15 8 0 5.17 6.71 6.52 18.75 9.08 13.7 2.7 29.85 7.38 29.9 25 0 12.79-11.34 27.27-35.25 27.19-18 .05-29.93-6.17-36.82-17.44zM258.26 29a42.92 42.92 0 1042.92 42.9A42.93 42.93 0 00258.26 29zm0 65.81a22.89 22.89 0 1122.89-22.91 22.89 22.89 0 01-22.89 22.89zM204.23 89.13c-2.64 2.11-8.17 4.71-10.94 4.71-5.38 0-9.07-3.07-9.07-11.83V49.4h25.55V30.66h-25.55V0l-21.29 12.29v18.37h-17V49.4h17v34.52c0 22.6 10.54 30.9 27.9 30.9 7.68 0 17.93-4.55 23.3-8.54z"
                          fill="#0064ff"
                        ></path>
                      </svg>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 rounded-lg text-sm text-gray-900 font-medium tracking-tighter hover:bg-slate-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-14 mx-auto max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-36 lg:mt-36 lg:px-8 xl:mt-36">
            <div className="sm:text-center lg:text-center">
              <h1 className="text-4xl tracking-tighter font-extrabold text-gray-900 sm:text-5xl md:text-6xl space-y-6">
                <div>금융의 모든 것</div>
                <div>토스에서 쉽고 간편하게</div>
              </h1>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <Button
                    icon="/static/image/applekorea.png"
                    text="App Store"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    icon="/static/image/googleplay.png"
                    text="Google Play"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute w-full top-0">
        <img
          className="w-full h-screen object-cover"
          src="static/image/section1.jpg"
          alt=""
        />
      </div>
      <div class="absolute top-0 w-full h-5/6 bg-gradient-to-t from-white/10 to-white/100"></div>
    </div>
  );
}
