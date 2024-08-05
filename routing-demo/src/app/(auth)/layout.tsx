"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import './style.css'
const navLinks=[
    {
        name:"Register",
        href:"/register"
    },
    {
        name:"Login",
        href:"/login"
    },
    {
        name:"Password",
        href:"/forgot-password"
    },
]
export default function  authLayout({children}:{
    children:React.ReactNode
}){
    const pathName=usePathname();
    return(
        <>
        <div>
        {
            navLinks.map((link)=>{
                const isActive = pathName.startsWith(link.href)
               return(
                <Link key={link.name} href={link.href}
                className={ isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
                >{link.name}</Link>
               )
})
        }
        </div>
        {children}
        </>
    )
}