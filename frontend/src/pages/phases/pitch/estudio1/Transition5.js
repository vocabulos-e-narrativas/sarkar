import React from "react";
import { Link } from "react-router-dom";

import Sala1DentroPerto from "../../../../images/materialpisopitch/pitch_anagrams-116.png";


export default function Transition5() {
    return (
        <div className="img-container">
            <img src={Sala1DentroPerto} useMap="#estudio1next-map" className="img-100" />
            <map name="#estudio1next-map">
                <Link to="/phases/pitch/estudio1/puzzle2">
                    <area
                        target=""
                        alt=""
                        title=""
                        coords="1400,400,1800,900"
                        shape="rect"
                    />
                </Link>
            </map>
        </div>
    );
}