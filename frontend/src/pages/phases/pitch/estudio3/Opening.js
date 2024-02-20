import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Estudio1Longe from "../../../../images/materialpisopitch/material_separado_pitch-61.png";
import Porta3 from "../../../../images/oldsarkar/porta3.png";
import PortaL from "../../../../images/oldsarkar/portaL.png";
import PortaR from "../../../../images/oldsarkar/portaR.png";

export default function Opening() {
    const navigate = useNavigate();

    useEffect(() => {
        const openDoors = setTimeout(() => {
            const doorL = document.querySelector('.doorL');
            const doorR = document.querySelector('.doorR');
            doorL.style.left = '-12%';
            doorR.style.left = '78%';
            setTimeout(() => {
                navigate("/phases/pitch/estudio3/form");
            }, 3000);
        }, 1000);
    }, [navigate]);



    return (
        <div className="img-container">
            <img src={Porta3} className="img-100" style={{ zIndex: 1 }} />
            <img src={Estudio1Longe} className="my-w" style={{ zIndex: -1 }} />
            <img src={PortaL} className="doorL" style={{ zIndex: 0 }} />
            <img src={PortaR} className="doorR" style={{ zIndex: 0 }} />
        </div>
    );
}