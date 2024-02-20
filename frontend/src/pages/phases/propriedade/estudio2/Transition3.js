import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Estudio2Longe from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-17.png";


export default function Transition3() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/phases/propriedade/estudio2/transition4");
        }, 3000);
    }, [navigate]);

    return (
        <div className="">
            <img src={Estudio2Longe} className="img-100" />
        </div>
    );
}