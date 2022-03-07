import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="p-6 bg-slate-100">
      <Head>
        <title>TailwindCSS Examples</title>
        <meta name="description" content="tailwind css 공부하깅" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4 min-h-full flex-1 flex flex-col">
        {/* 제목 */}
        <h1 className="mb-10 text-3xl font-bold text-slate-700 mx-auto">
          TailwindCSS Docs Examples
        </h1>

        {/* 예제 1 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 1</h1>
          <div className="my-3 p-6 max-w-sm bg-white rounded-xl shadow-lg flex space-x-4 w-72">
            <div className="shrink-0">
              <img
                className="rounded-full w-14 h-14"
                src="/static/image/lulu.jpg"
                alt=""
              />
            </div>
            <div className="pt-1">
              <div className="text-xl font-medium text-black">LULU</div>
              <p className="text-sm text-slate-500 leading-3">
                Space Groove Lulu
              </p>
            </div>
          </div>
        </div>

        {/* 예제 2 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 2</h1>
          <div className="my-3 px-8 py-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-8 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              className="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0"
              src="/static/image/lulu.jpg"
              alt="Logo"
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-xl font-medium text-black">LULU</p>
                <p className="text-sm text-slate-400 leading-3">
                  Space Groove Lulu
                </p>
              </div>
              <button
                type="submit"
                className="px-4 py-1 text-sm text-indigo-500 font-semibold rounded-full border border-indigo-200 hover:text-white hover:bg-indigo-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-1 active:bg-indigo-600"
              >
                Message
              </button>
            </div>
          </div>
        </div>

        {/* 예제 3 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 3</h1>
          <button
            type="submit"
            className="m-5 px-7 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-3xl text-white font-semibold"
          >
            Save changes
          </button>

          <button
            type="submit"
            className="m-5 px-7 py-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 rounded-3xl text-white font-semibold focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Save changes
          </button>
        </div>

        {/* 예제 4 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 4</h1>
          <ul className="my-6 p-6 w-72 bg-white rounded-xl shadow-md divide-y divide-slate-200">
            <li className="flex py-4 first:pt-0 last:pb-0">
              <img
                className="h-10 w-10 rounded-full"
                src="/static/image/lulu.jpg"
                alt=""
              />
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-slate-900">LULU</p>
                <p className="text-sm text-slate-500 truncate">
                  lulu@example.com
                </p>
              </div>
            </li>
            <li className="flex py-4 first:pt-0 last:pb-0">
              <img
                className="h-10 w-10 rounded-full"
                src="/static/image/lulu.jpg"
                alt=""
              />
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-slate-900">LULU</p>
                <p className="text-sm text-slate-500 truncate">
                  lulu@example.com
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* 예제 5 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 5</h1>
          <table className="my-6 p-6 w-96 bg-white rounded-xl shadow-md divide-y divide-slate-200">
            <tbody className="rounded-full">
              <tr className="odd:bg-white even:bg-slate-100">
                <td className="text-base font-medium text-slate-900 px-6 py-3">
                  LULU
                </td>
                <td className="text-sm text-slate-600">FE Developer</td>
                <td className="text-sm text-slate-600">lulu@example.com</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-100">
                <td className="text-base font-medium text-slate-900 px-6 py-3">
                  LULU
                </td>
                <td className="text-sm text-slate-600">FE Developer</td>
                <td className="text-sm text-slate-600">lulu@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 예제 6 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 6</h1>
          <div className="my-4 p-6 max-w-sm bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <form className="w-80">
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Username
                </span>
                <input
                  type="text"
                  value="abcde"
                  disabled
                  className="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  className="mt-1 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Password
                </span>
                <input
                  type="password"
                  className="mb-3 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>
              <div className="text-right">
                <button
                  type="submit"
                  className="mt-3 px-7 py-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 rounded-3xl text-white font-semibold focus:outline-none focus:ring focus:ring-indigo-200"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* 예제 7 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 7</h1>
          <a
            href="#"
            className="group block max-w-xs mx-auto rounded-lg m-4 p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-2 hover:bg-indigo-500 hover:ring-indigo-500"
          >
            <div className="flex items-center space-x-2">
              <svg
                className="h-7 w-7 stroke-indigo-500 group-hover:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 19H6.931A1.922 1.922 0 015 17.087V8h12.069C18.135 8 19 8.857 19 9.913V11"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 7.64L13.042 6c-.36-.616-1.053-1-1.806-1H7.057C5.921 5 5 5.86 5 6.92V11M17 15v4M19 17h-4"
                />
              </svg>
              <h3 className="text-slate-900 group-hover:text-white text-base font-semibold">
                New project
              </h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-sm">
              Create a new project from a variety of starting templates.
            </p>
          </a>
        </div>

        {/* 예제 8 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 8</h1>
          <div className="my-4 p-6 max-w-sm bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <form className="w-80">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  className="peer mt-1 mb-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
                <p className="invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address
                </p>
              </label>
            </form>
          </div>
        </div>

        {/* 예제 9 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 9</h1>
          <blockquote className="my-6 text-2xl font-semibold italic text-center text-slate-900">
            When you look
            <span className="mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-400 relative inline-block">
              <span className="relative text-white">annoyed</span>
            </span>
            all the time, people think that you're busy.
          </blockquote>
        </div>

        {/* 예제 10 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 10</h1>
          <label className="my-6 relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
        </div>

        {/* 예제 11 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 11</h1>
          <form className="my-6 flex items-center space-x-5">
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src="static/image/lulu.jpg"
                alt="lulu"
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </label>
          </form>
        </div>

        {/* 예제 12 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 12</h1>
          <div className="my-6 px-9 py-6 max-w-md w-96 bg-white rounded-lg shadow-md">
            <p className="pb-3 font-semibold text-lg">Ingredients</p>
            <ul className="marker:text-indigo-400 list-disc pl-7 space-y-3 text-slate-500">
              <li>5 cups chopped Porcini mushrooms</li>
              <li>1/2 cup of olive oil</li>
              <li>3lb of celery</li>
            </ul>
          </div>
        </div>

        {/* 예제 13 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 13</h1>
          <div className="my-6 selection:bg-indigo-300 selection:text-indigo-900">
            <p>
              So I started to walk into the water. I won't lie to you boys, I
              was terrified. But I pressed on, and as I made my way past the
              breakers a strange calm came over me. I don't know if it was
              divine intervention or the kinship of all living things but I tell
              you Jerry at that moment, I <em>was</em> a marine biologist.
            </p>
          </div>
        </div>

        {/* 예제 14 */}
        <div className="my-6 mx-auto">
          <h1 className="font-semibold text-lg text-slate-700">Ex 14</h1>
          <button
            type="button"
            className="my-6 px-6 py-3 flex items-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white font-semibold"
            disabled
          >
            <svg
              className="motion-reduce:hidden animate-spin h-5 w-5 mr-3"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-5"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </button>
        </div>

        {/* 예제 15 */}
        <div className="my-6">
          <h1 className="font-semibold text-lg text-slate-700">Ex 15</h1>
          <div className="max-w-lg my-6">
            <details
              className="open:bg-white dark:open:bg-slate:900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
              open
            >
              <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                Why do they call it Ovaltine?
              </summary>
              <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                <p>
                  The mug is round. The jar is round. They should call it
                  Roundtine.
                </p>
              </div>
            </details>
          </div>
        </div>
      </main>
    </div>
  );
}
