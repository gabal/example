import Message from "@/app/components/Message";
import Link from "next/link";

export default function NotFound() {
    return <Message title='User Not Found'>
        <>
            <p>Could not find requested user</p>
            <Link href="/">Return Home</Link>
        </>
    </Message>;
}