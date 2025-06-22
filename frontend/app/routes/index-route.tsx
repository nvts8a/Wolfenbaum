
import type { Route } from "./+types/login-route";
import { Navigate, } from "react-router"
import axios from "axios"

export function meta({}: Route.MetaArgs) {
return [
    { title: "Wolfenbaum" },
    { name: "description", content: "Wolfenbaum" },
];
}

export default function IndexRoute() {
    if (localStorage.getItem('authorization')) {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('authorization')
        return (<Navigate replace to="/dashboard" />)
    }
    return (<Navigate replace to="/login" />)
}