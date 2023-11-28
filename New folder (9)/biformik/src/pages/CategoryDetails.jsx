import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CategoryDetails = () => {
  const { id } = useParams();
  console.log(id);
  let [details, setDetails] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/categories/${id}`).then((res) => {
      setDetails(res.data);
    });
  }, [id]);
  console.log(details);
  return (
    <div>
      <p>Name: {details.name}</p>

      <p>Description: {details.description}</p>
    </div>
  );
};

export default CategoryDetails;
