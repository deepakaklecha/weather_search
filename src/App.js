import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [city, setCity] = useState("Mumbai");
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9b1076dacaaa7f1a2c460a496258de89`;
      const response = await fetch(url);
      const resjson = await response.json();
      console.log(resjson);
      setCity(resjson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputbox">
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <div className="city">
                <h2>{search}</h2>
              </div>
              <div className="temp">
                <h3>{city.temp} °Cel</h3>
              </div>
              <div className="minmax">
                <p>
                  Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
