import type { Route } from "./+types/login-route";
import { AdminPage } from "~/pages/admin-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wolfenbaum" },
    { name: "description", content: "Wolfenbaum Admin Dashboard" },
  ];
}

export default function LoginRoute() {
  return <AdminPage />;
}
