import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import './App.css';


export function loader(data) {
    return 0
}

export default function Main() {
    const dispatch = useDispatch()

    return (
        <>

            <div className="main">
                <ul>
                    <li><Link className="link" to="/drinks">drinks</Link></li>
                    <li><Link className="link" to="/foods">foods</Link></li>
                    <li><Link className="link" to="/customers">customers</Link></li>
                    <li><Link className="link" to="/waiters">waiters</Link></li>
                    <li><Link className="link" to="/orders">orders</Link></li>
                    <li><Link className="log" to="/login">Login</Link></li>
                </ul>

                <div className="entry">
                    {/* <Link className="log" to={"/login"}>Login</Link> */}
                </div>
            </div>

        </>
    )
}
