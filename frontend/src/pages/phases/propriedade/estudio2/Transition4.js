import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Estudio2Longe from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-18.png";


export default function Transition2() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/phases/propriedade/estudio2/puzzle1");
        }, 3000);
    }, [navigate]);

    return (
        <div className="">
            <img src={Estudio2Longe} className="img-100" />
        </div>
    );
}