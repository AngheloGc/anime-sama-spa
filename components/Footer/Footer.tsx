import { DiscordIcon, DMCAIcon, FacebookIcon, InstagramIcon, RedditIcon, TwitterIcon, YoutubeIcon } from '../../public/icons'
import { HorizontalPost } from '../HorizontalPost'
import { SectionHeadline } from '../SectionHeadline'
import { FooterProps } from './props'
import { Copyright, FooterContent, FooterLeft, FooterRight, FooterWrapper, Icons, Links, PopularPosts, SocialIcons, UsefulLinks } from './styled'
import { SOCIAL_MEDIA_LINKS } from '../../lib/constants'
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
                            <a href="/acerca-de-nosotros">Acerca de nosotros</a>
                            <a href="/contacto">Contacto</a>
                            <a href="https://drive.google.com/file/d/1EtGNYKHJAjcin_pcUiUlavIUbwxYywf0/view?usp=sharing" target="_blank">Media Kit</a>
                            <a href="/unirse-al-equipo">Unirse al Equipo</a>
                            <a href="/concurso-novelas-ligeras">Concurso Novelas Ligeras</a>
                            <a href="https://www.facebook.com/groups/culturaanimesamadesu" target="_blank">Cultura Anime Sama</a>
                            <a href="https://chat.whatsapp.com/FbUJZEONcFsCSSA4CmUFBQ" target="_blank">Spoiler Sama</a>
                        </Links>
                    </UsefulLinks>
                    <SocialIcons>
                        <SectionHeadline label="También nos encuentras en" appearance="compact" />
                        <Icons>
                            <a href={SOCIAL_MEDIA_LINKS.facebook} target="_blank">
                                <FacebookIcon />
                            </a>
                            <a href={SOCIAL_MEDIA_LINKS.instagram} target="_blank">
                                <InstagramIcon />
                            </a>
                            <a href={SOCIAL_MEDIA_LINKS.youtube} target="_blank">
                                <YoutubeIcon />
                            </a>
                            <a href={SOCIAL_MEDIA_LINKS.twitter} target="_blank">
                                <TwitterIcon />
                            </a>
                            <a href={SOCIAL_MEDIA_LINKS.reddit} target="_blank">
                                <RedditIcon />
                            </a>
                            <a href={SOCIAL_MEDIA_LINKS.discord} target="_blank">
                                <DiscordIcon />
                            </a>
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

