import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/favicon.png'

export default function Navbar() {
    const [mobileToggler, setMobileToggler] = useState(false)

    function toggleMobile() {
        setMobileToggler(prevState => !prevState)
    }
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 transition-all duration-500 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-transparent'>
            <div className='max-w-7xl mx-auto px-6 md:px-4 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    <NavLink className='flex items-center gap-3 group' to='/'>
                        <div className='relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300'>
                            <img className='w-full h-full object-cover' src={logo} alt='Logo' />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent'>عدسة</span>
                            <span className='text-xs text-orange-400/80 hidden md:block tracking-wide'>عالم التصوير الفوتوغرافي</span>
                        </div>
                    </NavLink>
                    <div className='hidden md:flex items-center'>
                        <div className='flex items-center bg-[#161616] rounded-full p-1 border border-[#262626]'>
                            <NavLink className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "text-neutral-400 hover:text-white"}`} to='/' end>الرئيسية</NavLink>
                            <NavLink className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "text-neutral-400 hover:text-white"}`} to='/blog'>المدونة</NavLink>
                            <NavLink className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "text-neutral-400 hover:text-white"}`} to='/about'>من نحن</NavLink>
                        </div>
                    </div>
                    <div className='hidden md:flex items-center gap-3'>
                        <button className='p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 h-5' />
                        </button>
                        <NavLink className='btn-primary text-sm rounded-full hover:-translate-y-1' to='/blog'>ابدأ القراءة</NavLink>
                    </div>
                    <button className='md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]' onClick={toggleMobile}>
                        <FontAwesomeIcon icon={mobileToggler ? faXmark : faBars} />
                    </button>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${mobileToggler ? ' max-h-[400px] opacity-100' : ' max-h-0 opacity-0'}`}>
                    <div className='bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]'>
                        <div className='flex flex-col space-y-1'>
                            <NavLink className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${isActive ? "bg-linear-to-r from-orange-500/30 to-orange-600/30 text-white" : "text-neutral-400 hover:text-white hover:bg-[#1a1a1a]"}`} to='/' end>الرئيسية</NavLink>
                            <NavLink className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${isActive ? "bg-linear-to-r from-orange-500/30 to-orange-600/30 text-white" : "text-neutral-400 hover:text-white hover:bg-[#1a1a1a]"}`} to='/blog'>المدونة</NavLink>
                            <NavLink className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${isActive ? "bg-linear-to-r from-orange-500/30 to-orange-600/30 text-white" : "text-neutral-400 hover:text-white hover:bg-[#1a1a1a]"}`} to='/about'>من نحن</NavLink>
                            <NavLink className='btn-primary text-sm text-center mt-2 rounded-full' to='/blog'>ابدأ القراءة</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
