import axios from "axios";
import { useFormik } from "formik";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { GiNotebook } from "react-icons/gi";

const CreateBook = () => {
    const navigate =  useNavigate();
    const [createData, setCreateData] = useState({
       Bookname: "",
        Booknumber: "",
        Email: "",
        Authorname: "",
        Birthdate: "",
        Biography: "",
        id: "",
    });
    const validationSchema = Yup.object().shape({
        Bookname: Yup.string().required(" Bookname is required"),
        Booknumber: Yup.string().required("Booknumber is required"),
       Email: Yup.string().required("Email is required"),
        Authorname: Yup.string().required("Authorname is required"),
        Birthdate: Yup.string().required("Birthdate is required"),
        Biography: Yup.string().required("Biography is required"),
        id: Yup.string().required("id is required"),
      });
      const formik = useFormik({
        initialValues: {createData},
          validationSchema,
          onSubmit: async (values) => {
            await axios
              .post(
                `https://669118d026c2a69f6e8e6e0b.mockapi.io/api/book/`,
                values
              )
              .then((res) => console.log(res.data))
              .catch((error) => console.log(error));
            alert("Book Created successfully");
            navigate("/book");
          },
      });
    return (
      <div className="m-5">
        <div className="card p-2">
<div className="card-header text-center fs-2">
<h3><b><GiNotebook/> Create Book Details</b></h3></div>
<div className="card-body mx-4 ">
    <form onSubmit={formik.handleSubmit}>
    <div className="mb-3">
  <label for="id" className="form-label">id</label>
  <input type="text" className="form-control" id="id" name="id"  value={formik.values.id}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.id}</div>
<div className="mb-3">
  <label for="Bookname" className="form-label">Bookname</label>
  <input type="text" className="form-control" id="Bookname" name="Bookname"  value={formik.values.Bookname}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Bookname}</div>
<div className="mb-3">
  <label for="Booknumber" className="form-label">Booknumber</label>
  <input type="text" className="form-control" id="Booknumber" name="Booknumber"  value={formik.values.Booknumber}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Booknumber}</div>
<div className="mb-3">
  <label for="Email" className="form-label">Email</label>
  <input type="text" className="form-control" id="Email" name="Email"  value={formik.values.Email}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Email}</div>
<div className="mb-3">
  <label for="Authorname" className="form-label">Authorname</label>
  <input type="text" className="form-control" id="Authorname" name="Authorname"  value={formik.values.Authorname}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Authorname}</div>
<div className="mb-3">
  <label for="Birthdate" className="form-label">Birthdate</label>
  <input type="text" className="form-control" id="Birthdate" name="Birthdate"  value={formik.values.Birthdate}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Birthdate}</div>
<div className="mb-3">
  <label for="Biography" className="form-label">Biography</label>
  <input type="text" className="form-control" id="Biography" name="Biography"  value={formik.values.Biography}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Biography}</div>
<div className="mb-3">
<button className="btn btn btn-primary " type="submit">
          Create
        </button>
</div>
    </form>
  </div>
  </div>
  </div>
    );
};

export default CreateBook;