import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main className="grid min-h-[100vh] place-items-center bg-gray-950/90">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={'/peru-data-api/'}
              className="rounded-md bg-indigo-700 dark:bg-main-color/90 px-3.5 py-2.5 text-sm font-semibold dark:text-gray-200 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
