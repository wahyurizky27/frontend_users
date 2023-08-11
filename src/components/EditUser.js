import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [term, setTerm] = useState(false);
  const [sector, setSector] = useState("");
  const [sectors, setSectors] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    getUserById();
    fetchSectors();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(
      `https://apiuserbackend-vercel.vercel.app/users/${id}`
    );
    setName(response.data.name);
    setSector(response.data.sector);
    setTerm(response.data.term);
  };

  const fetchSectors = async () => {
    try {
      const response = await axios.get(
        "https://apiuserbackend-vercel.vercel.app/sectors"
      );
      setSectors(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `https://apiuserbackend-vercel.vercel.app/users/${id}`,
        {
          name,
          sector,
          term,
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
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
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
