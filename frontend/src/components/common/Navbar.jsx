
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className=" bg-[#2C3E50]">
            <header className="flex flex-col lg:flex-row justify-between items-center">
                <div className="flex w-full mx-4 border-b-2 lg:border-b-0 justify-between items-center p-4 lg:p-0">
                    <h1 className="flex text-xl lg:text-2xl text-[#ECF0F1] lg:ml-8">Text Summarization</h1>
                </div>

                <nav className='visible'>
                    <ul className="flex flex-col p-4 space-y-4 lg:space-y-0 items-center lg:flex-row lg:space-x-4 lg:p-5 lg:mr-8">
                        <li>
                            <Link to="/" className="p-4 text-[#ECF0F1] hover:text-[#3498DB] hover:bg-white hover:p-2 hover:rounded-lg">
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;