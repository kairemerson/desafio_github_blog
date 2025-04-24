import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { SearchInput } from "../../components/SearchInput";
import { CardsCotainer, HomeContainer, PublushedContainer } from "./styles";

import * as z from "zod"
import {useForm} from "react-hook-form"
import { zodResolver} from "@hookform/resolvers/zod"


const SearchIssuesSchema = z.object({
    search: z.string()
})

type SearchInput = z.infer<typeof SearchIssuesSchema>

export interface User {
    avatar_url: string
    bio: string
    company: string
    name: string
    html_url: string
    followers: number
    login: string
}

export interface Issue {
    id: number
    html_url: string
    number: number
    title: string
    body: string
    comments: number
    created_at: string
}

export function Home() {

    const [user, setUser] = useState({} as User)
    const [issues, setIssues] = useState<Issue[]>([])

    const {register, handleSubmit, reset } = useForm<SearchInput>({
        resolver: zodResolver(SearchIssuesSchema)
    })
 
    async function getUser() {
       const user = await api.get("/users/kairemerson")
       setUser(user.data)
    }

    async function getIssues() {
        const issues = await api.get("/repos/kairemerson/desafio_github_blog/issues")
        setIssues(issues.data)
        
    }

    async function fetchIssues(data: SearchInput ) {
        const {search} = data
        
        const fetchedIssues = await api.get("/search/issues",{
            params: {
                q: `${search} repo:kairemerson/desafio_github_blog`
            }
        })
        setIssues(fetchedIssues.data.items)
        reset()
        
    }

    useEffect(() => {
        getUser()
        getIssues()
    }, [])

    return (
        <HomeContainer>
            <Profile user={user}/>

            <PublushedContainer>
                <h2>Publicações</h2>
                <p>{issues.length} {issues.length < 1 ? "publicação": "publicações"}</p>
            </PublushedContainer>

            <form onSubmit={handleSubmit(fetchIssues)}>
                <SearchInput
                    {...register("search")}
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            handleSubmit(fetchIssues)
                        }
                    }}
                />
            </form>

            <CardsCotainer>
                {issues.map((issue)=> (
                    <Card key={issue.id} title={issue.title} body={issue.body} created_at={issue.created_at} number={issue.number}/>

                ))}

            </CardsCotainer>
        </HomeContainer>
    )
}