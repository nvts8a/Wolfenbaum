

import { LoginPage } from "~/pages/login-page";
import type { Route } from "./+types/login-route";
import { Navigate } from "react-router"

export function meta({}: Route.MetaArgs) {
return [
    { title: "Wolfenbaum" },
    { name: "description", content: "Wolfenbaum" },
];
}

export default function IndexRoute() {
    return (<Navigate replace to="/login" />)
}
          