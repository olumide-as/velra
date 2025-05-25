'use client';

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const NoPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Velra</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Head back to the Velra homepage and explore our creative work."
        />
      </Head>

      <div className="min-h-screen bg-[#040404] flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <Image
            src="/assets/nopagebg.svg" // Direct URL from public folder
            alt="Page not found"
            className="mx-auto w-full max-w-md"
            width={600}
            height={400}
          />

          <h3 className="text-white text-4xl font-semibold sm:text-5xl">
            Page not found
          </h3>
          <p className="text-white text-lg max-w-xl mx-auto">
            Sorry, the page you are looking for could not be found or has been removed.
          </p>

          <Link
            href="/"
            className="text-[#DC143C] duration-150 hover:underline font-medium inline-flex items-center gap-x-1"
          >
            Go back
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoPage;