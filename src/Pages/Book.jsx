import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiBookCover } from "react-icons/gi";

const Book = ({ setid }) => {
  const [data, setData] = useState([]);
  const [deletedata, setDeletedata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchdata();
  },[deletedata]);
  const fetchdata = async () => {
    await axios
      .get("https://669118d026c2a69f6e8e6e0b.mockapi.io/api/book")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };
  const handleEdit = (id) => {
    setid(id);
    navigate(`/bookedit/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`https://669118d026c2a69f6e8e6e0b.mockapi.io/api/book/${id}`)
      .then((res) => setDeletedata(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h2 className="text-center User-icons  my-3"><GiBookCover/> <b>Book Details!!</b></h2>
      <div className="p-1 table-responsive">
        <table className="table  table-danger table-bordered">
          <thead className="text-center">
            <tr>
              <th scope="col">No</th>
              <th scope="col">BookName</th>
              <th scope="col">BookNumber</th>
              <th scope="col">Email</th>
              <th scope="col">AuthorName</th>
              <th scope="col">Birthdate</th>
              <th scope="col">Biography</th>
              <th scope="col" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((ele, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{ele.id}</th>
                  <td>{ele.Bookname}</td>
                  <td>{ele.Booknumber}</td>
                  <td>{ele.Email}</td>
                  <td>{ele.Authorname}</td>
                  <td>{ele.Birthdate}</td>
                  <td>{ele.Biography}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        handleEdit(ele.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(ele.id);
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
          onClick={() => navigate("/createbook")}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Book;
