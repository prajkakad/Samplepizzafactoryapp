import React from "react";

const Sides = () => {                

    return(
    <div>
        <h2>Select Sides</h2>

        <div>
        <input
          type="checkbox"
          id="sidecd"
          name="coldrink"
          value="Cold drink"
        />
        Cold drink (Rs. 55)
      </div>

      <div>
        <input
          type="checkbox"
          id="sidemc"
          name="moussecake"
          value="Mousse Cake"
        />
        Mousse Cake (Rs. 90)
      </div>

      
    </div>
    )
}

export default Sides