import React from 'react'

const FilterButton = () => {
    return (
        <>
            <div className="dropdown w-full h-auto z-20">
                <button tabIndex={0} className="btn min-h-0 h-auto bg-base-300 md:rounded-l-lg md:rounded-r-none md:h-11 outline-none rounded-full md:rounded-none text-sm px-7 py-2 ">Bộ lọc</button>
                <div tabIndex={0} className=" mt-1 p-0 dropdown-content z-[1] card card-compact shadow text-primary-content rounded-lg md:w-[30.2rem] w-full h-fit">
                    <div className="card-body rounded-b-lg bg-white text-slate-950">
                        <div className="form-control">
                            <div className="flex flex-wrap gap-y-4 gap-x-1">
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giòasdasdasd</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giò</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giòasdsad</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giò</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giòasdasdsadasd</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giò</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giòasdasd</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giò</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giò</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giò</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giòasdasd</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giò</label>
                                </div>
                                <div className='w-[24%]'>
                                    <input type="checkbox" />
                                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chả giòasdasd</label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterButton