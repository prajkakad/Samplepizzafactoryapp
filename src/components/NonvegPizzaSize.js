import React, {useState} from "react";

const NonvegPizzaSize = (props) => {

    const [nonvegsizeState, setnonvegsizeState] = useState('');
    const [nonvegpizzaPrice, setnonvegPizzaprice] = useState(0);
    var regularprice;
    var mediumprice;
    var largeprice;
    var selectedpizzaprice;

    if (props.choice === 'Non Veg Supreme')
    {
      regularprice=190;
      mediumprice=325;
      largeprice=425;
    }
    else if (props.choice === 'Chicken Tikka')
    {
      regularprice=210;
      mediumprice=370;
      largeprice=500;
    }
    else if (props.choice === 'Pepper Barbecue Chicken')
    {
      regularprice=220;
      mediumprice=380;
      largeprice=525;
    }
    else{
      regularprice=0;
      mediumprice=0;
      largeprice=0;
    }

    const handlenonvegSizeChange = (e) => {
        
        setnonvegsizeState(e.target.value);

        if(e.target.value === "Regular") { selectedpizzaprice=regularprice}
        else if(e.target.value === "Medium") {selectedpizzaprice=mediumprice}
        else if(e.target.value === "Large") {selectedpizzaprice=largeprice}
        else{selectedpizzaprice=0}
        setnonvegPizzaprice(selectedpizzaprice);

    }

    return(
    <div>
        <h2> Select Pizza Size</h2>
        <input type="radio" value="Regular" id="reg"
              onChange={handlenonvegSizeChange} name="pizzasize" />
            <label for="reg">Regular  Rs. {regularprice}</label>

            <input type="radio" value="Medium" id="med"
              onChange={handlenonvegSizeChange} name="pizzasize" />
            <label for="med">Medium  Rs. {mediumprice}</label>

            <input type="radio" value="Large" id="large"
              onChange={handlenonvegSizeChange} name="pizzasize" />
            <label for="large">Large  Rs. {largeprice}</label>

            <p> Your Selection and its cost : {props.choice} {nonvegsizeState}  Rs.{nonvegpizzaPrice} </p>

    </div>
    )
}

export default NonvegPizzaSize;