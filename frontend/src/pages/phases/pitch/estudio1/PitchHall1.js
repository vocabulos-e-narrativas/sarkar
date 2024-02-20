import React, { useState, useEffect } from "react";
import PitchCorridorN from "../../../../images/oldsarkar/salas1.png";
import PhaseTitleModal from "../../../../components/Modals/PhaseTitleModal";

export default function PitchHall1() {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <div>
            {isOpen &&
                <PhaseTitleModal
                    title={"The Perfect Pitch"}
                    text={"Welcome to level 'The Perfect Pitch'. \nHere you will find three studios with challenges\n that allow you to complete another stage of your entrepreneurial journey!"}
                    setIsOpen={setIsOpen}
                />
            }
            <img src={PitchCorridorN} useMap="#estudio1-map" className="img-100" />
            <map name="#estudio1-map">
                <area
                    target=""
                    alt="estudio_1"
                    title=""
                    href="/phases/pitch/estudio1/opening"
                    coords="466,401,507,501,510,645,466,761,133,922,13,803,15,505,139,345"
                    shape="poly"
                    id="area1" />
            </map>
        </div>

    );
}