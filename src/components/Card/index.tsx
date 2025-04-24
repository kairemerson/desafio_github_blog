import { formatDate } from "../../utils/formatDate";
import { CardContainer } from "./styles";


interface Props {
    title: string
    body: string
    created_at: string
    number: number
}

export function Card({title, body, created_at, number}: Props) {
    return (
        <CardContainer href={`/post/${number}`}>
            <div>
                <h2>{title}</h2>
                <span>{formatDate(created_at)}</span>
            </div>
            <p>{body}</p>
        </CardContainer>
    )
}