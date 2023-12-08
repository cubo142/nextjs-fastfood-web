import React from 'react'

const CheckBox = () => {

    const handleCheckBoxClicked = () => {
        var checkbox = document.getElementById('default-checkbox') as HTMLInputElement;
        checkbox.checked = !checkbox.checked;
    }

    return (
        <div>
            <li onClick={handleCheckBoxClicked}>
                <div className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className="hover:cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="hover:cursor-pointer ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                </div>
            </li>
        </div>
    )
}

export default CheckBox