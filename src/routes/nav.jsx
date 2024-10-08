import musashi from "../assets/musashi.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation(){
    const navigate = useNavigate();
    return(
        <>
        <nav className='w-3/6 mx-auto flex pt-16'>
            <div className="w-20">
            <img src={musashi} className='rounded-md'></img>
            </div>
            <div>
            <h1 className='text-white font-bold px-4 text-2xl pt-2'>Saksham Thapa</h1>
            <table className='my-1'>
                <tr className='text-rose-400'>
                <th className='border-dashed border-r-2 border-rose-400 pl-4 pr-3 hover:underline hover:cursor-pointer'onClick={()=>{navigate('/');}}>Home</th>
                <th className='border-dashed border-r-2 border-rose-400 px-3 hover:underline hover:cursor-pointer'onClick={()=>{navigate('/project');}}>Projects</th>
                <th className='border-dashed border-r-2 border-rose-400 px-3 hover:underline hover:cursor-pointer' onClick={()=>{navigate('/article')}}>Articles</th>
                <th className='pl-3 hover:underline hover:cursor-pointer' onClick={()=>{navigate('/experience')}}>Experience</th>
                </tr>
            </table>
            </div>
        </nav>
        </>
    )
}

const MemorizedNavBar = React.memo(Navigation);
export default MemorizedNavBar;