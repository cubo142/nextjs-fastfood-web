'use client';
import React from 'react'
import FilterButton from './FilterButton';
import ProductCard from './ProductCard';

const SearchButton = () => {

    const handleButtonClick = () => {
        const modal = document.getElementById('my_modal') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
            modal.focus()
        }
    }

    return (
        <>
            <div className='hidden p-4 lg:inset-x-96 inset-x-48 absolute self-center z-10 sm:hidden flex-wrap md:gap-x-2 gap-y-4 justify-between mt-2 bg-slate-100 top-12 h-fit rounded-lg'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            {/* pc screen */}
            <div className='hidden md:flex'>
                <FilterButton />
                <form>
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="outline-none border-none block md:w-96  p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg rounded-l-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search đồ ăn, giá..." required />
                        <button type="submit" className="text-white absolute end-1.5 bottom-1 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tìm kiếm</button>
                    </div>
                </form>

            </div>


            {/* mobile screen */}
            <div className=' md:hidden inline-block'>
                <button
                    onClick={handleButtonClick}
                    className="btn min-h-0 h-10 border-none rounded-full bg-orange-700 hover:bg-orange-800  text-white shadow-lg transform active:scale-y-75 transition-transform flex outline-none "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    {/* <span className="ml-2">Tìm kiếm</span> */}
                </button>
                <dialog id="my_modal" className=" modal modal-top sm:modal-top lg:mx-auto lg:w-6/12 h-fit w-full">
                    <div className="modal-box p-4 h-auto">
                        <FilterButton />
                        <div className='search-container mt-2 grow flex border rounded-sm h-auto'>
                            <input placeholder='Tìm kiếm...' className='w-full p-2 focus:outline-none text-sm ' />
                            <button className="btn btn-ghost rounded-none">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>

                        {/*Note: khi search ra dữ liệu thì sẽ từ hidden -> flex */}
                        <div className='flex flex-wrap gap-y-4 justify-between mt-2'>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
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
        </>

    )
}

export default SearchButton