"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import './navbar.css';

function Navbar() {
    //const usePathname = usePathname();
  return (
    <div className="navbar" style={{
      display:'flex',
      gap:'2rem',
      padding:'1rem',
      paddingTop:'4rem',
      alignItems:'center',
      flexWrap:'wrap',
      justifyContent:'center'
    }}>
       <Link href = "/home">Home</Link>
       <Link href = "/about">About</Link>
       <Link href = "/contact">Contact</Link>
       <Link href = "/services">Services</Link>
     </div>
        
      
  )
}

export default Navbar