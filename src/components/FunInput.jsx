import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FunInput = () => {
  const styles = {
    personBackground: css`
      width: 220px;
      height: 350px;
      background-color: blue;
      padding: 20px 10px;
    `,
    hair: css`
      margin: 0 auto;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background-color: brown;
    `,
    head: css`
      margin: -85px auto;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: tan;
      writing-mode: vertical-rl;
      text-align: center;
      padding: 30px 20px 40px 40px;
      font-size: 40px;
    `,
    beard: css`
        
    `
  };

  const [genderValue, setGenderValue] = useState("person");
  const [pronounValue, setPronounValue] = useState("den");
  const [nameValue, setNameValue] = useState(" en ukendt person");
  const [ageValue, setAgeValue] = useState("et uvist antal");
  const [addressValue, setAddressValue] = useState("en ukendt adresse");
  const [cityValue, setCityValue] = useState("en ukendt by");
  const [favColorValue, setFavColorValue] = useState("en ukendt by");

  console.log(favColorValue);

  return (
    <>
      <div className="personBackground" css={styles.personBackground}>
        <div className="hair" css={styles.hair}></div>
        <div className="head" css={styles.head}>
          {" "}
          <span css={styles.eyes}>8</span>
          <span css={styles.nose}>^</span>
        </div>
        <div className="beard" css={styles.beard}>
          )
        </div>
        <div className="outfitTop" css={styles.outfitTop}>
          ...
        </div>
        <div className="arms" css={styles.arms}>
          tatooVar
        </div>
        <div className="outfitBottom" css={styles.outfitBottom}></div>
        <div className="feet">
          <div className="leftFoot" css={styles.leftFoot}>
            <div className="rightFoot" css={styles.leftFoot}></div>
          </div>
        </div>
      </div>
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
