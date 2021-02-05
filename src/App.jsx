import React, { useState, useEffect } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

function App() {
  const API_URL = `https://jsonplaceholder.typicode.com/users`;

  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setMonsters(data);
    setFilteredMonsters(data);
  };

  const handleSearchInput = (e) => {
    const filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
    );

    setFilteredMonsters(filtered);
  };

  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox
        placeholder="search monsters"
        handleChange={handleSearchInput}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
