import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";


export function loader(data){
    return 0;
}

export default function Foods(){
    const foods = useSelector((state) => state.foods)
    return(
        <>
        <table border="0">
                <tr className="rw1">
                    <td className="id">id</td>
                    <td>name</td>
                    <td>chilled</td>
                    <td>price</td>
                </tr>
                {foods.map((fo) => (
                    <tr>
                        <td>{fo.id}</td>
                        <td>{fo.name}</td>
                        <td>{
                fo.chilled  ?  "yes":"no"
                }</td>
                        <td>{fo.price}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}