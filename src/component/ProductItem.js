import React, { useState, useEffect } from "react";

const ProductItem = (props) => {
  
  // created an hook that show the shadow on hovering over the products

  const [style, setstyle] = useState(null);

  const updateStyleEnter =() =>{
    setstyle("shadow-lg p-3 mb-5 bg-body rounded")
  } 

  const updateStyleLeave =() =>{
    setstyle("null")
  } 

 let { title, desc, category, image } = props;
  
  return (
    <div className="my-3">
      <div className={`card ${style}`} onMouseEnter={updateStyleEnter} onMouseLeave={updateStyleLeave}>
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-success"
          style={{ left: "99%", zIndex: "1" }}
        >
          {category}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img src={image} className="card-img-top" alt="..." height={400} width={100} />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{desc}...</p>
          {/* <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p> */}
          {/* <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More...
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
