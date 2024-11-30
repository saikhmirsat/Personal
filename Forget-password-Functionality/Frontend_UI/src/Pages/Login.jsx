import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);

  const navigate = useNavigate();

  const HandleCandidateLogin = async () => {
    if (email === "" && password === "") {
      alert("Please check all the input boxes");
    } else if (email === "" || password === "") {
      alert("Please check your inputs");
    } else {
      const obj = {
        email,
        password,
      };

      try {
        await fetch(`https://puce-exuberant-starfish.cyclic.app/users/login`, {
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
              navigate("/");
              localStorage.setItem("candidate", JSON.stringify(res.user[0]));
              localStorage.setItem("isAuthUser", true);
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
      <h2>Login</h2>

      <div className="register_container">
        <div>
          <div className="candidate_input">
            <div className="input_box_con">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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
              <button onClick={HandleCandidateLogin} className="submit_btn">
                Candidate Login
              </button>
              <a href="/resetpassword">Forget Password</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// password: 'obktgevmkgfhxmqc',
