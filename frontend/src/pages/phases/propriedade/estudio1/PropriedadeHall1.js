import React, { useState, useEffect } from "react";
import PropriedadeCorridorN from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-01.png";
import PhaseTitleModal from "../../../../components/Modals/PhaseTitleModal";

export default function PropriedadeHall1() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <div>
            {isOpen &&
                <PhaseTitleModal
                    title={"Intellectual Property"}
                    text={"In this level, you will help Miguel understand what he needs to do to patent a product."}
                    setIsOpen={setIsOpen}
                />
            }
            <img src={PropriedadeCorridorN} useMap="#estudio1-map" className="img-100" />
            <map name="#estudio1-map">
                <area
                    target=""
                    alt="estudio_1"
                    title=""
                    href="/phases/propriedade/estudio1/opening"
                    coords="466,401,507,501,510,645,466,761,133,922,13,803,15,505,139,345"
                    shape="poly"
                    id="area1" />
            </map>
        </div>
    );
}