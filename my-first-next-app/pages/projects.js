import Link from 'next/link';
import Header from "../components.js/Header"


export default () => ( 
    <div>
        <br></br>
        <Header />
        
        <h1>What have I worked on?</h1>

        <p>1. My first
            <Link href={"https://linhardie94.github.io/Lindsay_Hardie_CV/index.html"}> online CV</Link>
        </p>
        <p>2. My first 
            <Link href={"https://github.com/linhardie94/minesweeper"}> game</Link>
        </p>
        <p>3. My first 
            <Link href={"https://github.com/linhardie94/itunes-app"}> API based app</Link>
        </p>
        <p>4. My other 
            <Link href={"https://github.com/linhardie94"}> github repositories</Link>
        </p>
    </div>
)