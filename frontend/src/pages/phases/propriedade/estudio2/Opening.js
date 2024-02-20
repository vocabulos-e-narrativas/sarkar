import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Estudio2Longe from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-11.png";
import Porta2 from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-05.png";
import PortaL from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-21.png";
import PortaR from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-23.png";

export default function Opening() {

    const navigate = useNavigate();

    useEffect(() => {
        const openDoors = setTimeout(() => {
            const doorL = document.querySelector('.doorL');
            const doorR = document.querySelector('.doorR');
            doorL.style.left = '-12%';
            doorR.style.left = '78%';
            setTimeout(() => {
                navigate("/phases/propriedade/estudio2/far");
            }, 3000);
        }, 1000);
    }, [navigate]);

    return (
        <div className="img-container">
            <img src={Porta2} className="img-100" style={{ zIndex: 1 }} />
            <img src={Estudio2Longe} className="my-w" style={{ zIndex: -1 }} />
            <img src={PortaL} className="doorL" style={{ zIndex: 0 }} />
            <img src={PortaR} className="doorR" style={{ zIndex: 0 }} />
        </div>
    );
}