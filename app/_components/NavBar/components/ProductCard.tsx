import React from 'react'

const ProductCard = () => {
    return (
        <div className="card card-compact w-[47%] bg-base-100 shadow-xl md:w-[18%]">
            <figure><img src="https://cdn.tgdd.vn/Files/2017/03/28/965860/bi-quyet-lam-mon-cha-gio-vang-gion-thom-ngon-tai-nha-202205241601315587.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <p className=' text-lg font-bold'>Chả giò chiên nước mắm</p>
                <p className=' text-sm font-bold text-red-600'>44.000đ/hộp</p>
                <div className="badge badge-error">HOT</div>
                <p>1 hộp 6 miếng</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Chiên</div>
                    <div className="badge badge-outline">Chả giò</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard