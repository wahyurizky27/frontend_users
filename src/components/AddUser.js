import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [sectors, setSectors] = useState([]);
  const [sector, setSector] = useState("");
  const [term, setTerm] = useState(false);
  // console.log("term", term);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    async function fetchSectors() {
      try {
        const response = await axios.get(
          "https://apiuserbackend-vercel.vercel.app/sectors"
        );
        setSectors(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSectors();
  }, []);

  const saveUser = async (e) => {
    e.preventDefault();
    if (!name || !sector) {
      alert("Please fill in all required fields and agree to the terms.");
      return;
    }
    try {
      await axios.post("https://apiuserbackend-vercel.vercel.app/users", {
        name,
        sector,
        term,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <h2 className="mb-5">
          Please enter your name and pick the Sectors you are currently involved
          in.
        </h2>
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Sector</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                >
                  {sectors.map((sectorOption) => (
                    <option
                      key={sectorOption._id}
                      value={sectorOption.sectorName}
                    >
                      {sectorOption.sectorName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={term}
                  onChange={(e) => setTerm(e.target.checked)}
                />{" "}
                Agree to Terms
              </label>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
