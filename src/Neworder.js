
import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import React, { useState, useRef } from "react";



export function loader(data) {
    return 0;
}

export default function Neworder() {
    const orders = useSelector((state) => state.orders)
    const customers = useSelector((state) => state.customers)
    const waiters = useSelector((state) => state.waiters)
    const foods = useSelector((state) => state.foods)
    const drinks = useSelector((state) => state.drinks)
    const customerId = useSelector((state) => state.customerId)
    const [showFoodSelector, setShowFoodSelector] = useState(false);
    const [showDrinkSelector, setShowDrinkSelector] = useState(false);
    const [selectedFoodId, setSelectedFoodId] = useState(null);
    const [selectedDrinkId, setSelectedDrinkId] = useState(null);
    const [foodCount, setFoodCount] = useState(1); // Initialize with a default count of 1
    const [drinkCount, setDrinkCount] = useState(1);
    const sltDrinks = useRef();
    const sltFoods = useRef();
    const txtFoodco = useRef();
    const txtDrinkco = useRef();
    const dispatch = useDispatch();
    
    const nextId = useSelector((state) => state.nextId)

    const handleFoodSelection = (foodId) => {
        setSelectedFoodId(foodId);
    };

    const handleDrinkSelection = (drinkId) => {
        setSelectedDrinkId(drinkId);
    };

    const handleFoodCountChange = (e) => {
        setFoodCount(parseInt(e.target.value) || 0);
    };

    const handleDrinkCountChange = (e) => {
        setDrinkCount(parseInt(e.target.value) || 0);
    };



    return (
        <>
            <h1>wel{customerId}</h1>
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
                {
                    orders.map((od) => {

                        if (customerId === od.customer) {
                            return (
                                <tr key={od.id}>
                                    <td >{od.id}</td>
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
                            )
                        }

                    })
                }

            </table>
            <h1 className="noh1">New Order</h1>
            <br></br>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={showFoodSelector}
                        onChange={() => setShowFoodSelector(!showFoodSelector)}
                    />
                    Select Foods
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={showDrinkSelector}
                        onChange={() => setShowDrinkSelector(!showDrinkSelector)}
                    />
                    Select Drinks
                </label>
            </div>
            <br></br>
            {showFoodSelector && (
                <div>
                    <label>Select Food:</label>
                    <select ref={sltFoods}>
                        <option value="">Select a food</option>
                        {foods.map((food) => (
                            <option key={food.id} value={food.id}>
                                {food.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {showDrinkSelector && (
                <div>
                    <label>Select Drink:</label>
                    <select ref={sltDrinks}>
                        <option value="">Select a drink</option>
                        {drinks.map((drink) => (
                            <option key={drink.id} value={drink.id}>
                                {drink.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            <div>
                <label>Food Count:</label>
                <input
                    type="number"
                    value={foodCount}
                    onChange={(e) => setFoodCount(parseInt(e.target.value, 10))}
                    min="1"
                />
            </div>

            {/* Input for setting drink count */}
            <div>
                <label>Drink Count:</label>
                <input
                    type="number"
                    value={drinkCount}
                    onChange={(e) => setDrinkCount(parseInt(e.target.value, 10))}                    min="1"
                />
            </div>
            <br></br>
            <input type='button' value="Addorder" onClick={() => {
                const selectedFoodId = sltFoods.current.value;
                const selectedDrinkId = sltDrinks.current.value;
                dispatch({
                    type: "SAVE",
                    payload: {
                        id: nextId,
                        waiter: "nem",
                        customer: "customerName",
                        foods: selectedFoodId ? [{ food: selectedFoodId, count: foodCount }] : [],
                        drinks: selectedDrinkId ? [{ drink: selectedDrinkId, count: drinkCount }] : [],
                        status: "pending"
                    }

                })
            }} />
        </>
    )

}


