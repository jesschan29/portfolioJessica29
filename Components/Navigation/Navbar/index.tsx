import React from "react";
import Logo from './Logo';
import Button from './Button';


const Navbar = () => {
    return (
        <>
        <div className="w-full h-19 sticky top-0 z-[999] bg p-2">
            <style jsx>{`
            .bg {
                background-image: url('/bg/bg.jpg');
                background-position: top 3%;
                background-repeat: no-repeat;
                border-bottom: 2px solid white;
            }
            `}</style>
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full p-1">
                    <Logo />
                    <Button />
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;
