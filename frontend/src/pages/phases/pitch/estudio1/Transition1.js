import React, { useState } from "react";
import Sala1DentroPerto from "../../../../images/oldsarkar/sala1dentro.png";

import AvisoModal from "../../../../components/Modals/pitch/Estudio1/AvisoModal";

export default function Transition1() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="img-container">
            <img src={Sala1DentroPerto} useMap="#estudio1next-map" className="img-100" />
            <map name="#estudio1next-map" className="pointer" onClick={() => setIsOpen(true)}>
                <area
                    target=""
                    alt=""
                    title=""
                    coords="559,1021,1593,798"
                    shape="rect"
                />
            </map>
            {isOpen && <AvisoModal setIsOpen={setIsOpen} />}
        </div >
    );
}