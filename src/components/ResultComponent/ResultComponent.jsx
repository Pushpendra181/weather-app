import React from "react";
import "./ResultComponent.css";

const ResultComponent = ({ place, celcius }) => {
  const ResultTemp = celcius ? place.temp - 273.15 : place.temp;

  return (
    <div className="result">
      {place.name !== "" && (
        <h1>
          wether in <span>{place.name}</span> is{" "}
          <span>{ResultTemp.toFixed(2)}
          {celcius ? " ºC" : " ºK"}</span>
        </h1>
      )}
    </div>
  );
};

export default ResultComponent;
