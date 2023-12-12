import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editblog, deleteblog } from "./../redux/Slicers/AddblogSlice";

import axios from "axios";
function Home() {
  const editINput = useRef();
  const [editInput, setEditInput] = useState("");
  const dispatch = useDispatch();
  const [blogId, setBlogId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/blogs").then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);
  let obj = {
    blogId: blogId,
    editInput: editInput,
  };

  const handleEdit = () => {
    axios.get(`http://localhost:3000/blogs/`).then((resp) => {
      const updatedData = resp.data;
      console.log(updatedData);
      setBlogs(updatedData);
      setEdit(false);
    });
  };

  const handleDelete = (idU) => {
    const updatedBlogs = blogs.filter((elem) => elem.id !== idU);
    setBlogs(updatedBlogs);
    dispatch(deleteblog(idU));
  };

  const handleSort = () => {
    const sortedBlogs = [...blogs].sort((a, b) => {
      if (a.text > b.text) {
        return 1;
      }
      if (a.text < b.text) {
        return -1;
      }
      return 0;
    });

    setBlogs(sortedBlogs);
  };

  console.log(blogs);
  return (
    <div>
      <input
        type="text"
        style={{ marginRight: "10px" }}
        placeholder="Search"
        onChange={(e) => {
          axios.get("http://localhost:3000/blogs").then((res) => {
            const updatedBlogs = res.data.filter((elem) => {
              return elem.text
                .toLowerCase()
                .trim()
                .includes(e.target.value.toLowerCase().trim());
            });
            setBlogs(updatedBlogs);
          });
        }}
      />
      <button
        onClick={() => {
          handleSort();
        }}
      >
        sort
      </button>
      <br />
      <br />
      Blogs:
      {blogs &&
        blogs.map((elem, id) => {
          return (
            <ul>
              <li style={{ display: "flex" }} key={id}>
                {elem.text}{" "}
                {edit && blogId == elem.id ? (
                  <div>
                    <input
                      type="text"
                      ref={editINput}
                      onChange={(e) => {
                        setEditInput(e.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        dispatch(editblog(obj));
                        handleEdit();
                      }}
                    >
                      apply
                    </button>
                    <button onClick={() => setEdit(false)}>cancel</button>
                  </div>
                ) : (
                  <button
                    style={{
                      marginRight: "10px",
                    }}
                    onClick={() => {
                      setEdit(!edit);
                      setBlogId(elem.id);
                      console.log(elem.id);
                    }}
                  >
                    edit
                  </button>
                )}
                <button
                  onClick={() => {
                    handleDelete(elem.id);
                  }}
                >
                  Delete
                </button>
              </li>
            </ul>
          );
        })}
    </div>
  );
}

export default Home;
