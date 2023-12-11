import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { sendblog } from "./../redux/Slicers/AddblogSlice";

function Blog() {
  const input = useRef();
  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor="">New blog</label>
      <input type="text" ref={input} />
      <button onClick={() => dispatch(sendblog(input.current.value))}>
        Add new blog
      </button>
    </div>
  );
}

export default Blog;
