import { useState } from "react";

const FunInput = () => {
  const [genderValue, setGenderValue] = useState("person");
  const [pronounValue, setPronounValue] = useState("den");
  const [nameValue, setNameValue] = useState("et eller andet");
  const [ageValue, setAgeValue] = useState("et uvist antal");
  const [addressValue, setAddressValue] = useState("en ukendt adresse");
  const [cityValue, setCityValue] = useState("en ukendt by");
  const [favColorValue, setFavColorValue] = useState("en ukendt by");

  console.log(favColorValue);

  return (
    <>
      <p>
        Der var engang en fantastisk <span>{genderValue}</span>, som blev kaldt
        ved det flotte navn <span>{nameValue}</span>. På denne skønne dag var
        <span> {nameValue} </span> præcis
        <span> {ageValue} </span> år gammel, og <span>{pronounValue} </span> var
        klar til at tage af sted fra sin bopæl på <span>{addressValue}</span>,
        for at gå på opdagelse i det skønne lokalområde i{" "}
        <span>{cityValue}</span> og omegn. <span> {nameValue}s </span>{" "}
        yndlingsfarve havde den hexadecimale kode <span>{favColorValue}</span>,
        så denne særlige dags outfit var naturligvis stylet med en kant i samme
        farve og med et printet motiv af en , som <span>{pronounValue} </span>{" "}
        havde et særligt forhold til.
      </p>
      <div>
        <label htmlFor="name">Navn:</label>
        <input
          onChange={(event) => {
            setNameValue(event.target.value);
          }}
          type="text"
          name=""
          id="name"
        />
      </div>
      <div>
        <label htmlFor="age">Alder:</label>
        <input
          onChange={(event) => {
            setAgeValue(event.target.value);
          }}
          type="text"
          name=""
          id="age"
        />
      </div>
      <div>
        <label htmlFor="gender">Køn:</label>
        <input
          onChange={(event) => {
            setGenderValue(event.target.value);
          }}
          type="text"
          name=""
          id="gender"
        />
      </div>
      <div>
        <label htmlFor="pronoun">Pronomen:</label>
        <input
          onChange={(event) => {
            setPronounValue(event.target.value);
          }}
          type="text"
          name=""
          id="pronoun"
        />
      </div>
      <div>
        <label htmlFor="address">Adresse:</label>
        <input
          onChange={(event) => {
            setAddressValue(event.target.value);
          }}
          type="text"
          name=""
          id="address"
        />
      </div>
      <div>
        <label htmlFor="city">By:</label>
        <input
          onChange={(event) => {
            setCityValue(event.target.value);
          }}
          type="text"
          name=""
          id="city"
        />
      </div>
      <div>
        <label htmlFor="favColor">Din yndlingsfarve:</label>
        <input
          onChange={(event) => {
            setFavColorValue(event.target.value);
          }}
          type="color"
          name=""
          id="favColor"
        />
      </div>

      <div>
        <label htmlFor="motive">Vælg et motiv, du godt kan lide:</label>
        <select id="motive" name="motive">
          <option value="regnbue">Regnbue</option>
          <option value="kat">Kat</option>
          <option value="is">Is</option>
          <option value="soldat">soldat</option>
        </select>
      </div>
    </>
  );
};

export default FunInput;
