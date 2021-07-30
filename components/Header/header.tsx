import Link from 'next/link'
import { DiscordMinimalIcon } from '../../public/icons'
import { Button } from '../Button'
import { Logo } from '../Logo'
import { BlogName, HeaderContent, HeaderWrapper, LogoWrapper, Menu } from './styled'

export const Header:React.FC = () => {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <Link href="/">
                    <LogoWrapper>
                        <Logo />
                        <BlogName>Anime Sama</BlogName>
                    </LogoWrapper>
                </Link>
                <Menu>
                    <Link href="/">
                        <a>Noticias</a>
                    </Link>
                    <Link href="/">
                        <a>Reseñas</a>
                    </Link>
                    <Link href="/">
                        <a>Rankings</a>
                    </Link>
                    <Link href="/">
                        <a>Temporada</a>
                    </Link>
                    <Link href="/">
                        <a>Calendario</a>
                    </Link>
                </Menu>
                <Button style={{marginLeft: 'auto'}}>
                    <DiscordMinimalIcon />
                    <span>Háblanos</span>
                </Button>
            </HeaderContent>
        </HeaderWrapper>
    )
}