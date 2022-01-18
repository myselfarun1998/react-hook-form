import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";

const DisplayData = () => {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      {finalData.map((data) => (
        <h1 key={data.name}>
          <p>name:{data.name}</p>
          <p>email:{data.email}</p>
          <p>district:{data.district}</p>
          <p>country:{data.country}</p>
          <p>gender:{data.gender}</p>
          <p>country:{data.country1}</p>
          <p>state:{data.state}</p>


          state
         
        </h1>
      ))}
    </div>
  );
};

export default DisplayData;
