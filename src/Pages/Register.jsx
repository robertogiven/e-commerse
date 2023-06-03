import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <div className="row mt-5 mb-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center">Register</h2>
              <div className="mt-3">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mt-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mt-3">
                <label className="form-label">Fullname</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mt-3">
                <label className="form-label">Password</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mt-3">
                <label className="form-label">Confirm Password</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mt-5">
                <button className="btn btn-success w-100">Register</button>
                <p className="mt-2">
                  Already Have Account
                  <Link to="/Login" style={{ textDecoration: "none" }}>
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
