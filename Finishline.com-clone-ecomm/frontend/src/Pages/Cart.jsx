// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { removeProducet } from "../Redux/action";
import { checkOut } from '../Redux/action'
import './Cart.css'
import { useEffect } from "react";
import axios from "axios";





export default function Cart() {

    const [cartData, setCartData] = useState([])
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`https://gray-dead-springbok.cyclic.app/cart/usercart`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": localStorage.getItem('token')
            },

        })
            .then(res => res.json())
            .then(res => {
                setCartData(res)
                let Total = totalCart(res)
                setAmount(Total)
            })
            .catch(err => console.log(err))
    }

    const Increment = (id, num) => {
        const payload = {
            quntity: num + 1
        }
        fetch(`https://gray-dead-springbok.cyclic.app/cart/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
            body: JSON.stringify(payload)

        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                getData()
            })
            .catch(err => console.log(err))

    }
    const Decrement = (id, num) => {
        const payload = {
            quntity: num - 1
        }
        fetch(`https://gray-dead-springbok.cyclic.app/cart/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
            body: JSON.stringify(payload)

        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                getData()
            })
            .catch(err => console.log(err))

    }

    const totalCart = (arr) => {
        // let sum = 0
        let total = arr.reduce((sum, ele) => {

            return sum + ele.price * ele.quntity
        }, 0)
        return total
    }

    const RemoveProcuct = (id) => {
        fetch(`https://gray-dead-springbok.cyclic.app/cart/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": localStorage.getItem('token')
            },

        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                getData()
            })
            .catch(err => console.log(err))
    }
    const CheckOut = () => {

    }




    return (
        <>

            <div>
                {/* // main container starts */}
                <div className="main-cart-container">


                    <div className="basket-container">
                        {/* <p className="basket-container-heading">Basket</p> */}

                        {/* basket-sub-div starts */}
                        <div style={{ overflowX: "auto" }} className="basket-sub-div">
                            <table>
                                <tr>
                                    <th>Item</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                </tr>

                                {cartData.map((ele, i) => (

                                    <tr className="table-tr" key={ele._id}>
                                        <td>
                                            <img className="item-img" alt="" src={ele.image} />
                                        </td>
                                        <td>
                                            <h5>{ele.title}</h5>
                                            <p>Size: {ele.size}</p>
                                        </td>

                                        <td>$ {ele.price * ele.quntity}</td>
                                        <td className="cart-increasing-btn">
                                            <button disabled={ele.quntity == 1} className="inc-button" onClick={() => Decrement(ele._id, ele.quntity)}>-</button>
                                            <p>{ele.quntity}</p>
                                            <button className="inc-button" onClick={() => Increment(ele._id, ele.quntity)}>+</button>
                                        </td>
                                        <td>
                                            <button onClick={() => RemoveProcuct(ele._id)} className="delete-button">Delete</button>
                                        </td>
                                    </tr>
                                ))}

                            </table>
                        </div>
                        {/* basket-sub-div ends */}
                    </div>

                    {/* basket-container ends */}

                    {/* paymnet-container starts */}
                    <div className="paymnet-container">
                        <p className="heading-of-order">Order Summary</p>

                        <div className="Order-Summary-details">
                            <div className="Order-Summary-details-subdiv">
                                <p>Subtotal :{amount}</p>
                                <p> ${amount}</p>
                            </div>
                            <div className="Order-Summary-details-subdiv">
                                <p>TBD :</p>
                                <p>$</p>
                            </div>
                            <div className="Order-Summary-details-subdiv">
                                <p>Estimated Tax :</p>
                                <p>$ 0.00</p>
                            </div>

                            <div className="Order-Summary-details-subdiv">
                                <p>Total :</p>
                                <p> ${amount}</p>
                            </div>

                            <div className="discription1">
                                Or 4 interest-free installments of $40.00 with Klarna or
                                Afterpay.
                            </div>
                            <br />
                            <button onClick={CheckOut} className="checkout-button">
                                PROCEED TO CHECKOUT
                            </button>

                            <div className="paypal-div">
                                <img
                                    className="paypal-img"
                                    alt=""
                                    src="https://theintactone.com/wp-content/uploads/2019/04/paypal-logo.png"
                                />
                            </div>
                        </div>
                    </div>
                    {/* paymnet-container ends */}
                </div>
            </div>
        </>
    )
}
