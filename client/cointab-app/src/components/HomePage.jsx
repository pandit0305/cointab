import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [fetchdata, setFetchData] = useState(false);
  const [deletedata, setDeleteData] = useState(false);

  const fetchData = () => {
    axios({
      method: "POST",
      baseURL: "http://localhost:8000",
      url: "/addUsers",
    })
      .then((res) => {
        console.log("data is fetched");
        setFetchData(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteData = () => {
    axios({
      method: "DELETE",
      baseURL: "http://localhost:8000",
      url: "/deleteUser",
    })
      .then((res) => {
        console.log(res);
        setDeleteData(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <div>
          <button className="btn" onClick={fetchData}>
            Fetch Users
          </button>
        </div>

        <div>
          <button className="btn" onClick={deleteData}>
            Delete Users
          </button>
        </div>

        <div>  
            <Link to={"/userDetails"}>
                <button className="btn">User Details</button>
            </Link>
        </div>
      </div>
      <div>
        {fetchdata ? <div>User data is fetched</div> : ""}
        {deletedata ? <div>User data is deleted</div> : ""}
      </div>
    </>
  );
}
