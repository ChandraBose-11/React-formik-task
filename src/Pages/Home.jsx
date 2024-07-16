import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GiBookCover } from "react-icons/gi";
const Home = () => {
const [data,setData]=useState([])
useEffect(()=>{
    fetchdata()
},[])
const fetchdata=async()=>{
    await axios.get('https://669118d026c2a69f6e8e6e0b.mockapi.io/api/book')
    .then((res)=>setData(res.data))
    .catch((error)=>console.log(error))
}
    return (
        <div>
             <div className="container" id="container">
             <div className="card-header">
<h2 className="text-center User-icons my-3">
<GiBookCover/> <b>Book Details!!</b>
      </h2>
      </div>
      <br/>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((element, index) => {
          return (
            <div key={index}>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                  <h4 className="card-header text-center" style={{backgroundColor:'lightseagreen'}}><GiBookCover/> Book</h4>
                    <div className="card-text fw-medium m-2">
                     <p>BookName:{element.Bookname}</p>
                     <p>BookNumber:{element.Booknumber}</p>
                     <p>Email:{element.Email}</p>
                     <p>AuthorName:{element.Authorname}</p>
                     <p>BirthDate:{element.Birthdate}</p>
                     <p>Biography:{element.Biography}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
   </div>
    );
};

export default Home;