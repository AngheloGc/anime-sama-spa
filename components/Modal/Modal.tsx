import { useEffect } from 'react'
import { ModalProps } from './props'
import { ModalContent, ModalWrapper } from './styled'

export const Modal: React.FC<ModalProps> = ({children, show, onClose}) => {
    const handleClose = () => onClose()

    useEffect(() => {
        document.body.addEventListener("keydown", handleClose);
        return function cleanup() {
          document.body.removeEventListener("keydown", handleClose);
        }
    }, [])

    return (
        <ModalWrapper onClick={handleClose} show={show}>
            <ModalContent onClick={e => e.stopPropagation()}>
                {children}
            </ModalContent>
        </ModalWrapper>
    )
}