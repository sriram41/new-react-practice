import React, { useContext } from "react";
import { userContext } from "./contextindex1";  // Import userContext

const ContextIndex = () => {
  // Use the context
  const data = useContext(userContext);

  // Handle undefined data case
  if (!data) return <p>No data available</p>;

  return (
    <div>
      <ul>
        {data.map((eachitem) => {
          const { id, name, email } = eachitem;
          return (
            <li key={id}>
              <h3>{name}</h3>
              <h3>{email}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContextIndex;
