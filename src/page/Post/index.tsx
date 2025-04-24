import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { NavLink, useParams } from "react-router-dom";
import { Content, FooterPost, Header, HeaderContainer, PostContainer } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowUpRightFromSquare,
    faCalendarDay,
    faChevronLeft,
    faComment,
    
  } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

import Markdown from "react-markdown";
import { Issue } from "../Home";
import { formatDate } from "../../utils/formatDate";

interface Post extends Issue{
    user: {
        login: string
    }
}

export function Post() {

    const [issue, setIssue] = useState<Post>({} as Post)

    const {issueNumber} = useParams()

    async function fecthIssue() {
        const response = await api.get(`/repos/kairemerson/desafio_github_blog/issues/${issueNumber}`)
        setIssue(response.data)
        console.log(response.data);
        
    }

    
    useEffect(() => {
        fecthIssue()
    }, [issueNumber])

    return (
        <PostContainer>
            <HeaderContainer>
                <Header>
                    <NavLink to="/"><FontAwesomeIcon icon={faChevronLeft}/> VOLTAR</NavLink>
                    <NavLink to={issue.html_url} target="_blank">VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></NavLink>
                </Header>
                <h2>{issue?.title}</h2>
                <FooterPost>
                    <div>
                        <FontAwesomeIcon icon={faGithub}/>
                        <p>{issue.user?.login}</p>
                    </div>
                    
                        <div>
                            <FontAwesomeIcon icon={faCalendarDay}/>
                            <p>{issue.created_at && formatDate(issue?.created_at)}</p>
                        </div>
                
                    <div>
                        <FontAwesomeIcon icon={faComment}/>
                        <p>{issue.comments} {issue.comments <= 1 ? "comentário" : "comentários"}</p>
                    </div>
                </FooterPost>

            </HeaderContainer>
            <Content>
                <Markdown>{issue.body}</Markdown>
            </Content>
        </PostContainer>
    )
}