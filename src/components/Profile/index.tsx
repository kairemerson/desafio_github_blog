import { Description, FooterProfile, ImageContainer, ImageProfile, InfoContainer, LinkContainer, ProfileContainer, Title, TitleContainer } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { User } from "../../page/Home";
 
interface Props {
    user: User
}

export function Profile({user}: Props) {
    const {name, bio, avatar_url, html_url, login, company, followers} = user

    return (
        <ProfileContainer>
            <ImageContainer>
                <ImageProfile src={avatar_url}/>
            </ImageContainer>
            <InfoContainer>
                <TitleContainer>
                    <Title>{name}</Title>
                    <LinkContainer href={html_url} target="_blank">
                        <p>GITHUB</p>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </LinkContainer>
                </TitleContainer>
                <Description>{bio}</Description>
                <FooterProfile>
                    <div>
                        <FontAwesomeIcon icon={faGithub}/>
                        <p>{login}</p>
                    </div>
                    {company && (
                        <div>
                            <FontAwesomeIcon icon={faBuilding}/>
                            <p>{company}</p>
                        </div>
                    )}
                    <div>
                        <FontAwesomeIcon icon={faUserGroup}/>
                        <p>{followers} {followers < 1 ? "seguidor" : "seguidores"}</p>
                    </div>
                </FooterProfile>
            </InfoContainer>
        </ProfileContainer>
    )
}