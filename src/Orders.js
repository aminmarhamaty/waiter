import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";


export function loader(data) {
    return 0;
}

export default function Orders() {
    const orders = useSelector((state) => state.orders)
    const customers = useSelector((state) => state.customers)
    const waiters = useSelector((state) => state.waiters)
    const foods = useSelector((state) => state.foods)
    const drinks = useSelector((state) => state.drinks)
    return (
        <>
            <table border="0">
                <tr className="rw1" >
                    <td className="id">id</td>
                    <td>customer</td>
                    <td>waiter</td>
                    <td>status</td>
                    <td className="food">foods</td>
                    <td>drinks</td>
                    <td>total</td>
                </tr>
                {orders.map((od) => (
                    <tr>
                        <td>{od.id}</td>
                        <td>{
                            customers.map((cus) => {
                                if (cus.id == od.customer) {
                                    return cus.name;
                                }
                            })
                        }</td>
                        <td>
                            {
                                waiters.map((wa) => {
                                    if (wa.id == od.waiter) {
                                        return wa.name
                                    }
                                })
                            }
                        </td>
                        <td>{od.status}</td>

                        <td>{

                            od.foods.map((oww) => {
                                let res = foods.find((food) => {

                                    return food.id == oww.food

                                })
                                return [oww.count + " " + res.name + " "]
                            })

                        }</td>
                        <td>{

                            od.drinks.map((dri) => {
                                let tes = drinks.find((drink) => {

                                    return drink.id == dri.drink

                                })
                                return [dri.count + " " + tes.name + " "]
                            })

                        }</td>
                        <td>
                            {od.foods.reduce((foodTotal, oww) => {
                                const foodItem = foods.find(food => food.id === oww.food);
                                return foodTotal + oww.count * foodItem.price;
                            }, 0) +
                                od.drinks.reduce((drinkTotal, dri) => {
                                    const drinkItem = drinks.find(drink => drink.id === dri.drink);
                                    return drinkTotal + dri.count * drinkItem.price;
                                }, 0)}
                        </td>
                    </tr>
                ))}
            </table>
        </>
    )
}