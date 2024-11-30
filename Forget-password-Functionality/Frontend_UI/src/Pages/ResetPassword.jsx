import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(false);

  const [remainingTime, setRemainingTime] = useState(120);

  const getTime = () => {
    const countdownInterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const CheckFunc = async () => {
    try {
      const obj = { email: email }; // Replace with the actual email

      await fetch(
        "https://puce-exuberant-starfish.cyclic.app/users/resetpassword",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.success == true) {
            alert(res.message);
            setMsg(true);
            getTime();
          }
          if (res.success == false) {
            alert(res.message);
          }
          console.log(res);
        }); // Corrected typo here
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>ResetPassword</h1>
      <div className="Input_forget_pass">
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={CheckFunc}>Check</button>
      </div>
      <div>
        {msg ? (
          <div>
            <div>
              {remainingTime > 0 ? (
                <p style={{ color: "green" }}>
                  Time remaining: {formatTime(remainingTime)}
                </p>
              ) : (
                <p style={{ color: "red" }}>
                  Password reset link has expired. Please request a new reset
                  link.
                </p>
              )}
            </div>
            <div className="Note_cont">
              <b>Note:</b> This link expire witheen 2 minutes. <br />
              <b>Note:</b> Your password reset link will be send to your email
              id.
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
