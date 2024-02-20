import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Estudio2Longe from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-20.png";

import SucessModal from "../../../../components/Modals/propriedade/estudio1/SucessModal";


export default function Transition2() {
    const [isOpenSucess, setIsOpenSucess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setIsOpenSucess(true);
        }, 3000);
    }, [navigate]);

    return (
        <div className="img-container">
            {isOpenSucess ?
                <SucessModal
                    text={"Enter the next studio and apply what you have \nlearned to your business idea."}
                    url={"estudio2/exit"}
                    setIsOpen={setIsOpenSucess}
                />
                :
                <div className="">
                    <img src={Estudio2Longe} className="img-100" />
                </div>
            }
        </div>
    );
}