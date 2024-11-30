import React, { useEffect, useState } from "react";
import "./Signing.css";
import Statuslogo from "../Assets/statuslogo.svg";
import Logo from '../image/sportszone.png'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useContext } from "react";
import { LoginContext } from '../context/LoginDetail'

export default function Signing() {
  const [data, setData] = useState([])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { isAdmin, setIsAdmin, isAuth, setIsAuth, setUser } = useContext(LoginContext)
  console.log(isAdmin, isAuth)

  const Navigate = useNavigate()
  const toast = useToast()

  let x = false
  const LoginFunc = () => {
    const payload = { email, password }

    if (email == "" || password == "") {
      // alert("Please enter all the details")
      toast({
        position: 'top',
        variant: 'top-accent',
        title: 'Missing information',
        description: `Please enter all mandatory fields`,
        status: 'warning',
        duration: 4000,
        isClosable: true
      })
    } else {
      fetch("https://gray-dead-springbok.cyclic.app/users/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            localStorage.setItem("user", JSON.stringify(res))
            localStorage.setItem("token", res.token)
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            setUser(res)

            if (res.role == "admin") {
              toast({
                position: 'top',
                title: `Hello ${res.firstname}`,
                description: 'Welcome to Admin Dashboard',
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
              localStorage.setItem("isAdmin", true)
              setIsAdmin(true)
              Navigate('/userprofile')
            } else {
              toast({
                position: 'top',
                title: `Hello ${res.firstname}`,
                description: 'Your Login Succeessfully!',
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
              Navigate('/userprofile')
            }
          } else {
            toast({
              position: 'top',
              title: `Login Failed`,
              description: 'Please try again!!!',
              status: 'error',
              duration: 5000,
              isClosable: true,
            })
          }
        })
        .catch((err) =>
          console.log(err)
        )
    }
  }




  // const checkIsAuth = JSON.parse(localStorage.getItem("isAuth"))



  const gotoRegister = () => {
    Navigate('/register')
  }



  return (
    <>
      <div className="logo">
        <img style={{ width: "270px" }} src={Logo} alt="logo" />
      </div>
      <hr style={{ color: "#ECF1F2" }}></hr>

      <div className="cover1">
        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>Sign In</h2>

        <input
          style={{ padding: "10px" }}
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ padding: "10px" }}
          type="password"
          placeholder="Enter Your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="button"
          style={{
            padding: "10px",
            fontWeight: "bold",
            backgroundColor: "aqua",
            color: "black",
            border: "none",
            fontSize: "17px",
            cursor: "pointer",
          }}
          onClick={LoginFunc}
        >
          SIGN IN
        </button>

        <p style={{ fontSize: "12px" }}>
          This site is protected by reCAPTCHA and the Google ,{" "}
          <span style={{ textDecoration: "underline" }}> Privacy Policy</span>,
          and{" "}
          <span style={{ textDecoration: "underline" }}>
            {" "}
            Terms and Services Apply
          </span>
          <br />
        </p>
        <p style={{ textDecoration: "underline" }}>Forgot your password?</p>

        <p>
          <span style={{ fontWeight: "bold" }}>
            Earn 10 points for every $1 you spend.
          </span>
          <br />
          Get Points. Gain Access. Boost your STATUS.
        </p>
      </div>

      <div className="tagline">
        <img style={{ margin: "auto" }} src={Statuslogo} alt="logo" />
        <p style={{ fontWeight: "bold" }}>
          ONE ACCOUNT. <br /> MORE ACCESS.
        </p>
      </div>

      <div className="bottombox">
        <div className="cover2">
          <h3 style={{ fontWeight: "bold" }}>Don't have account?</h3>
          <button
            className="button"
            style={{
              padding: "10px",
              fontWeight: "bold",
              backgroundColor: "aqua",
              color: "black",
              border: "none",
              fontSize: "17px",
              cursor: "pointer",
            }}
            onClick={gotoRegister}
          >
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </>
  );
};


