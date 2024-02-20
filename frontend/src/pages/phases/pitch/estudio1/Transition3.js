import React from "react";
import { Link } from "react-router-dom";

import Sala1DentroPerto2 from "../../../../images/materialpisopitch/material_separado_pitch_computador-11.png";


export default function Transition3() {
    return (
        <div className="img-container">
            <img src={Sala1DentroPerto2} useMap="#estudio1next-map" className="img-100" />
            <map name="#estudio1next-map">
                <Link to="/phases/pitch/estudio1/transition4">
                    <area
                        target=""
                        alt=""
                        title=""
                        coords="700,300,1500,800"
                        shape="rect"
                    />
                </Link>
            </map>
        </div>
    );
}