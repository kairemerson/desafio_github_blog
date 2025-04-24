import { InputHTMLAttributes } from "react";
import { Input } from "./styles";



export function SearchInput({...rest}: InputHTMLAttributes<HTMLInputElement>) {
    return(
        <Input placeholder="Buscar Conteúdo" {...rest}/>
    )
}
