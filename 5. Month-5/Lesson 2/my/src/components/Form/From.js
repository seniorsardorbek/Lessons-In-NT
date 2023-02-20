import React from "react";
import Button from "../Butoon/Button";
function From() {
  return (
    <div className="from-container">
      <h1>Get Vaccine Now</h1>
      <p>
        Combined with a handful of model sentence structures, generate always
        free from repetition injected.
      </p>
      <form className="form">
        <label>
          {" "}
          Full Name <input type="text" placeholder="Enter Your name" />
        </label>
        <label>
          Email or phone number
          <input type="text" placeholder="Enter your email or number" />
        </label>
        <label>
          Address
          <input type="text" placeholder="Full your Address" />
        </label>
        <label>
          Disease history
          <input type="text" placeholder="Enter diese history" />
        </label>
        {/* <label>Level Vaccination<input type="text" placeholder='Choose Level' /></label> */}
        <label for="cars">
          Choose a car:
          <select name="cars" id="cars">
            <option value="Beginner">Beginner</option>
            <option value="Elementary">Elementary</option>
            <option value="Intermidate">Intermidate</option>
            <option value="Upper">Upper</option>
          </select>
        </label>
        <label>
          {" "}
          Near Vaccination Location
          <input type="text" placeholder="Indonesia" />
        </label>

      </form>
        <Button style={"btn1"} btnName={"Vaccine Now"} />
    </div>
  );
}

export default From;
