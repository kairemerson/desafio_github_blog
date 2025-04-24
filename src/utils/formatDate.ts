import { formatDistanceToNow, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"


export function formatDate(data: string) {
    const dataISO = data
    const formatedDate = formatDistanceToNow(parseISO(dataISO), {
        addSuffix: true,
        locale: ptBR
    })

    return formatedDate
}
