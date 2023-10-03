import React, { useState } from "react";
import { getWeather } from "../../utils/weather-api";
import "./SearchComponent.css"

const SearchComponent = ({ setPlace }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <form
       className="serchContenar"
        onSubmit= {async (e) => {
          e.preventDefault();
          const result = await getWeather(value);
          console.log("jsyfsaflh",result)
          setPlace({
            name: result?.data?.name,
            temp:result?.data?.main?.temp            
          });
        }}
      >
        <input
          type="text"
          placeholder="Enter the name of place"    
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchComponent;
