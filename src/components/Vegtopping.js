import React, {useState} from "react";

const Vegtopping = () => {
    const [toppingState, setoppingState] = useState("Black Olive");

    const handletoppingChange = (e) => {
         setoppingState(e.target.value)
    }

    return(
     <div>
        <h2> Select Your Extra topping:</h2>
        <select onChange={handletoppingChange} value={toppingState}>

            <option value="Black Olive"> Black olive (Rs 20)</option>
            <option value="Capsicum"> Capsicum (Rs 25)</option>
            <option value="Paneer"> Paneer (Rs 35)</option>
            <option value="Mushroom"> Mushroom (Rs 30)</option>
            <option value="Fresh Tomato"> Fresh Tomato (Rs 10)</option>

        </select>
        <p> <b> Your Extra Toppings : {toppingState}</b></p>
     </div>

    )
}

export default Vegtopping