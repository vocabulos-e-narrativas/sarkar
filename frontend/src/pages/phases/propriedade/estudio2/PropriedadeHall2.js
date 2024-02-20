import React from "react";
import PropriedadeCorridorN from "../../../../images/materialpisopitch/propriedade_intelectual/material_separado_propriedade_intelectual-02.png";

export default function PropriedadeHall2() {
    return (
        <div>
            <img src={PropriedadeCorridorN} useMap="#estudio2-map" className="img-100" />
            <map name="#estudio2-map">
                <area
                    target=""
                    alt="estudio_1"
                    title=""
                    href="/phases/propriedade/estudio1/opening"
                    coords="466,401,507,501,510,645,466,761,133,922,13,803,15,505,139,345"
                    shape="poly"
                    id="area1" />
                <area
                    target=""
                    alt="estudio_2"
                    title=""
                    href="/phases/propriedade/estudio2/opening"
                    coords="600,423,539,497,535,645,598,702,773,618,787,570,787,494,766,446"
                    shape="poly"
                    id="area1" />
            </map>
        </div>
    );
}