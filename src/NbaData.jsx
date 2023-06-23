import { useState } from "react";
import { Card } from "./helpers/components/Card";
import { DataTeams } from "./helpers/DataTeams";

export const NbaData = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (event) => {
    const team = event.target.value;
    setInputValue(team);
  };

  const filteredUsers = DataTeams.filter((team) =>
    team.nombre.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div
      className="nba-data-container"
      style={{
        background: "#F4F6F8",
      }}
    >
      <div className="container">
        <h1 className="text-center my-4">Nba Data Teams</h1>

        <div className="input-group mb-5">
          <input
            type="text"
            placeholder="Search Team"
            value={inputValue}
            onChange={handleSearch}
            className="form-control"
          />
        </div>

        <div className="row">
          {filteredUsers.map((team) => (
            <div className="col-md-4" key={team.id}>
              <Card
                id={team.id}
                nombre={team.nombre}
                fundacion={team.fundacion}
                conferencia={team.conferencia}
                arena={team.arena}
                mascota={team.mascota}
                logo={team.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
