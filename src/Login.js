import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLoaderData } from "react-router-dom";
import './App.css';
export function loader(data) {
    return 0;
}

export default function Login() {
    let txtUser = useRef();
    let txtPass = useRef();
    let btnLog = useRef();
    const dispatch = useDispatch();
    const username = useSelector((state) => state.username);
    const password = useSelector((state) => state.password);
    const customers = useSelector((state) => state.customers);
    const navigate = useNavigate();
    const customerId = 1001; // Replace with the actual customer ID
dispatch({
  type: "SET_CUSTOMER_ID",
  payload: customerId,
});
    
    return (
        <>
            <div className="in">
                <label>Username</label>
                <input type="text" ref={txtUser} />

                <br></br>
                <label>Password</label>
                <input type="password" ref={txtPass} />
                <br></br>
                <input type="button" ref={btnLog} value="log in" onClick={() => {
                    const enteredPassword = txtPass.current.value;
                    const enteredUserName = txtUser.current.value;

                    const customer = customers.find(
                        (cus) =>
                            (cus.username == enteredUserName) &
                            (cus.password == enteredPassword)
                    );
                    if (customer) {
                        const customerName = customer.name
                        const customerId = customer.id
                        dispatch({ type: "SET_CUSTOMER_ID", payload: customerId });
                        navigate("/Neworder")
                        
                    }
                }} />
            </div>
        </>
    )
}
