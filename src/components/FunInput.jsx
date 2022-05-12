import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import unicorn from "../img/unicorn.png";

const FunInput = () => {
  const styles = {
    personBackground: css`
      background-color: blue;
    `,
    personBox: css`
      width: 220px;
      height: 400px;
      padding: 20px 10px;
    `,
    hair: css`
      margin: 0 auto;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background-color: brown;
      writing-mode: vertical-rl;
      text-align: center;
      padding: 54px 20px 40px 40px;
      font-size: 40px;
      color: blue;
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
      margin: 55px auto 0;
      width: 35px;
      height: 28px;
      background-color: brown;
      border-radius: 40%;
      writing-mode: vertical-rl;
      padding: 5px;
      color: #d75959;
      font-weight: 700;
    `,
    neck: css`
      width: 20px;
      height: 20px;
      margin: 0 auto;
      background-color: tan;
    `,
    arms: css`
      width: 170px;
      height: 20px;
      background-color: tan;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      font-weight: 600;
    `,
    rightFingers: css`
      position: relative;
    `,
    outfitTop: css`
      margin: -22px auto -20px;
      width: 75px;
      height: 120px;
      background-color: rgb(220, 94, 16);
      clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
      writing-mode: vertical-rl;
      text-align: center;
      padding: 10px auto;
      font-size: 40px;
      border-top: dotted #200a0a;
      border-bottom: dotted #200a0a;
    `,
    holdItem: css`
      position: absolute;
      width: 10px;
      margin-top: -15px;
    `,
    holdItemImg: css`
      width: 40px;
    `,
    legs: css`
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      height: 100px;
      width: 50px;
    `,
    leftLeg: css`
      width: 20px;
      height: 70px;
      background-color: maroon;
    `,
    rightLeg: css`
      width: 20px;
      height: 70px;
      background-color: maroon;
    `,
    feet: css`
      margin: -30px auto;
      display: flex;
      justify-content: space-around;
      height: 20px;
      width: 50px;
      padding-right: 5px;
    `,
    leftFoot: css`
      width: 25px;
      height: 12px;
      background-color: #513b11;
      clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%);
      padding: 0 0 10px 5px;
    `,
    rightFoot: css`
      width: 25px;
      height: 12px;
      background-color: #513b11;
      clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%);
      padding: 0 0 10px 5px;
    `,
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
        <div className="personBox" css={styles.personBox}>
          <div className="hair" css={styles.hair}>
            :
          </div>
          <div className="head" css={styles.head}>
            {" "}
            <span css={styles.eyes}>8</span>
            <span css={styles.nose}>^</span>
          </div>
          <div className="beard" css={styles.beard}>
            )
          </div>
          <div className="neck" css={styles.neck}></div>
          <div className="arms" css={styles.arms}>
            <p css={styles.leftFingers}>=</p> <p css={styles.leftTatoo}>#</p>{" "}
            <p></p> <p></p>
            <p css={styles.leftTatoo}>$</p> <p css={styles.rightFingers}>=</p>
          </div>
          <div className="holdItem" css={styles.holdItem}>
            <img css={styles.holdItemImg} src={unicorn} alt="" />
          </div>
          <div className="outfitTop" css={styles.outfitTop}>
            ..........
          </div>

          <div className="legs" css={styles.legs}>
            <div className="leftLeg" css={styles.leftLeg}></div>
            <div className="rightLeg" css={styles.rightLeg}></div>
          </div>
          <div className="feet" css={styles.feet}>
            <div className="leftFoot" css={styles.leftFoot}>
              #
            </div>
            <div className="rightFoot" css={styles.rightFoot}>
              #
            </div>
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
