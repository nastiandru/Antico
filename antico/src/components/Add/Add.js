import React, { Fragment, useState, useContext } from "react";
import "./Add.css";

function Add() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <Fragment>
      {loading}
      <div className="centerDiv">
        <p> Dodaj ogłoszenie</p>

        <div className="title">
        <label>Tytuł</label>
        <input
          className="input"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        </div>

        <div className="description">
        <label>Opis</label>
        <textarea
          className="input"
          type="textarea"
          name="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        </div>

        <div className="location">
        <label>Lokalizacja</label>
        <input
          className="input"
          type="text"
          name="Location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        </div>

        <div className="categories">
        <label>Kategoria</label>
        <select
        className="input"
          name="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          
        > <option >Wybierz kategorie</option>
          <option value="painting">Malarstwo</option>
          <option value="jewelry">Biżuteria</option>
          <option value="furniture">Meble</option>
          <option value="lamps">Lampy</option>
          <option value="porcelain&ceramics">Porcelana i ceramika</option>
          <option value="literature">Literatura</option>
          <option value="other">Pozostałe</option>
        </select>
        </div>
        <br />

        <div className="price">
        <label>Cena</label>
        <input
          className="input"
          type="number"
          name="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
         </div>

        <div className="posts">
        <img
          alt="Posts"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ""}
        ></img>

        <br />
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <button className="uploadBtn" >
          Dodaj ogłoszenie
        </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Add;