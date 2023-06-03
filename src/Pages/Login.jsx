import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { globalContext } from "../Contexts/GlobalContext";

export default function Login() {
  const [globalState, globalDispatch] = useContext(globalContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    globalDispatch({
      type: "PROCESS_LOGIN",
    });
    navigate("/");
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card shadow mt-5">
            <div className="card-body">
              <h2 className="text-center">login</h2>
              <div className="mt-3">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mt-3">
                <label className="form-label">Password</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mt-5">
                <button onClick={handleLogin} className="btn btn-success w-100">
                  Login
                </button>
                <p className="mt-2">
                  if you dont have account
                  <Link to="/Register" style={{ textDecoration: "none" }}>
                    {" "}
                    click here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
