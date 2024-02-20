import React from "react";
import SettingsBTN from "../images/oldsarkar/configuracoes.png";
import SettingsModal from "../components/Modals/SettingsModal";

export default function Settings() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <img src={SettingsBTN} className="confs pointer" onClick={() => setModalShow(true)} />
            <SettingsModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}