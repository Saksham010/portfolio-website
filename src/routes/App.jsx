import MemorizedNavBar from './nav';
import Footer from './footer';
import '../App.css'
function App() {
  return (
    <div className='bg-[#1D1E20] font-mono'>
      <MemorizedNavBar/>
      <body>
        <div className="w-3/6 mx-auto mt-4 ">
            <h1 className='text-white text-2xl font-bold mt-16'>Intro</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Trying to build clearest internal model of the world we live in.I thrive in R&D environment. Love to learn Zk and quantum computing. Uses Obsidain to take notes. Ability to touch grass once a day and still produce high quality work.
            </p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Interests</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Rollup infrastructure, EVM, Zero knowledge, Intents, QC, AI, Venture Capital</p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Technologies</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>C++, Typescript,Rust, React, Vite, Redux, HTML/CSS/JS, Tailwindcss, Mantine, Node/Express,Firebase, Solidity, Hardhat, Ether js, Wagmi, IPFS, Oppenzeplin/Solmate, Chainlink </p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Interested to Work/Research on: </h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>
              <ul>
                <li>&#8226; Zk(Privacy)</li>
                <li>&#8226; Zk Rollups</li>
                <li>&#8226; Quantum algorithms research</li>
              </ul>
            </p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Current</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Working on implementing zk-STARK</p>
        </div>
      </body>

      <Footer/>
    </div>
  )
}

export default App
