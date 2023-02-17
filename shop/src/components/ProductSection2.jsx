import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserLogContext } from "../contexts/LogUserContext";
export default function ProductSection2() {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [productId1, setProductId1] = useState("");
  const [search, setSearch] = useState("");
  const [catData, setCatData] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUserId")));
    getData();
  }, []);
  const getData = () => {
    axios.get("http://localhost:8090/api/products").then((res) => {
      setData(res.data.result);
      setFilteredData(res.data.result);
    });
  };
  useEffect(() => {
    const us = JSON.parse(localStorage.getItem("currentUserId"));

    axios.get(`http://localhost:8090/api/user/${us?.id}`).then((res) => {
      setUserData(res.data.result);
    });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/category")
      .then((res) => setCatData(res.data.result));
  }, []);
  const onChangeText = (e) => {
    setSearch(e.target.value);
    filterNews(e.target.value);
  };
  const filterNews = (searchParams) => {
    const newArr = data.filter((e) => {
      if (e.productName && e.productName.length > 0) {
        return e.productName.toLowerCase().includes(searchParams.toLowerCase());
      }
    });

    setFilteredData(newArr);
  };
  const handleSort = () => {
    let newArr = [...filteredData];
    newArr.sort(function (a, b) {
      let x = a.productName.toLowerCase();
      let y = b.productName.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setFilteredData(newArr);
  };
  const handleSort2 = () => {
    let newArr = [...filteredData];
    newArr.sort(function (a, b) {
      let x = a.productName.toLowerCase();
      let y = b.productName.toLowerCase();
      return x > y ? -1 : y > x ? 1 : 0;
    });
    setFilteredData(newArr);
  };
  const handleSort3 = () => {
    let newArr = [...filteredData];
    newArr.sort(function (a, b) {
      let x = a.price;
      let y = b.price;
      return x < y ? -1 : y > x ? 1 : 0;
    });
    setFilteredData(newArr);
  };
  const handleSort4 = () => {
    let newArr = [...filteredData];
    newArr.sort(function (a, b) {
      let x = a.price;
      let y = b.price;
      return x > y ? -1 : y > x ? 1 : 0;
    });
    setFilteredData(newArr);
  };
  const FilterCat = (name) => {
    let newArr = [];
    data.map((e) => {
      if (name && e.categoryName.toLowerCase() == name.toLowerCase()) {
        newArr.push(e);
      }
    });
    setFilteredData(newArr);
  };
  const handleDelete = (id) => {
    let newArr = userData.likedItems.filter((e) => e != id);
    let newObj = { ...userData, likedItems: newArr };
    fetch(`http://localhost:8090/api/user/${user?.id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj),
    })
      .then((res) => res.json())
      .then((data) => {
        getData();
      });
  };
  const handleChange = (id) => {
    let newArr = [...userData.likedItems];
    newArr.push(id);
    let newObj = { ...userData, likedItems: newArr };
    fetch(`http://localhost:8090/api/user/${user?.id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj),
    })
      .then((res) => res.json())
      .then((data) => getData());
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="input-group bg-white border-white rounded d-flex px-2">
          <span className="fs-4 text-secondary">
            <i class="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control border-white rounded"
            placeholder="Search..."
            onChange={onChangeText}
          />
          <button className="btn text-white bg-success border-success rounded">
            Find now
          </button>
          <button
            className="btn btn-success border rounded"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEx"
          >
            Filter by category<i class="bi bi-caret-down-fill"></i>
          </button>
        </div>

        <div className="collapse" id="collapseEx">
          <ul className="list-unstyled d-flex flex-wrap justify-content-evenly pt-3">
            <li>
              <button className="btn btn-secondary" onClick={getData}>
                All
              </button>
            </li>
            {catData.map((e) => {
              return (
                <li>
                  <button
                    className="btn btn-secondary"
                    onClick={() => FilterCat(e.categoryName)}
                  >
                    {e.categoryName}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-5 d-flex justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <h2 className="">Total Products </h2>
            <span className="bg-white px-2 border-secondary rounded text-primary">
              {filteredData.length}
            </span>
          </div>
          <div>
            <button
              className="btn-light border-white bg-light"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
            >
              <i class="bi bi-list-nested"></i>
              <span className="ps-2">Sort By</span>
            </button>
            <div className="collapse" id="collapseExample">
              <ul className="list-unstyled bg-white">
                <li className="w-100 border-white">
                  <button
                    className="bg-white border-white w-100"
                    onClick={handleSort}
                  >
                    A-Z
                  </button>
                </li>
                <li className="w-100 border-white">
                  <button
                    className="bg-white border-white w-100"
                    onClick={handleSort2}
                  >
                    Z-A
                  </button>
                </li>
                <li className="w-100">
                  <button
                    className="bg-white border-white w-100"
                    onClick={handleSort3}
                  >
                    Price Up
                  </button>
                </li>
                <li className="w-100">
                  <button
                    className="bg-white border-white w-100"
                    onClick={handleSort4}
                  >
                    Price Down
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly gap-1">
          {filteredData.map((e) => {
            return (
              <div className="card mt-2 col-md-3">
                <div className="card-head ">
                  <img src={e.thumbImg} alt="" style={{ width: "100%" }} />
                </div>
                <div className="card-body2 px-3 text-truncate">
                  <span>{e.categoryName}</span>
                  <div className="d-flex justify-content-between">
                    <h2>{e.productName}</h2>
                    {console.log(userData)}

                    {user?.id && userData?.likedItems?.includes(e.productId) ? (
                      <button
                        className="text-danger bg-white border-white fs-4"
                        onClick={() => handleDelete(e.productId)}
                      >
                        {console.log("sas")}
                        <i class="bi bi-heart-fill"></i>
                      </button>
                    ) : (
                      <button
                        className="bg-white border-white fs-4"
                        onClick={() => handleChange(e.productId)}
                      >
                        <i class="bi bi-heart"></i>
                      </button>
                    )}
                  </div>

                  <span>{e.description}</span>
                  <div className="d-flex justify-content-between">
                    <h2 className="text-success">${e.price}</h2>
                    <button
                      className="btn btn-white "
                      onClick={() => setProductId1(e.productId)}
                    >
                      <a
                        href={`/detail/${productId1}`}
                        className="text-decoration-none text-dark"
                      >
                        Detail<i class="bi bi-arrow-right"></i>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
