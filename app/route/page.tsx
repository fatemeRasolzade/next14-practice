import Link from "next/link"

export const metadata = {
    title: "Route page"
}

export default function Route(){
    return <>
    <h1>Route</h1>
    <Link href="/">BACK TO HOME</Link>
    </>
}