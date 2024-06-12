import React from "react";

const Button = ({children, onClick}) => {
    return (
        <button className="border border-black p-4 rounded-xl mt-6 relative bottom-0 justify-self-start hover:bg-gray-100" onClick={onClick}>
            {children}
        </button>
    )
    
}
export default Button;