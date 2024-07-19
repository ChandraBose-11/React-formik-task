import axios from "axios";
import { Formik, useFormik } from "formik";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FaUserPlus } from "react-icons/fa6";

const CreateAuthor = () => {
    const navigate = useNavigate();
    const [createData, setCreateData] = useState({
      Authorname: "",
      Birthdate: "",
      Bookname: "",
      Bookprice: "",
      Biography: "",
      Authoreducation: "",
      id: ""
    });  
    const validationSchema = Yup.object().shape({
      Authorname: Yup.string().required("Authorname is required"),
      Birthdate: Yup.string().required("Birthdate is required"), 
      Bookname: Yup.string().required(" Bookname is required"),
      Bookprice: Yup.string().required(" Bookprice is required"),
      Biography: Yup.string().required("Biography is required"),
      Authoreducation: Yup.string().required("AuthorEducation is required"),
      id: Yup.string().required("id is required"),
      });
      const formik = useFormik({
        initialValues: {createData},
          validationSchema,
          onSubmit: async (values) => {
            await axios
              .post(
                `https://669114f526c2a69f6e8e5bdf.mockapi.io/api/author/`,
                values
              )
              .then((res) => console.log(res.data))
              .catch((error) => console.log(error));
            alert("Author Created successfully");
            navigate("/author");
          },
      });
    return (
      <div className="m-5">
      <div className="card p-2">
<div className="card-header text-center fs-3">
<h3><b><FaUserPlus/> Create Author Details</b></h3></div>
<div className="card-body mx-4">
<Formik>
 <form onSubmit={formik.handleSubmit}>
 <div class="mb-3">
<label for="id" class="form-label">id</label>
<input type="text" class="form-control" id="id" name="id" value={formik.values.id}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.id}</div>
<div class="mb-3">
<label for="Authorname" class="form-label">Authorname</label>
<input type="text" class="form-control" id="Authorname" name="Authorname" value={formik.values.Authorname}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Authorname}</div>
<div class="mb-3">
<label for="Birthdate" class="form-label">Birthdate</label>
<input type="text" class="form-control" id="Birthdate" name="Birthdate" value={formik.values.Birthdate}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Birthdate}</div>
<div class="mb-3">
<label for="Bookname" class="form-label">Bookname</label>
<input type="text" class="form-control" id="Bookname" name="Bookname" value={formik.values.Bookname}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Bookname}</div>
<div class="mb-3">
<label for="Bookprice" class="form-label">Bookprice</label>
<input type="text" class="form-control" id="Bookprice" name="Bookprice" value={formik.values.Bookprice}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Bookprice}</div>
<div class="mb-3">
<label for="Biography" class="form-label">Biography</label>
<input type="text" class="form-control" id="Biography" name="Biography" value={formik.values.Biography}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Biography}</div>
<div class="mb-3">
<label for="Authoreducation" class="form-label">Authoreducation</label>
<input type="text" class="form-control" id="Authoreducation" name="Authoreducation" value={formik.values.Authoreducation}  onChange={formik.handleChange} />
</div>
<div className="text-danger">{formik.errors.Authoreducation}</div>
<div class="mb-3">
<button className="btn btn btn-primary " type="submit">
       Create
     </button>
</div>
 </form>
 </Formik>
</div>
</div>
</div>
    );
};

export default CreateAuthor;