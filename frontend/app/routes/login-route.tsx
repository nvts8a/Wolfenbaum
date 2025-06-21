import type { Route } from "./+types/login-route";
import { LoginPage } from "../pages/login-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wolfenbaum" },
    { name: "description", content: "Wolfenbaum Login" },
  ];
}

export default function LoginRoute() {
  return <LoginPage />;
}
