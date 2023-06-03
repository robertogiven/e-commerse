import React, { useContext } from "react";
import { dataProduct } from "./Product/Data";
import { globalContext } from "../Contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [globalState, globalDispatch] = useContext(globalContext);
  const navigate = useNavigate();

  let dataProductHanya3 = [];
  if (dataProduct.length > 3) {
    dataProductHanya3 = dataProduct.filter((item, index) => {
      return index < 3;
    });
  }

  const Pesanan = (id) => {
    if (globalState.isLogin) {
      const dataProductById = dataProduct.find((item) => item.id == id);
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

  console.log(dataProductHanya3);
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {dataProductHanya3.map((item, index) => {
            return (
              <div
                key={index}
                className={`carousel-item ${item.id == 1 ? "active" : ""} `}
              >
                <img
                  src={require("../img/" + item.img)}
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "400px", width: "auto", objectFit: "cover" }}
                />
              </div>
            );
          })}

          {/* <div className="carousel-item">
            <img
              src={require("../img/menu2.jpg")}
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../img/menu3.jpg")}
              className="d-block w-50"
              alt="..."
            />
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* card */}
      {dataProduct.length > 0 ? (
        <div className="container mt-5 mb-5">
          <h1 className="text-center mb-5">Menu Kami</h1>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {dataProduct.map((item, index) => {
              return (
                <div className="col">
                  <div className="card h-100 shadow">
                    <img
                      src={require("../img/" + item.img)}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p> ID : {item.id}</p>
                      <h5 className="card-title">{item.productName}</h5>
                      <p className="card-text">IDR {item.price}</p>
                      <div className="row">
                        <div className="col-lg-6 mb-2">
                          <button
                            onClick={() => {
                              Pesanan(item.id);
                            }}
                            className="btn btn-success w-100 "
                          >
                            Pesan
                          </button>
                        </div>
                        <div className="col-lg-6">
                          <button className="btn btn-secondary w-100">
                            Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>{" "}
          */}
          </div>
        </div>
      ) : (
        <div className="container">
          <h1>Data Product Tidak Ada</h1>
        </div>
      )}
      {/* <div className="container">
        <pre>{JSON.stringify(globalState.carts, null, 2)}</pre>
      </div> */}

      {/* end card */}
    </div>
  );
}
