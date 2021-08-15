import { playerAutoGeneratedScript, chatAutoGeneratedScript } from "./constants"
import { RadioAnimexBackground, RadioAnimexContent, RadioAnimexContentImage, RadioAnimexWrapper, RadioAnimexContentInfoTitle, RadioAnimexContentInfoPlayer, Chatbox, TitleChatbox } from "./styled"
import { Button } from "../../components/Button"
import { Modal } from "../../components/Modal"
import { useState } from "react"

export const RadioAnimexStickyWindow: React.FC = () => {

    const [showModal, setShowModal] = useState(false)

    const handleCloseModal = () => setShowModal(false)
    const handleOpenModal = () => setShowModal(true)

    return(
        <>
        <Modal show={showModal} onClose={handleCloseModal}>
            <TitleChatbox>Chat Radio Animex</TitleChatbox>
            <Chatbox className="banner_ad" dangerouslySetInnerHTML={{__html: chatAutoGeneratedScript}} />
        </Modal>
        <RadioAnimexWrapper className="banner_ad">
            <RadioAnimexBackground />
            <RadioAnimexContent>
                <RadioAnimexContentInfoTitle>
                    <RadioAnimexContentImage src="/images/radio-animex-logo.jpg" />
                    <span>Ahora: </span><h3>Programa Radio Animex - Live</h3><span className="blink-2">⬤</span>
                </RadioAnimexContentInfoTitle>
                <RadioAnimexContentInfoPlayer>
                    <div dangerouslySetInnerHTML={{__html: playerAutoGeneratedScript}} />
                </RadioAnimexContentInfoPlayer>
                <Button onClick={handleOpenModal}>Pedir Canción</Button>
            </RadioAnimexContent>
        </RadioAnimexWrapper>
    </>
    )
}