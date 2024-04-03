import react from "react";
import { createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLoaderData } from "react-router-dom";


const initialState = {
    customers: [
        { id: 1001, name: "ali rezei", username: "alire", password: "12301" },
        { id: 1002, name: "reza abbasi", username: "reazab", password: "12302" },
        { id: 1003, name: "abbas mahdavi", username: "abbas", password: "12303" },
        { id: 1004, name: "sakine mowlayi", username: "sakine", password: "12304" },
        { id: 1005, name: "hadi shabani", username: "hadish", password: "12305" },
        { id: 1006, name: "mina seyfolaahi", username: "mina", password: "12306" },
        { id: 1007, name: "karim scofield", username: "karim", password: "12307" },
        { id: 1008, name: "sara tankerdi", username: "sara", password: "12308" },
        { id: 1009, name: "reza oshtoolak", username: "rezaosh", password: "12309" },
        { id: 1010, name: "hadi neonazi", username: "hadi", password: "12310" },
    ],
    waiters: [
        { id: 2001, name: "ali" },
        { id: 2002, name: "reza" },
        { id: 2003, name: "ahamd" },
    ],
    drinks: [
        { id: 3001, name: "coffee", price: 110 },
        { id: 3002, name: "mooka", price: 140 },
        { id: 3003, name: "capo", price: 120 },
        { id: 3004, name: "latte", price: 210 },
        { id: 3005, name: "spereso", price: 180 },
    ],
    foods: [
        { id: 4001, name: "torshe ash", chilled: true, price: 120 },
        { id: 4002, name: "kolebij", chilled: false, price: 190 },
        { id: 4003, name: "gheymeh", chilled: true, price: 210 },
        { id: 4004, name: "ghorme", chilled: false, price: 110 },
        { id: 4005, name: "poore", chilled: true, price: 250 },
        { id: 4006, name: "kebab", chilled: true, price: 180 },
        { id: 4007, name: "fesenjoon", chilled: true, price: 170 },
        { id: 4008, name: "makaroni", chilled: true, price: 130 },
        { id: 4009, name: "sangak", chilled: true, price: 270 },
        { id: 4010, name: "hotdog", chilled: true, price: 310 },
    ],
    orders: [
        {
            id: 9001,
            waiter: 2002,
            customer: 1001,
            foods: [
                { food: 4002, count: 2 },
                { food: 4008, count: 3 },
            ],
            drinks: [
                { drink: 3002, count: 5 },
                { drink: 3005, count: 3 },
            ],
            status: "pending",
        },
        {
            id: 9002,
            waiter: 2003,
            customer: 1003,
            foods: [
                { food: 4003, count: 2 },
                { food: 4007, count: 3 },
            ],
            drinks: [
                { drink: 3001, count: 3 },
                { drink: 3004, count: 1 },
            ],
            status: "closed",

        },
        {
            id: 9003,
            waiter: 2001,
            customer: 1008,
            foods: [
                { food: 4003, count: 2 },
                { food: 4007, count: 3 },
            ],
            drinks: [
                { drink: 3001, count: 3 },
                { drink: 3004, count: 1 },
            ],
            status: "returned",
        },
        {
            id: 9003,
            waiter: 2003,
            customer: 1005,
            foods: [
                { food: 4003, count: 2 },
                { food: 4007, count: 3 },
            ],
            drinks: [
                { drink: 3001, count: 3 },
                { drink: 3004, count: 1 },
            ],
            status: "closed",
        },
    ], nextId: 9004
};

const reducer = (state = initialState, action) => {


    if (action.type === "SAVE") {
        let ns = { ...action.payload, id: state.nextId };
        return {
            ...state,
            orders: state.orders.concat(ns),
            nextId: state.nextId + 1,
        };
    } else if (action.type === "SET_CUSTOMER_ID") {
        const ci = { ...state, customerId: action.payload }
        console.log(ci)
    }
    switch (action.type) {
        case "SET_CUSTOMER_ID":
          return {
            ...state,
            customerId: action.payload,
          };
        // ... other cases
      }

    return state;
};



const Store = createStore(reducer);
export default Store;
