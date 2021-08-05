import Link from 'next/link'
import { DiscordMinimalIcon } from '../../public/icons'
import { Button } from '../Button'
import { Logo } from '../Logo'
import { BlogName, HeaderContent, HeaderWrapper, InactiveLink, LinkButton, LogoWrapper, Menu } from './styled'

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
                    <Link href="/noticias">
                        <a>Noticias</a>
                    </Link>
                    <Link href="/reviews">
                        <a>Reseñas</a>
                    </Link>
                    <Link href="/rankings">
                        <a>Rankings</a>
                    </Link>
                    <InactiveLink>
                        Temporada
                    </InactiveLink>
                    <InactiveLink>
                        Calendario
                    </InactiveLink>
                </Menu>
                <LinkButton href="https://discord.gg/GzsWfJQ" target="_blank">
                    <Button>
                        <DiscordMinimalIcon />
                        <span>Háblanos</span>
                    </Button>
                </LinkButton>
            </HeaderContent>
        </HeaderWrapper>
    )
}