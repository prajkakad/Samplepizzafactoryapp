import React, {useState} from "react";
import NonvegPizzaSize from "./NonvegPizzaSize";
import NonVegtopping from "./NonVegtopping";

const NonvegPizza = () => {
    const [nonvegpizzaState, setnonvegPizzaState] = useState("Non Veg Supreme")

    const handleonChange = (e) => {
        setnonvegPizzaState(e.target.value)
    }

    return(
     <div>
        <h1> Select Your Non Vegetarian Pizza </h1>
        <select onChange = {handleonChange} value={nonvegpizzaState}>

            <option value="Non Veg Supreme"> Non Veg Supreme</option>
            <option value="Chicken Tikka"> Chicken Tikka</option>
            <option value="Pepper Barbecue Chicken"> Pepper Barbecue Chicken</option>

        </select>

        <p> <b> Your Selection : {nonvegpizzaState}</b></p>
        <NonvegPizzaSize  choice = {nonvegpizzaState}/>
        <NonVegtopping />
     </div>
    )
}

export default NonvegPizza