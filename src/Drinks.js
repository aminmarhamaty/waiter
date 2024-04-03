import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";


export function loader(data){
    return 0;
}

export default function Drinks(){
    const drinks = useSelector((state) => state.drinks)
    return(
        <>
        <table border="0">
                <tr className="rw1">
                    <td className="id">id</td>
                    <td>name</td>
                    <td>price</td>
                </tr>
                {drinks.map((dr) => (
                    <tr>
                        <td>{dr.id}</td>
                        <td>{dr.name}</td>
                        <td>{dr.price}</td>
                       
                    </tr>
                ))}
            </table>
        </>
    )
}