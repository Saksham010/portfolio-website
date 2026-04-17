import MemorizedNavBar from './nav';
import Footer from './footer';
import '../App.css'
export default function Article() {
  return (
    <div className='bg-[#1D1E20] font-mono'>
      <MemorizedNavBar/>
      <body>
        <div className="w-3/6 mx-auto mt-4 ">
            <h1 className='text-white text-2xl font-bold mt-16'>Articles</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>List of articles written on my <a href='https://hashnode.com/@sakshamthapa' target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Hashnode</a> and <a href='https://medium.com/@vendettalabsz' target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Medium</a></p>

        </div>
        <div className="w-3/6 mx-auto mt-8">
            <h1 className='text-white text-md font-bold '>Solidity Gas Optimization</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>
              <ul>
                <li>&#8226; <a href='https://sakshamthapa.hashnode.dev/gas-optimization-series-part-1' target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Packing variables</a></li>
                <li>&#8226; <a href='https://sakshamthapa.hashnode.dev/gas-optimization-series-part-2' target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Caching state </a></li>
                <li>&#8226; <a href='https://sakshamthapa.hashnode.dev/gas-optimization-series-part-3' target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Unchecked operation</a></li>

              </ul>
            </p>
        </div>
        <div className="w-3/6 mx-auto mt-8">
            <h1 className='text-white text-md font-bold '>UniswapX: Intent Based Routing Protocol</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        <li>&#8226; <a href="https://medium.com/coinmonks/uniswapx-dutch-auction-based-routing-protocol-2f867964bed3"  target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Medium</a></li>

                    </ul>
            </p>
        </div>
        
        <div className="w-3/6 mx-auto mt-8">
            <h1 className='text-white text-md font-bold '>Blogs</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        <li>&#8226; <a href="https://ouranostheos.blogspot.com/2024/12/positioning-for-next-verticals-of-human.html"  target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Positioning for the next verticals of human society</a></li>

                    </ul>
                    <ul>
                        <li>&#8226; <a href="https://ouranostheos.blogspot.com/2025/11/the-boundary-between-natural-processes.html"  target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">The boundary between natural processes and computation</a></li>

                    </ul>
                    <ul>
                        <li>&#8226; <a href="https://ouranostheos.blogspot.com/2025/12/formalizing-observer-behind-observer.html"  target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Formalizing the observer behind the observer</a></li>

                    </ul>
                    <ul>
                        <li>&#8226; <a href="https://ouranostheos.blogspot.com/2026/02/peering-deep-beyond-abundance.html"  target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Peering deep beyond abundance</a></li>

                    </ul>
                    <ul>
                        <li>&#8226; <a href="https://ouranostheos.blogspot.com/2026/03/nature-of-irreducibility-and-information.html"  target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Nature of irreducibility and information</a></li>

                    </ul>
            </p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Hackmd</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>
                    <ul>
                        <li>&#8226; <a href="https://hackmd.io/@sakshamthapa/SJx8cybCll"  target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Thoughts on ZKP</a></li>

                    </ul>
                    <ul>
                        <li>&#8226; <a href="https://hackmd.io/@sakshamthapa/quantum"  target="_blank" className="hover:cursor-pointer hover:underline hover:text-rose-400 text-sm italic">Notes(Quantum)</a></li>

                    </ul>
            </p>
        </div>



      </body>

      <Footer/>
    </div>
  )
}

