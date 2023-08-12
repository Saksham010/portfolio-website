
import './App.css'

import mylady from "./assets/milady.png";
function App() {
// 1D1E20
  return (
    <div className='bg-[#1D1E20] font-mono'>
      <nav className='w-3/6 mx-auto flex pt-16'>
        <div className="w-20">
          <img src={mylady} className='rounded-md'></img>
        </div>
        <div>
          <h1 className='text-white font-bold px-4 text-2xl pt-2'>Saksham Thapa</h1>
          <table className='my-1'>
            <tr className='text-rose-400'>
              <th className='border-dashed border-r-2 border-rose-400 pl-4 pr-3 hover:underline hover:cursor-pointer'>Home</th>
              <th className='border-dashed border-r-2 border-rose-400 px-3 hover:underline hover:cursor-pointer'>Projects</th>
              <th className='border-dashed border-r-2 border-rose-400 px-3 hover:underline hover:cursor-pointer'>Articles</th>
              <th className='pl-3 hover:underline hover:cursor-pointer'>Experience</th>
            </tr>
          </table>
        </div>
      </nav>

      <body>
        <div className="w-3/6 mx-auto mt-4 ">
            <h1 className='text-white text-2xl font-bold mt-16'>Intro</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>I'm a self-taught research engineer who is focused on building cutting-edge DEFI solutions. Love to research L2 solutions for scaling ethereum. Mystified by Zk technology,currently researching Stark based ZkEVM(Starknet). Aspiring smart contract optimizoor (Gas bad). Uses Obsidain to take notes. Ability to touch grass once a day and still produce high quality work.</p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Interests</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Rollup infrastructure, EVM, Wallet Guard, Zero knowledge, Intents, Building Derivatives(Futures,Options), Optimization</p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Technologies</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>C++, Typescript, React, Vite, Redux, HTML/CSS/JS, Tailwindcss, Mantine, Node/Express, Solidity, Hardhat, Ether js, Wagmi, IPFS, Oppenzeplin/Solmate, Chainlink </p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Goals</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>
              <ul>
                <li>&#8226; Options trading dex</li>
                <li>&#8226; Wallet Guard</li>
                <li>&#8226; Rust</li>
                <li>&#8226; MEV bot</li>
                <li>&#8226; Cairo</li>
                <li>&#8226; Intent based infrastructure</li>
              </ul>
            </p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Current</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Working on order book dex on Ethereum, Learning about Eigen Layer and diving deep into gas optimization.</p>
        </div>
      </body>
      <footer className='w-3/6 mx-auto mt-10'>
        <div className='flex justify-between py-4 items-center '>
          <p className='text-gray-400 text-md flex-1'>Copyright © 2023 Saksham</p>
          <div className='flex items-center justify-end flex-1  '>
          <p className='text-gray-400 text-md pr-5' >Reach out to me </p>
            
          <ul class="flex flex-1 items-center  gap-x-1 sm:flex-initial">
              <li>
                <a class="inline-block p-2 sm:hover:text-link " href="https://github.com/Saksham010" target="_blank" rel="noopener noreferrer">
                  <svg class="h-6 w-6 hover:stroke-rose-400" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9CA3AF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                    </path>
                  </svg>
                  <span class="sr-only">Github</span>
                </a>
              </li>
              <li>
                <a class="inline-block p-2 sm:hover:text-link" href="https://twitter.com/ouranosTheos" target="_blank" rel="noopener noreferrer">
                  <svg class="h-6 w-6 hover:stroke-rose-400" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9CA3AF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z">
                    </path>
                  </svg>
                  <span class="sr-only">Twitter</span>
                </a>
              </li>

              <li>
                <a class="inline-block p-2 sm:hover:text-link" href="mailto:sakshamthapa010@gmail.com">
                  <svg class="h-6 w-6 hover:stroke-rose-400" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9CA3AF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <polyline points="3 7 12 13 21 7"></polyline>
                  </svg>
                  <span class="sr-only">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
