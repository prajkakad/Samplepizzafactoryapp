import React, {useState} from "react";
import Vegtopping from './Vegtopping';
import VegPizzaSize from './VegPizzaSize';

const VegPizza = () => {
    const [pizzaState, setPizzaState] = useState("Deluxe Veggie Pizza")

    const handleonChange = (e) => {
        setPizzaState(e.target.value)
    }

    return(
    <div>
        <h1> Select Your Pizza </h1>
        <select onChange = {handleonChange} value={pizzaState}>

            <option value="Deluxe Veggie Pizza"> Deluxe Veggie Pizza</option>
            <option value="Cheese and Corn Pizza"> Cheese and Corn Pizza</option>
            <option value="Paneer Tikka Pizza"> Paneer Tikka Pizza</option>

        </select>
        <p> <b> Your Selection : {pizzaState}</b></p>
        <VegPizzaSize  choice = {pizzaState}/>
        <Vegtopping />
    </div>
    )
}

export default VegPizza