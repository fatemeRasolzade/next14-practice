import type { DocsProps } from "./interface"

export default function Docs({params}: DocsProps) {
    const {slug} = params
    if(slug?.length === 2){
        return <h1>first length is {slug[0]}, second length is {slug[1]}</h1>
    }
    else if(slug?.length ===1){
        return <h1>first length is {slug[0]}</h1>
    }
    return <h1>Docs home page</h1>
}