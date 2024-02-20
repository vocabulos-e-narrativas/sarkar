import React from 'react';
import SarkarLogo from "../images/SarkarLogo/SarkarLogo.svg";

export default function SideBar() {
    return (
        <div className="mx-4 my-5">
            <img src={SarkarLogo} alt="Sarkar Logo" style={{ width: 100 }} />
        </div>
    );
}
