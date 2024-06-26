import React from 'react';

const Header = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Electric Shop Product!</h1>
                    <p className="py-6">Electric Shop Product for buy here. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Buy Product</button>
                </div>
            </div>
        </div>
    );
};

export default Header;