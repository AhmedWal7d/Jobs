import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function SidbarDashboard() {
    const location = useLocation();
    
    return <>
        <div className='bg-light vh-75'>
            <Link to={"slider"} className={location.pathname === "/Dashboard/slider" ? " text-decoration-none itemsidbar d-center p-3 bg-color" : "text-decoration-none itemsidbar d-center p-3"}>
                <Link className='text-center p-0 m-0 text-decoration-none' >slider </Link>
            </Link>
            <Link to={"About"} className={location.pathname === "/Dashboard/About" ? " text-decoration-none itemsidbar d-center p-3 bg-color" : "text-decoration-none itemsidbar d-center p-3"}>
                <Link className='text-center p-0 m-0 text-decoration-none' >About </Link>
            </Link>
         
        </div>

    </>
}
