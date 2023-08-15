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
            <p className='text-gray-300 text-md pt-3 pl-1'>I'm a self-taught research engineer who is focused on building cutting-edge DEFI solutions. Love to research L2 solutions for scaling ethereum. Mystified by Zk technology,currently researching Stark based ZkEVM(Starknet). Aspiring smart contract optimizoor (Gas bad). Uses Obsidain to take notes. Ability to touch grass once a day and still produce high quality work.</p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Interests</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Rollup infrastructure, EVM, Wallet Guard, Zero knowledge, Intents, Building Derivatives(Futures,Options), Optimization</p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Technologies</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>C++, Typescript, React, Vite, Redux, HTML/CSS/JS, Tailwindcss, Mantine, Node/Express,Firebase, Solidity, Hardhat, Ether js, Wagmi, IPFS, Oppenzeplin/Solmate, Chainlink </p>
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

      <Footer/>
    </div>
  )
}

export default App
