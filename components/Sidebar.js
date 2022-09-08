import { 
    RiHomeWifiLine,
    RiSearchLine
 } from 'react-icons/ri'; 
 import {
    HiOutlineLibrary
 } from 'react-icons/hi'
 import {
    BsPlusCircleDotted,
    BsHeart
 } from 'react-icons/bs'
 import {
    FiRss
 }from 'react-icons/fi'

function Sidebar() {
    return (
        <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>   
            <div className='space-y-4'>
                <button className='flex items-center space-x-2 hover:text=white'>
                    <RiHomeWifiLine  className='h-5 w-5'/>
                    <p>Home</p>
                </button>
                <button className='flex items-center space-x-2 hover:text=white'>
                    <RiSearchLine  className='h-5 w-5'/>
                    <p>Procurar</p>
                </button>
                <button className='flex items-center space-x-2 hover:text=white'>
                    <HiOutlineLibrary  className='h-5 w-5'/>
                    <p>Sua Biblioteca</p>
                </button>
                <hr className='border-t-[0.1px] border-gray-900' />

                <button className='flex items-center space-x-2 hover:text=white'>
                    <BsPlusCircleDotted  className='h-5 w-5'/>
                    <p>Criar Playlist</p>
                </button>
                <button className='flex items-center space-x-2 hover:text=white'>
                    <BsHeart  className='h-5 w-5'/>
                    <p>Músicas que gostou</p>
                </button>
                <button className='flex items-center space-x-2 hover:text=white'>
                    <FiRss  className='h-5 w-5'/>
                    <p>Suas Músicas</p>
                </button>
                <hr className='border-t-[0.1px] border-gray-900' />
            
                <p className='cursor-pointer hover:text-white'>Nome da Playlist...</p>
                <p className='cursor-pointer hover:text-white'>Nome da Playlist...</p>
                <p className='cursor-pointer hover:text-white'>Nome da Playlist...</p>
                <p className='cursor-pointer hover:text-white'>Nome da Playlist...</p>
                <p className='cursor-pointer hover:text-white'>Nome da Playlist...</p>
                <p className='cursor-pointer hover:text-white'>Nome da Playlist...</p>
                <p className='cursor-pointer hover:text-white'>Nome da Playlist...</p>
                <p className='cursor-pointer hover:text-white'>Nome da Playlist...</p>
                <p className='cursor-pointer hover:text-white'>Nome da Playlist...</p>
                <p className='cursor-pointer hover:text-white'>Nome da Playlist...</p>
                <p className='cursor-pointer hover:text-white'>Nome da Playlist...</p>
            </div>
        </div>
    );
}

export default Sidebar; 
