import { DiscordIcon, DMCAIcon, FacebookIcon, InstagramIcon, RedditIcon, TwitterIcon, YoutubeIcon } from '../../public/icons'
import { HorizontalPost } from '../HorizontalPost'
import { SectionHeadline } from '../SectionHeadline'
import { FooterProps } from './props'
import { Copyright, FooterContent, FooterLeft, FooterRight, FooterWrapper, Icons, Links, PopularPosts, SocialIcons, UsefulLinks } from './styled'

export const Footer: React.FC<FooterProps> = ({ popularPosts }) => {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterLeft>
                    <SectionHeadline label="Lo más leído" appearance="compact" />
                    <PopularPosts>
                        {popularPosts && (
                            <>
                            <HorizontalPost size="x-small" postData={popularPosts[0]} hasExcerpt={false} />
                            <HorizontalPost size="x-small" postData={popularPosts[1]} hasExcerpt={false} />
                            <HorizontalPost size="x-small" postData={popularPosts[2]} hasExcerpt={false} />
                            <HorizontalPost size="x-small" postData={popularPosts[3]} hasExcerpt={false} />
                            </>
                        )}
                    </PopularPosts>
                </FooterLeft>
                <FooterRight>
                    <UsefulLinks>
                        <SectionHeadline label="Enlaces" appearance="compact" />
                        <Links>
                            <a href="">Acerca de nosotros</a>
                            <a href="">Contacto</a>
                            <a href="">Media Kit</a>
                            <a href="">Unirse al Equipo</a>
                            <a href="">Concurso Novelas Ligeras</a>
                            <a href="">Cultura Anime Sama</a>
                            <a href="">Spoiler Sama</a>
                        </Links>
                    </UsefulLinks>
                    <SocialIcons>
                        <SectionHeadline label="También nos encuentras en" appearance="compact" />
                        <Icons>
                            <FacebookIcon />
                            <InstagramIcon />
                            <YoutubeIcon />
                            <TwitterIcon />
                            <RedditIcon />
                            <DiscordIcon />
                        </Icons>
                    </SocialIcons>
                </FooterRight>
                <Copyright>
                    <DMCAIcon />
                    <p>© 2017 – {new Date().getFullYear()} Anime Sama | Todos los derechos reservados</p>
                </Copyright>
            </FooterContent>
        </FooterWrapper>
    )
}

