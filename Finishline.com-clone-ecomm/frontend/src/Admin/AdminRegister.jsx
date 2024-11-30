import React, { useState } from "react";
import "../Pages/Register.css";
import Logo from '../image/sportszone.png'
import ReCAPTCHA from "react-google-recaptcha";
import Statuslogo from "../Assets/statuslogo.svg";
import { useNavigate } from 'react-router-dom'


export default function AdminRegister() {


    const [captcha, setCaptcha] = useState(false)
    console.log(captcha)

    const [firstname, setFname] = useState("")
    const [lastname, setLname] = useState("")
    const [dob, setDob] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()



    const LoginFunc = () => {
        navigate('/adminsignin')
    }


    var date = new Date().getDate().toString()
    var month = new Date().getMonth() + (1).toString()
    var year = new Date().getFullYear().toString()
    const fulldate = (`${date}/${month}/${year}`)
    console.log(fulldate)

    const handlesubmit = async () => {
        const payload = {
            firstname,
            lastname,
            dob,
            email,
            password,
            registerfulldate: fulldate,
            registeryear: new Date().getFullYear()
        }
        console.log(payload)


        // https://dull-puce-hedgehog-ring.cyclic.app
        try {
            await fetch('https://kerchief-sturgeon.cyclic.app/admins/register', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }).then((res) => res.json())
                .then((res) => console.log(res))


            alert("Register Successfull")
            navigate('/adminsignin')
        } catch (err) {
            console.log({ "err": err })
        }
    }

    function onChange(value) {
        console.log("Captcha value:", value);
        setCaptcha(true)
    }

    return (
        <>
            <div
                className="logo"
                style={{
                    width: "18em",
                    height: "5em",
                    margin: "auto",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img style={{ width: "270px" }} src={Logo} alt="logo" />
            </div>

            <hr style={{ color: "#ECF1F2" }}></hr>

            <div style={{ marginTop: "20px" }} className="tagline">
                <img
                    style={{ width: "60px", margin: "auto" }}
                    src={Statuslogo}
                    alt="logo"
                />
                <p style={{ fontWeight: "bold" }}>
                    ONE ACCOUNT. <br /> MORE ACCESS.
                </p>
            </div>

            <div className="cover">
                <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
                    CREATE A ADMIN ACCOUNT
                </h2>
                <p style={{ marginTop: "20px" }}>
                    <span style={{ fontWeight: "bold" }}>
                        Earn 10 points for every $1 you spend.
                    </span>
                    <br />
                    Get Points. Gain Access. Boost your STATUS.
                </p>

                <input
                    style={{ padding: "10px" }}
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFname(e.target.value)}
                />
                <input
                    style={{ padding: "10px" }}
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLname(e.target.value)}
                />
                <input
                    style={{ padding: "10px" }}
                    placeholder="Date of birth"
                    class="textbox-n"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
                <input
                    style={{ padding: "10px" }}
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    style={{ padding: "10px" }}
                    type="password"
                    placeholder="Enter Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ReCAPTCHA
                    className="capthabox"
                    sitekey="6LfI0_8jAAAAACqjsIREK-HmcpnjXi9UD587Q2tL"
                    onChange={onChange}
                />

                <button
                    className="reg-register-button"
                    onClick={handlesubmit}
                    disabled={captcha === false && true}
                >
                    CREATE ACCOUNT
                </button>

                <p style={{ fontSize: "12px" }}>
                    By creating an account, you agree to our{" "}
                    <span style={{ textDecoration: "underline" }}>
                        STATUS Terms & Conditions
                    </span>
                    ,<span style={{ textDecoration: "underline" }}> Privacy Policy</span>,
                    and <span style={{ textDecoration: "underline" }}> Terms of Use</span>
                    .
                </p>
            </div>

            <div className="bottombox">
                <div className="cover2">
                    <h3 style={{ fontWeight: "bold" }}>Already have a STATUS account?</h3>
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
                </div>
            </div>
        </>
    );
};


