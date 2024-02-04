import type { DynamicRouteProps } from "./interface";

export default function DynamicRoute({params}: DynamicRouteProps){
    return <h1>{params.id} page of dynamic route</h1>
}