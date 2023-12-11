import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
function Home() {
  const editINput = useRef();
  const [blogId, setBlogId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/blogs").then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);
  return (
    <div>
      Blogs:
      {blogs.map((elem, id) => {
        return (
          <ul>
            <li key={id}>
              {elem.text}{" "}
              {edit ? (
                ""
              ) : (
                <button
                  onClick={() => {
                    setEdit(!edit);
                    setBlogId(id);
                  }}
                >
                  edit
                </button>
              )}
              <br />
              {edit && blogId == id ? (
                <div>
                  <input type="text" ref={editINput} />
                  <button onClick={() => dispatch(editblog(editINput))}>
                    apply
                  </button>
                </div>
              ) : (
                ""
              )}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Home;
