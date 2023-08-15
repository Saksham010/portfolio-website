import MemorizedNavBar from "./nav"
import Footer from "./footer"
export default function Projects(){
    return(
        <div className='bg-[#1D1E20] font-mono'>
            <MemorizedNavBar/>
            <body>

            <div className="w-3/6 mx-auto mt-4 ">
                <p className='text-gray-300 text-md pt-3 pl-1 mt-12'>List of projects i've built in Web3 space. Ongoing project: Orderbook decentralized exchange.</p>
            </div>   
            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-white text-2xl font-bold '>Wraprotocol</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        <li>&#8226; Live: <a href="https://rent-nft.vercel.app"  target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">https://rent-nft.vercel.app/</a></li>
                        <li>&#8226; Repo: <a href="https://github.com/Saksham010/Wraprotocol" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">https://github.com/Saksham010/Wraprotocol</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'>An NFT renting protocol for renting ERC721 tokens without collateral. Original NFT is held on an escrow contract while copy NFT is given to borrower which is integrated in a project that needs to enable renting. Built on polygon mumbai testnet.</p>
            </div>
            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-white text-2xl font-bold '>TrustMarket</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        <li>&#8226; Live: <a href="https://trust-market.vercel.app/marketplace" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">https://trust-market.vercel.app/marketplace</a></li>
                        <li>&#8226; Repo: <a href="https://github.com/Harshkumar62367/TrustMarket" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">https://github.com/Harshkumar62367/TrustMarket</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'>A datamarket place built on Filecoin FEVM with builtin in DAO, to combat listing of fraudulent dataset. Designed working architecture, smart contract and worked on
                UI integration. Malicious users are flagged or slashed by the DAO depending upon the type of listing. Built for EthForAll hackathon.</p>
            </div>

            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-white text-2xl font-bold '>PepeJobBoard</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        <li>&#8226; Live: <a href="https://www.pepejobs.xyz" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">pepejobs.xyz</a></li>
                        <li>&#8226; Repo: <a href="https://github.com/Saksham010/pepe-job-board" target="_blank"  className="hover:cursor-pointer hover:underline hover:text-rose-400">https://github.com/Saksham010/pepe-job-board</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'>Web3 job board with pepe theme built on firebase.</p>
            </div>

            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-white text-2xl font-bold '>Small EVM Clone</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        <li>&#8226; Repo: <a href="https://github.com/Saksham010/EVM" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">https://github.com/Saksham010/EVM</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'> Basic execution context built with C++. Simulates opcode operation on evm storage. Integrated multiple opcodes: PUSH,MUL,STOP,MSTORE8,RETURN. Works on supported bytecode compiled from assembly.</p>
            </div>

            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-white text-2xl font-bold '>Araswap</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        <li>&#8226; Live: <a href="https://dexv1.vercel.app" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">https://dexv1.vercel.app</a></li>
                        <li>&#8226; Repo: <a href="https://github.com/Saksham010/DEFI/tree/main/DexV1" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">https://github.com/Saksham010/DEFI/tree/main/DexV1</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'> Decentralized exchange built on eth testnet that mirrors uniswap v1.</p>
            </div>

            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-white text-2xl font-bold '>AraswapV2 contract</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        <li>&#8226; Repo: <a href="https://github.com/Saksham010/DEFI/tree/main/DexV2" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">https://github.com/Saksham010/DEFI/tree/main/DexV2</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'> Decentralized exchange contract built on eth testnet that mirrors uniswap v2.</p>
            </div>

            <div className="w-3/6 mx-auto mt-8">
                <h1 className='text-white text-2xl font-bold '>BundleSwap</h1>
                <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        <li>&#8226; Live: <a href="https://bundle-swap.vercel.app" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">https://bundle-swap.vercel.app</a></li>
                        <li>&#8226; Repo: <a href="https://github.com/Saksham010/BundleSwap" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">https://github.com/Saksham010/BundleSwap</a></li>

                    </ul>
                </p>
                <p className='text-gray-300 text-md pt-3 pl-1'>Tokenswap aggregator that reduces the cost of swapping on a dex. Used chainlink for contract automation for initiating swapping after a pool has been active for specified timeframe. Bundle tokenswap to perform low gas single trade execution.</p>
            </div>
 

            </body>
    
            <Footer/>
      </div>
    )
}