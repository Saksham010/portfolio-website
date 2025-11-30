import Navigation from "./nav"
import Footer from "./footer"
export default function Experience(){
    return(
        <div className='bg-[#1D1E20] font-mono'>
            <Navigation/>
            <body>

                <div className="w-3/6 mx-auto mt-4 ">
                    <p className='text-gray-300 text-md pt-3 pl-1 mt-12'>Experiences with fellowship, hackathons and bootcamp</p>
                </div>   
                <div className="w-3/6 mx-auto mt-8">
                    <h1 className='text-white text-2xl font-bold '>States Dao Fellow</h1>
                    <p className='text-gray-300 text-md pt-3 pl-1'>
                        <ul>
                            <li>&#8226; Time: Jul 2022 - Sep 2022 </li>
                            <li>&#8226; Organization: <a href="https://statesdao.club/" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">States DAO</a></li>

                        </ul>
                    </p>
                    <p className='text-gray-300 text-md pt-3 pl-1'>Collaborated with mentors to build NFT renting protocol called Wraprotocol. Got to network with loads of great builders and researchers. Helped me get my feet wet in web3 and made me familiar formal presentations.</p>
                </div>

                <div className="w-3/6 mx-auto mt-8">
                    <h1 className='text-white text-2xl font-bold '>Lumos Lab Build It Hackathon</h1>
                    <p className='text-gray-300 text-md pt-3 pl-1'>
                        <ul>
                            <li>&#8226; Time: Sep 2022 - Nov 2022 </li>
                            <li>&#8226; Organization: <a href="https://www.lumoslabs.co/" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">Lumos Lab</a></li>

                        </ul>
                    </p>
                    <p className='text-gray-300 text-md pt-3 pl-1'>Polished Wraprotocol, integrated marketplace and brought it to the hackathon. Won a pool prize for the project.</p>
                </div>

                <div className="w-3/6 mx-auto mt-8">
                    <h1 className='text-white text-2xl font-bold '>ETH For All Hackathon</h1>
                    <p className='text-gray-300 text-md pt-3 pl-1'>
                        <ul>
                            <li>&#8226; Time: Feb 4 2023 - Feb 20 2023 </li>
                            <li>&#8226; Organization: <a href="https://ethindia.co/" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">Eth India (Devfolio)</a></li>

                        </ul>
                    </p>
                    <p className='text-gray-300 text-md pt-3 pl-1'>Built TrustMarket which is a datamarketplace on top of FEVM, with a DAO to resolve fraudulent data listing on a marketplace. </p>
                </div>
                <div className="w-3/6 mx-auto mt-8">
                    <h1 className='text-white text-2xl font-bold '>ZK Bootcamp</h1>
                    <p className='text-gray-300 text-md pt-3 pl-1'>
                        <ul>
                            <li>&#8226; Time: Mar 2023 - Apr 2023 </li>
                            <li>&#8226; Organization: <a href="https://www.encode.club/" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">Encode Club</a></li>

                        </ul>
                    </p>
                    <p className='text-gray-300 text-md pt-3 pl-1'>Learned basic cryptography maths. Expanded knowledge about zero knowledge proofs, different proving systems eg: Snark,Stark,Bulletproof. Got hands on experience with Cairo,protostar. Got introduction to different DSL like: Noir,Cairo,Circom etc, and intro about active projects building with zk (eg: Mina,Aztec,Tornado Cash,Starknet,Zksync,Scroll,Polygon). </p>
                </div>

                <div className="w-3/6 mx-auto mt-8">
                    <h1 className='text-white text-2xl font-bold '>WISER Quantum program</h1>
                    <p className='text-gray-300 text-md pt-3 pl-1'>
                        <ul>
                            <li>&#8226; Time: June 2025 - July 2025 </li>
                            <li>&#8226; Organization: <a href="https://www.thewiser.org/" target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400">WISER (Washington Institute for STEM, Entrepreneurship, and Research)</a></li>

                        </ul>
                    </p>
                    <p className='text-gray-300 text-md pt-3 pl-1'>Explored quantum algorithms for solving PDEs </p>
                </div>
            

            </body>
    
            <Footer/>
      </div>
    )
}
