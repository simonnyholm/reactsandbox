const CityInput = (props) => {
    return ( 
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
     );
}
 
export default CityInput;