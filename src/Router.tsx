import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./page/Home";
import { Post } from "./page/Post";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/post/:issueNumber" element={<Post/>}/>
            </Route>
        </Routes>
    )   
}