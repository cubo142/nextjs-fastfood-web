'use client';
import React from 'react'
import CheckBox from './CheckBox';

const SearchButton = () => {

    const handleButtonClick = () => {
        const modal = document.getElementById('my_modal') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
            modal.focus()
        }
    }

    return (
        <div>
            <button
                onClick={handleButtonClick}
                type="button"
                className=" transition delay-150 hover:bg-gray-400 text-black bg-gray-200 focus:outline-none font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center pr-2 justify-center w-40 sm:w-56">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <p className='ml-2'>Tìm kiếm</p>
            </button>
            <dialog id="my_modal" className="  modal modal-top sm:modal-top lg:mx-auto lg:w-6/12">
                <div className="modal-box p-4">
                    <div className='search-container flex border rounded-sm'>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="flex btn btn-ghost rounded-none w-32">
                                <span>Bộ lọc</span>
                                <svg className="h-5 w-5 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 6h6a3 3 0 0 1 3 3v10l-5 -5m10 0l-5 5" /></svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52 h-fit">
                                <CheckBox />
                            </ul>
                        </div>
                        <input placeholder='Tìm kiếm...' className='w-full p-2 focus:outline-none' />
                        <button className="btn btn-ghost rounded-none">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    <div className='flex'>
                        <div className='filter-bar border w-full h-56 p-2 '>

                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default SearchButton