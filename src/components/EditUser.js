import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [term, setTerm] = useState(false);
  const [sector, setSector] = useState("Construction materials");
  const navigate = useNavigate();
  const { id } = useParams();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(
      `https://apiuserbackend-vercel.vercel.app/users/${id}`
    );
    setName(response.data.name);
    setSector(response.data.sector);
    setTerm(response.data.term);
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
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Construction materials">
                    Construction materials
                  </option>
                  <option value="Electronics and Optics">
                    Electronics and Optics
                  </option>
                  <option value="Food and Beverage">Food and Beverage</option>
                  <option value="Bakery & confectionery products">
                    Bakery & confectionery products
                  </option>
                  <option value="Beverages">Beverages</option>
                  <option value="Fish & fish products">
                    Fish & fish products
                  </option>
                  <option value="Meat & meat products">
                    Meat & meat products
                  </option>
                  <option value="Milk & dairy products">
                    Milk & dairy products
                  </option>
                  <option value="Other">Other</option>
                  <option value="Sweets & snack food">
                    Sweets & snack food
                  </option>
                  <option value="Furniture">Furniture</option>
                  <option value="Bathroom/sauna">Bathroom/sauna</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Children’s room">Children’s room</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Living room">Living room</option>
                  <option value="Office">Office</option>
                  <option value="Other (Furniture)">Other (Furniture)</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Project furniture">Project furniture</option>
                  <option value="Machinery">Machinery</option>
                  <option value="Machinery components">
                    Machinery components
                  </option>
                  <option value="Machinery equipment/tools">
                    Machinery equipment/tools
                  </option>
                  <option value="Manufacture of machinery">
                    Manufacture of machinery
                  </option>
                  <option value="Maritime">Maritime</option>
                  <option value="Aluminium and steel workboats">
                    Aluminium and steel workboats
                  </option>
                  <option value="Boat/Yacht building">
                    Boat/Yacht building
                  </option>
                  <option value="Ship repair and conversion">
                    Ship repair and conversion
                  </option>
                  <option value="Metal structures">Metal structures</option>
                  <option value="Other">Other</option>
                  <option value="Repair and maintenance service">
                    Repair and maintenance service
                  </option>
                  <option value="Metalworking">Metalworking</option>
                  <option value="Construction of metal structures">
                    Construction of metal structures
                  </option>
                  <option value="Houses and buildings">
                    Houses and buildings
                  </option>
                  <option value="Metal products">Metal products</option>
                  <option value="Metal works">Metal works</option>
                  <option value="CNC-machining">CNC-machining</option>
                  <option value="Forgings, Fasteners">
                    Forgings, Fasteners
                  </option>
                  <option value="Gas, Plasma, Laser cutting">
                    Gas, Plasma, Laser cutting
                  </option>
                  <option value="MIG, TIG, Aluminum welding">
                    MIG, TIG, Aluminum welding
                  </option>
                  <option value="Plastic and Rubber">Plastic and Rubber</option>
                  <option value="Packaging">Packaging</option>
                  <option value="Plastic goods">Plastic goods</option>
                  <option value="Plastic processing technology">
                    Plastic processing technology
                  </option>
                  <option value="Blowing">Blowing</option>
                  <option value="Moulding">Moulding</option>
                  <option value="Plastics welding and processing">
                    Plastics welding and processing
                  </option>
                  <option value="Plastic profiles">Plastic profiles</option>
                  <option value="Printing">Printing</option>
                  <option value="Advertising">Advertising</option>
                  <option value="Book/Periodicals printing">
                    Book/Periodicals printing
                  </option>
                  <option value="Labelling and packaging printing">
                    Labelling and packaging printing
                  </option>
                  <option value="Textile and Clothing">
                    Textile and Clothing
                  </option>
                  <option value="Clothing">Clothing</option>
                  <option value="Textile">Textile</option>
                  <option value="Wood">Wood</option>
                  <option value="Other (Wood)">Other (Wood)</option>
                  <option value="Wooden building materials">
                    Wooden building materials
                  </option>
                  <option value="Wooden houses">Wooden houses</option>
                  <option value="Creative industries">
                    Creative industries
                  </option>
                  <option value="Energy technology">Energy technology</option>
                  <option value="Environment">Environment</option>
                  <option value="Business services">Business services</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Information Technology and Telecommunications">
                    Information Technology and Telecommunications
                  </option>
                  <option value="Data processing, Web portals, E-marketing">
                    Data processing, Web portals, E-marketing
                  </option>
                  <option value="Programming, Consultancy">
                    Programming, Consultancy
                  </option>
                  <option value="Software, Hardware">Software, Hardware</option>
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Translation services">
                    Translation services
                  </option>
                  <option value="Transport and Logistics">
                    Transport and Logistics
                  </option>
                  <option value="Air">Air</option>
                  <option value="Rail">Rail</option>
                  <option value="Road">Road</option>
                  <option value="Water">Water</option>
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
