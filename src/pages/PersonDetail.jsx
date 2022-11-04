import { useParams, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";

const PersonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // const {state:person} = useLocation();

  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setLoading(true);
        if (!res.ok) {
          setError(true)
          setLoading(false)
          throw new Error("something went wrong");
        }
        return res.json();
      })
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(person);

  if (error) {
    return <NotFound />;
  }
   if(loading){
    return (
      <div className="text-center">
        <h3>Loading</h3>
      </div>
      
    )
  }

   {
    return (
      <div className="container text-center">
        <h3>
          {person?.first_name} {person?.last_name}
        </h3>
        <img className="rounded" src={person?.avatar} alt="" />
        <p>{person?.email}</p>

        <div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-3"
          >
            GO HOME
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-primary ">
            GO BACK
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
