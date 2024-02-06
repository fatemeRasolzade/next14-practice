import { notFound } from "next/navigation";
import type { DynamicRouteProps } from "../../interface";

export default function NestedDynamicRoute({params} : DynamicRouteProps){
    const {id, nestedId} = params
    if(parseInt(id) > 1000){
        notFound()
    }
    return <h1>{id} page of dynamic route, {nestedId} page of nested dynamic route</h1>
}