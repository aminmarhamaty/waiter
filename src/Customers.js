import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";


export function loader(data) {
    return 0;
}

export default function Customers() {
    const customers = useSelector((state) => state.customers)
    const orders = useSelector((state) => state.orders)
    const foods = useSelector((state) => state.foods)
    const drinks = useSelector((state) => state.drinks)
    return (
        <>
            <table border="0">
                <tr className="rw1">
                    <td className="id">id</td>
                    <td>name</td>
                    <td>All orders</td>
                    <td>spent</td>
                </tr>
                {customers.map((cu) => (
                    <tr>
                        <td>{cu.id}</td>
                        <td>{cu.name}</td>
                        <td>
                            {orders.filter((order) => order.customer === cu.id).length}
                        </td>
                        <td>
                            {orders.reduce((totalSpent, order) => {
                                if (order.customer === cu.id) {
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

                    </tr>
                ))}
            </table>
        </>
    )
}