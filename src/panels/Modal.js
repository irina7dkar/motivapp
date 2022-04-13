import React from "react";
import {Button, ModalCard, ModalRoot} from "@vkontakte/vkui";

const Modal = ({activeModal,setActiveModal,buyGol}) =>{
    return (
        <ModalRoot
            activeModal={activeModal}
            onClose={()=>setActiveModal(null)}
        >
            <ModalCard
                id={"goals"}
                onClose={()=>setActiveModal(null)}

                header={<span className="modal_text">Выберите количество карточек</span>}
                actionsLayout={"vertical"}
                actions={[
                    <Button className={"but_red"} key="allow" size="l" mode="primary" data-id={0} onClick={(e)=>buyGol(e)}>
                        2 карточки
                    </Button>,
                    <Button className={"but_red"} key="deny" size="l" mode="primary" data-id={1} onClick={(e)=>buyGol(e)}>
                        12 карточек
                    </Button>,
                    <Button className={"but_red"} key="allow" size="l" mode="primary" data-id={2} onClick={(e)=>buyGol(e)}>
                        25 карточек
                    </Button>,
                    <Button className={"but_red"} key="allow" size="l" mode="primary" data-id={3} onClick={(e)=>buyGol(e)}>
                        55 карточек
                    </Button>,
                    <Button className={"but_red"} key="allow" size="l" mode="primary" data-id={4} onClick={(e)=>buyGol(e)}>
                        150 карточек
                    </Button>,
                    <Button className={"but_red"} key="allow" size="l" mode="primary" data-id={5} onClick={(e)=>buyGol(e)}>
                        350 карточек
                    </Button>,
                ]}
            />

        </ModalRoot>


    )
}
export default Modal;