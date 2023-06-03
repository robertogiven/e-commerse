import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { globalContext } from "../Contexts/GlobalContext";

export default function PrivateRoute() {
  const [globalState] = useContext(globalContext);

  return (
    <div>{globalState.isLogin ? <Outlet /> : <Navigate to="/Login" />}</div>
  );
}
