import { EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'
import { SocialMediaSharingButtonsProps } from './props'
import { SocialMediaSharingButtonsWrapper } from './styled'

export const SocialMediaSharingButtons: React.FC<SocialMediaSharingButtonsProps> = ({ title, url, orientation }) => {
    return (
        <SocialMediaSharingButtonsWrapper orientation={orientation}>
            <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={35} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={35} round={true} />
            </TwitterShareButton>
            <FacebookMessengerShareButton url={url} appId={'904751916381161'} >
                <FacebookMessengerIcon size={35} round={true} />
            </FacebookMessengerShareButton>
            <WhatsappShareButton url={url} title={title} >
                <WhatsappIcon size={35} round={true} />
            </WhatsappShareButton>
            <TelegramShareButton url={url} >
                <TelegramIcon size={35} round={true} />
            </TelegramShareButton>
            <EmailShareButton url={url} >
                <EmailIcon size={35} round={true} />
            </EmailShareButton>
        </SocialMediaSharingButtonsWrapper>
    )
}