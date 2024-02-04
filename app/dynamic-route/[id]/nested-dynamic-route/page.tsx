import { DynamicRouteProps } from "../interface";

export default function NestedDynamicRoute({params}: DynamicRouteProps){
    return <h1>{params.id} page of dynamic route, main page of nested dynamic route</h1>
}