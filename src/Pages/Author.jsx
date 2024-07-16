import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

const Author = ({ SetId }) => {
  const [data, setData] = useState([]);
  const [deletedata, setDeletedata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchdata();
  }, [deletedata]);
  const fetchdata = async () => {
    await axios
      .get("https://669114f526c2a69f6e8e5bdf.mockapi.io/api/author")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit = (id) => {
    SetId(id);
    navigate(`/authoredit/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://669114f526c2a69f6e8e5bdf.mockapi.io/api/author/${id}`)
      .then((res) => setDeletedata(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h2 className="text-center User-icons my-3">
        <FaUsers /> <b>Author Details!!</b>
      </h2>
      <div className="p-1 table-responsive">
        <table className="table  table-danger table-bordered">
          <thead className="text-center">
            <tr>
              <th scope="col">No</th>
              <th scope="col">AuthorName</th>
              <th scope="col">Birthdate</th>
              <th scope="col">BookName</th>
              <th scope="col">BookPrice</th>
              <th scope="col">Biography</th>
              <th scope="col">Education</th>
              <th scope="col" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((element, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{element.id}</th>
                  <th>{element.Authorname}</th>
                  <th>{element.Birthdate}</th>
                  <th>{element.Bookname}</th>
                  <th>₹{element.Bookprice}</th>
                  <th>{element.Biography}</th>
                  <th>{element.Authoreducation}</th>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        handleEdit(element.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(element.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          className="btn btn-success"
          onClick={() => navigate("/createauthor")}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Author;
