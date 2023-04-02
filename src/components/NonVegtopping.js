import React, {useState} from "react";

const NonVegtopping = () => {

    const [nonvegtoppingState, setnonvegtoppingState] = useState("Chicken Tikka");

    const handlenonvegtoppingChange = (e) => {
         setnonvegtoppingState(e.target.value)
    }

    return(
     <div>
        <h2> Select Your Extra topping:</h2>
        <select onChange={handlenonvegtoppingChange} value={nonvegtoppingState}>

            <option value="Chicken Tikka"> Chicken Tikka (Rs 35)</option>
            <option value="Barbeque Chicken"> Barbeque Chicken (Rs 45)</option>
            <option value="Grilled Chicken"> Grilled Chicken (Rs 40)</option>
           

        </select>
        <p> <b> Your Extra Toppings : {nonvegtoppingState}</b></p>
     </div>

    )
}

export default NonVegtopping;