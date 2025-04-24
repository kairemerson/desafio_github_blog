import { HearderContainer, Image } from "./styles";
import cover from "../../assets/Cover.png"


export function Header() {
    return (
        <HearderContainer>
            <Image src={cover}/>
        </HearderContainer>
    )
}