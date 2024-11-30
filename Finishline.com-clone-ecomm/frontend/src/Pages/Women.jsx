import React from 'react'
// import Login from './Login'

export default function Women() {
  return (
    <div>
      {/* <Login /> */}
    </div>
  )
}

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Cart.css"

// export default function Cart({ items }) {
//     const [cart, setCart] = useState([]);
//     const [count, setCount] = useState(0)
//     const [product, setProduct] = useState(items)

//     useEffect(() => {
//         axios
//             .get(`https://mirsat-vercel-database.vercel.app/sportszonecart`)
//             .then((res) => setCart(res.data));
//     }, [cart]);


//     const removeProduct = (ele) => {
//         axios.delete(`https://mirsat-vercel-database.vercel.app/sportszonecart/${ele.id}`)
//         alert("Product removed !")
//         // window.location.reload()
//     }
//     let total = 0
//     cart.map((element) => (
//         total += Number(element.price)
//     ))
//     const navigat = useNavigate()
//     const handleChange = () => {
//         // axios.delete(`https://product-list-api.onrender.com/cart/${ele.id}`)
//         alert("Are you sure?!!")
//         navigat('/')
//     }


//     // ====================



//     const decrement = (i) => {
//         const decremeneArr = product.map((ele, index) => {
//             if (i == index && ele.quantity !== 0) {
//                 ele.quantity--
//             }
//             return ele
//         })
//         setProduct(decremeneArr)
//     }

//     const increment = (i) => {
//         const decremeneArr = product.map((ele, index) => {
//             if (i == index) {
//                 ele.quantity++
//             }
//             return ele
//         })
//         setProduct(decremeneArr)
//     }

//     const Total = (arr) => {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i].price * arr[i].quantity
//         }
//         return sum
//     }




//     return (
//         <div>
//             <div>Cart</div>
//             <div style={{ margin: "auto", width: "85%" }}>
//                 {cart.map((ele, index) => (
//                     <div
//                         key={ele.id}
//                         style={{
//                             display: "flex",
//                             height: "150px",
//                             justifyContent: "space-between",
//                             alignItems: "center",

//                         }}
//                     >
//                         <img src={ele.image1} height="100%" width="100px" alt="image" />
//                         <h5>{ele.title}</h5>

//                         <div>
//                             <button disabled={ele.quantity === 0} onClick={() => decrement(index)} >-</button>
//                             <h3>{ele.quantity}</h3>
//                             <button onClick={() => increment(index)}>+</button>
//                         </div>

//                         <h4>${ele.price}</h4>
//                         <button onClick={() => removeProduct(ele)}>Remove</button>
//                     </div>
//                 ))}
//             </div>
//             <hr />
//             <div >
//                 <h2 style={{ textAlign: "right", marginRight: "10%" }}>Total : ${total}</h2>
//                 <button onClick={handleChange} style={{ marginBottom: "60px", padding: "2px 15px", fontSize: "20px" }}>Buy</button>
//             </div>
//         </div>
//     )
// }


