import { Transition } from '@headlessui/react';
import React, { useState } from 'react'
import { FiMenu, FiUser, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';




const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const isUser = false;

    const handleClickNavMenu = () => {
        setOpen(isOpen => !isOpen);
    }
    return (
        <header className='sticky py-[14px] px-[20px] border-b-[1px] border-b-[#EDEFF2]'>
            <div className='container mx-auto'>
                {/* Mobile view */}
                <div>
                    {/* Burger menu */}
                    <div onClick={handleClickNavMenu} className='w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-[18px]'>
                        <FiMenu />
                    </div>
                    {/*Navigation content "MOBILE"*/}
                    <Transition
                        className="absolute top-0 left-0 z-40 w-full h-full"
                        show={isOpen}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className={` p-[15px] bg-[#F7F8FA] w-full h-[100vh]`}>
                            {/* Head */}
                            <div className='flex justify-end'>
                                {/* Close button */}
                                <div onClick={handleClickNavMenu} className='flex items-center justify-center bg-white p-[8px] rounded-full text-[24px]'>
                                    <FiX />
                                </div>
                            </div>
                            <div className='mt-[15px]'>
                                {/* Nav items "Mobile" */}
                                {
                                    !isUser &&
                                    <>
                                        <Link onClick={handleClickNavMenu} className='flex items-center w-full py-4 px-6 bg-white text-[22px] rounded-full' to={"account/login"}><FiUser className='mr-[8px]' /> Вхід</Link>
                                    </>
                                }
                            </div>
                        </div>
                    </Transition>

                </div>
            </div>
        </header>
    )
}

export default Header