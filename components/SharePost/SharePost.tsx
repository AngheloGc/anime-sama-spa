import { ShareIcon } from "../../public/icons"
import { SharePostProps } from "./props"
import { SharePostWrapper } from "./styled"

export const SharePost: React.FC<SharePostProps> = ({title, description, url}) => {

    const handleClick = () => {
        if ('share' in navigator) {
            navigator.share({
                title,
                text: description,
                url
            })
        }
    }

    return (
        <SharePostWrapper onClick={handleClick}>
            <span>Comparte esta noticia</span>
            <ShareIcon />
        </SharePostWrapper>
    )
}