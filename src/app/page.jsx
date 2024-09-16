import React from 'react';
import { MainLogo } from '@/app/components/MainLogo';
import { PhoneLogo } from '@/app/components/PhoneLogo';

async function fetchData() {
  try {
    const res = await fetch('https://dev.to/api/articles');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return { error: 'Data fetching failed' };
  }
}

export default async function Home() {
  const data = await fetchData();

  if (data.error) {
    return <div>{data.error}</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <header className="p-7 w-[1400px] flex justify-between ">
        <div className="flex gap-5">
          <div>
            <MainLogo />
          </div>
          <div className="flex">
            <select className="select border-neutral-300 border-r-0 rounded-r-none focus:outline-none">
              <option disabled selected>
                Rent
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <label className="input border-neutral-300 border-l-0 rounded-l-none flex items-center gap-2 w-[600px] focus-within:outline-none">
              <input
                type="text"
                className="grow focus:outline-none border-none"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center gap-1">
            <PhoneLogo />
            <div>+ 1 (800) 657 8976</div>
          </div>
        </div>
      </header>
      <main>
        <div>
          {data.map((article, index) => (
            <div key={index}>{article.title}</div>
          ))}
        </div>
      </main>
    </div>
  );
}
