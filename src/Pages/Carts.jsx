import React, { useContext } from "react";
import { globalContext } from "../Contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { formatRibuan } from "../Configs/Configs";

export default function Carts() {
  const navigate = useNavigate();
  const [globalState, globalDispatch] = useContext(globalContext);
  const dataCarts = globalState.carts;
  // console.log(dataCarts.length);

  const handletTambahPesanan = (id) => {
    if (globalState.isLogin) {
      const dataProductById = dataCarts.find((item) => item.id == id);
      globalDispatch({
        type: "ADD_PRODUCT_TO_CART",
        data: dataProductById,
      });
      console.log("globalState in Home.jsx:", globalState);
    } else {
      {
        navigate("/Login");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h1>ini keranjang</h1>
      {dataCarts.length <= 0 ? (
        <>
          <div className="alert alert-danger">Keranjang Kosong</div>
        </>
      ) : (
        <>
          <div className="row">
            <div className="col-lg-7">
              {dataCarts.map((item, index) => {
                return (
                  <>
                    <div className="row mb-4">
                      <div className="col-lg-4">
                        <img
                          src={require("../img/" + item.img)}
                          alt=""
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <div className="col-lg-8">
                        <span>ID :{item.id} </span>
                        <br />
                        <span>{item.productName}</span>
                        <br />
                        <span>
                          {" "}
                          Harga : Rp. {formatRibuan(item.price)} -- Sub Total :
                          Rp. {formatRibuan(item.price * item.qty)}{" "}
                        </span>
                        <br />
                        <div className="input-group mb-3">
                          <button className="input-group-text btn btn-danger">
                            -
                          </button>
                          <input
                            disabled
                            value={item.qty}
                            type="text"
                            className="form-control text-center"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <button
                            onClick={() => {
                              handletTambahPesanan(item.id);
                            }}
                            className="input-group-text btn btn-success"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
            <div className="col-lg-5">kanan</div>
          </div>
        </>
      )}
      {/* <pre>{JSON.stringify(dataCarts, null, 2)}</pre> */}
    </div>
  );
}
