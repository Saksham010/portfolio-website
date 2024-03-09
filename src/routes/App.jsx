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
            <p className='text-gray-300 text-md pt-3 pl-1'>I'm an aspiring research engineer who loves to experiment in the web3 space.I thrive in R&D environment.Love to research about various L2 solutions and mystified by Zk technology. Currently researching Stark based ZkEVM(Starknet). Aspiring smart contract optimizoor (Gas bad). Uses Obsidain to take notes. Ability to touch grass once a day and still produce high quality work.</p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Interests</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Rollup infrastructure, EVM, Zero knowledge, Intents, Optimization, AI, Venture Capital</p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Technologies</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>C++, Typescript,Rust, React, Vite, Redux, HTML/CSS/JS, Tailwindcss, Mantine, Node/Express,Firebase, Solidity, Hardhat, Ether js, Wagmi, IPFS, Oppenzeplin/Solmate, Chainlink </p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Research</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>
              <ul>
                <li>&#8226; Account abstraction</li>
                <li>&#8226; Crosschain bridge</li>
                <li>&#8226; Zk Rollups</li>
                <li>&#8226; Zk(Privacy)</li>
                <li>&#8226; EVM</li>
                <li>&#8226; Intents</li>
              </ul>
            </p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Current</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Working on DYOR(Wallet Guard), Learning about Zk and playing around with Rust</p>
        </div>
      </body>

      <Footer/>
    </div>
  )
}

export default App
