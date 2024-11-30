import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ForgetPassword() {
  const [pass, setPass] = useState("");
  const { id, token } = useParams();

  const navigate = useNavigate();

  const PasswordUpdateFunc = async () => {
    if (pass == "") {
      alert("Please check password");
    }
    try {
      const obj = { password: pass }; // Replace with the actual password

      await fetch(
        `https://puce-exuberant-starfish.cyclic.app/users/forgetpassword/${id}/${token}`,
        {
          method: "PATCH",
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
            navigate("/login");
          }
          if (res.success == false) {
            alert(res.message);
            navigate("/resetpassword");
          }
          console.log(res);
        }); // Corrected typo here
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>ForgetPassword</h1>
      <div className="Input_forget_pass">
        <input
          type="password"
          placeholder="New Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={PasswordUpdateFunc}>Submit</button>
      </div>
    </div>
  );
}
