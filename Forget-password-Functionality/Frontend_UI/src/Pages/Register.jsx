import React, { useState } from "react";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [hide, setHide] = useState(false);

  const navigate = useNavigate();

  const validatePassword = () => {
    const validLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*_-]/.test(password);

    return { validLength, hasUppercase, hasSpecialChar, hasDigit };
  };

  const renderRuleIndicator = (isValid) => {
    return isValid ? (
      <span
        className="ruleIndicator valid"
        id="greenTick"
        style={{ color: "green" }}
      >
        ✔
      </span>
    ) : (
      <span className="ruleIndicator" style={{ color: "red" }}>
        ✘
      </span>
    );
  };

  const renderPasswordRules = () => {
    const passwordRules = validatePassword(password);

    return (
      <div id="passwordRules">
        <p>
          {renderRuleIndicator(passwordRules.validLength)}
          Password should be at least 8 characters long.
        </p>
        <p>
          {renderRuleIndicator(passwordRules.hasUppercase)}
          Password should contain at least one uppercase letter.
        </p>
        <p>
          {renderRuleIndicator(passwordRules.hasDigit)}
          Password should contain at least one digit.
        </p>
        <p>
          {renderRuleIndicator(passwordRules.hasSpecialChar)}
          Password should contain at least one special character.
        </p>
      </div>
    );
  };

  const HandleCandidateRegister = async () => {
    if (email === "" && name === "" && password === "" && mobile === "") {
      alert("Please check all the input boxes");
    } else if (
      email === "" ||
      password === "" ||
      name === "" ||
      mobile === ""
    ) {
      alert("Please check your inputs");
    } else {
      const passwordRules = validatePassword(password);

      if (!passwordRules.validLength) {
        alert("Password should be at least 8 characters long.");
        return;
      }

      if (!passwordRules.hasUppercase) {
        alert("Password should contain at least one uppercase letter.");
        return;
      }

      if (!passwordRules.hasDigit) {
        alert("Password should contain at least one digit.");
        return;
      }

      if (!passwordRules.hasSpecialChar) {
        alert("Password should contain at least one special character.");
        return;
      }
      const obj = {
        name,
        email,
        mobile,
        password,
      };
      console.log(obj);
      try {
        await fetch(`https://puce-exuberant-starfish.cyclic.app/users/register`, {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.success == false) {
              alert(res.message);
            }
            if (res.success == true) {
              alert(res.message);
              navigate("/login");
            }
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <div className="register_container">
        <div>
          <div className="candidate_input">
            <div className="input_box_con">
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Mobile number"
                onChange={(e) => setMobile(e.target.value)}
              />

              <div className="password_div_con">
                <input
                  type={hide ? "text" : "Password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={() => setHide(!hide)}>
                  {!hide ? "show" : "hide"}
                </span>
              </div>
              <button onClick={HandleCandidateRegister} className="submit_btn">
                Candidate Register
              </button>
              {renderPasswordRules()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
