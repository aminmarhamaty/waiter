import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";


export function loader(data) {
    return 0;
}

export default function Waiters() {
    const waiters = useSelector((state) => state.waiters)
    const orders = useSelector((state) => state.orders)
    const foods = useSelector((state) => state.foods)
    const drinks = useSelector((state) => state.drinks)

    return (
        <>
            <table border="0">
                <tr className="rw1">
                    <td className="id">id</td>
                    <td>name</td>
                    <td>orders</td>
                    <td>gain</td>
                    <td>closed</td>
                    <td>pending</td>
                    <td>returned</td>
                </tr>
                {waiters.map((wa) => (
                    <tr>
                        <td>{wa.id}</td>
                        <td>{wa.name}</td>
                        <td>{orders.filter((order) => order.waiter === wa.id).length}</td>
                        <td>
                            {orders.reduce((totalSpent, order) => {
                                if (order.waiter === wa.id && order.status === 'closed') {
                                    const foodTotal = order.foods.reduce((foodTotal, fow) => {
                                        const foodItem = foods.find(food => food.id === fow.food);
                                        return foodTotal + fow.count * foodItem.price;
                                    }, 0);

                                    const drinkTotal = order.drinks.reduce((drinkTotal, drk) => {
                                        const drinkItem = drinks.find(drink => drink.id === drk.drink);
                                        return drinkTotal + drk.count * drinkItem.price;
                                    }, 0);

                                    return totalSpent + foodTotal + drinkTotal;
                                }
                                return totalSpent;
                            }, 0)}
                        </td>
                        <td>{orders.filter((order) => order.waiter === wa.id && order.status === 'closed').length}</td>
                        <td>{orders.filter((order) => order.waiter === wa.id && order.status === 'pending').length}</td>
                        <td>{orders.filter((order) => order.waiter === wa.id && order.status === 'returned').length}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}