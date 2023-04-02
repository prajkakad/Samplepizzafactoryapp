import React, {useState} from "react";

const Crust = () => {
    const[selectedCrust, setselectedCrust] = useState('New hand tossed')

    const handleCrustchange = (e) => {
        setselectedCrust(e.target.value);
    }
    return(
    <div>
        <h2>Select Tyoe of Crust</h2>

        <select onChange={handleCrustchange} value={selectedCrust}>
            <option value='New hand tossed'> New hand tossed </option>
            <option value='Wheat thin crust'> Wheat thin crust </option>
            <option value='Cheese burst'> Cheese burst </option>
            <option value='Fresh pan pizza'> Fresh pan pizza </option>
        </select>

        <p><b>Your Crust Selection: {selectedCrust}</b></p>
    </div>
    )
}

export default Crust