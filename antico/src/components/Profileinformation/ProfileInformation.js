import React, { Fragment, useState, useContext } from "react";
import "./ProfileInformation.css";

const ProfileInformation = () => {

    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const[experience, setExperiance] =useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setProfileImage(file);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        //можна тут вислати дані до backendu
      };

 return (
    <Fragment>
    <div className="profileinformation">
      <h2>Wypełnij swój profil</h2>
      <form onSubmit={handleSubmit}>

      <label>
          Zdjęcie profilowe:
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>

        <label>
          Nazwa użytkownika:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>

        <label>
          Lokalizacja:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>

        <label>
          Numer telefonu:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>

        <label>
          Adres e-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <br />
<label>Doświadczenie z antykami:</label>
<select
  name="Category"
  onChange={(e) => {
    setExperiance(e.target.value);
  }}
  className="input"
> <option >Mniej niż rok</option>
  <option >1-5 lat</option>
  <option >5-20 lat</option>
  <option >Więcej niż 20 lat</option>
  
</select>
<br />

        <button type="submit">Zapisz profil</button>
      </form>
     </div>
      </Fragment>
      
    
  );
}

export default ProfileInformation;

