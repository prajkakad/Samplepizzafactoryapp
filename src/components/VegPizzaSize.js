import React, {useState} from "react";

const VegPizzaSize = (props) => {

    const [sizeState, setsizeState] = useState('');
    const [pizzaPrice, setPizzaprice] = useState(0);
    var regularprice;
    var mediumprice;
    var largeprice;
    var selectedpizzaprice;

    if (props.choice === 'Deluxe Veggie Pizza')
    {
      regularprice=150;
      mediumprice=200;
      largeprice=325;
    }
    else if (props.choice === 'Cheese and Corn Pizza')
    {
      regularprice=175;
      mediumprice=375;
      largeprice=475;
    }
    else if (props.choice === 'Paneer Tikka Pizza')
    {
      regularprice=160;
      mediumprice=290;
      largeprice=340;
    }
    else{
      regularprice=0;
      mediumprice=0;
      largeprice=0;
    }

    const handleSizeChange = (e) => {
        
        setsizeState(e.target.value);

        if(e.target.value === "Regular") { selectedpizzaprice=regularprice}
        else if(e.target.value === "Medium") {selectedpizzaprice=mediumprice}
        else if(e.target.value === "Large") {selectedpizzaprice=largeprice}
        else{selectedpizzaprice=0}
        setPizzaprice(selectedpizzaprice);

    }

    return(
    <div>
        <h2> Select Pizza Size</h2>
        <input type="radio" value="Regular" id="reg"
              onChange={handleSizeChange} name="pizzasize" />
            <label for="reg">Regular  Rs. {regularprice}</label>

            <input type="radio" value="Medium" id="med"
              onChange={handleSizeChange} name="pizzasize" />
            <label for="med">Medium  Rs. {mediumprice}</label>

            <input type="radio" value="Large" id="large"
              onChange={handleSizeChange} name="pizzasize" />
            <label for="large">Large  Rs. {largeprice}</label>

            <p> Your Selection and its cost : {props.choice} {sizeState}  Rs.{pizzaPrice} </p>

    </div>
    )
}

export default VegPizzaSize;