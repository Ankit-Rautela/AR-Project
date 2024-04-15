import React, { useEffect, useState } from "react";

const Signup = () => {

  const[form, setForm] = useState({});

  const handleForm = (e) => {
    // console.log(e.target.value, e.target.name);
    setForm({
        // to store previous values
        ...form,
        // to add and edit new values
        [e.target.name] : e.target.value
    })
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch('http://localhost:8080/test',{
        method:"POST",
        body:JSON.stringify(form),
        headers:{
            'Content-Type':'application/json'
        }
    })    
    const data = await response.json();
    console.log(data);
  }

  const getUsers = async() => {
    const response = await fetch('http://localhost:8080/test',{
        method:"GET",
    })    
    const data = await response.json();
    console.log(data);
  }

  useEffect(()=>{
    getUsers();
  })

  return (
    <>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <input
            onChange={handleForm}
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ankit@gmail.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            onChange={handleForm}
            type="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
