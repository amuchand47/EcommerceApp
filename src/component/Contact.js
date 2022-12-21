import React from "react";

const Contact = () => {
  return (
    <>
    <div className="">
    <div className="w-50 mt-3 border rounded-3">
    <div className="p-5 " style={{ backgroundImage: `linear-gradient(to top left, #c0c0c0, #349beb)`  }}>
    <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            required = {true}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Id
          </label>
          <input
            required = {true}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Contact Number
          </label>
          <input
            required = {true}
            min={10}
            max = {10}
            type="number"
            className="form-control"
            id="number"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
    </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
