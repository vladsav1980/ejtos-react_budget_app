import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [currency, setCurrency] = useState('$');

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    }

    const selectStyle = {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#f1f1f1',
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            <label for="currency">Currency:</label>
            <select id="currency" name="currency" onChange={handleCurrencyChange} style={selectStyle}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Budget;
