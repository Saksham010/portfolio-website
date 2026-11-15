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
            <p className='text-gray-300 text-md pt-3 pl-1'> 
              <b><i>"Beauty is to be unravelled, not by love of a subject, but by the love of truth"</i></b>
            </p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Interests</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Quantum computing, Zero knowledge proofs</p>
        </div>

        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Interested to Work/Research on: </h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>
              <ul>
                <li>&#8226; Quantum algorithms research</li>
                <li>&#8226; Zero knowledge proofs</li>
                <li>&#8226; Learning complexity</li>
                <li>&#8226; Any research with abundant compute and simulation</li>
              </ul>
            </p>
        </div>
        <div className="w-3/6 mx-auto mt-10">
            <h1 className='text-white text-2xl font-bold '>Current</h1>
            <p className='text-gray-300 text-md pt-3 pl-1'>Exploring computational complexity</p>
        </div>
      </body>

      <Footer/>
    </div>
  )
}

export default App
