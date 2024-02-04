import type { DynamicRouteProps } from "../../interface";

export default function NestedDynamicRoute({params} : DynamicRouteProps){
    const {id, nestedId} = params
    return <h1>{id} page of dynamic route, {nestedId} page of nested dynamic route</h1>
}