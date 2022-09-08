import { 
    RiHomeWifiLine,
    RiSearchLine
 } from 'react-icons/ri'; 
 import {
    HiOutlineLibrary
 } from 'react-icons/hi'

function Sidebar() {
    return (
        <div>
            
            <div>
                <button>
                    <RiHomeWifiLine  className='h-5 w-5'/>
                    <p>Home</p>
                </button>
                <button>
                    <RiSearchLine  className='h-5 w-5'/>
                    <p>Procurar</p>
                </button>
                <button>
                    <HiOutlineLibrary  className='h-5 w-5'/>
                    <p>Sua Biblioteca</p>
                </button>
            </div>
        </div>
    );
}

export default Sidebar; 
