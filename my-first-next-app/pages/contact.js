import Link from 'next/link';
import Header from "../components.js/Header"

export default () => ( 
    <div>
        <br></br>
        <Header />

        <h1>How can you contact me?</h1>

        <p>Email: lindsay@example.com</p>
        <p>Phone: 076 000 0000</p>
        <p>LinkedIn:
            <Link href={"https://www.linkedin.com/in/lindsay-hardie-2b62a1146/"}> click here</Link>
        </p>
    </div>
)