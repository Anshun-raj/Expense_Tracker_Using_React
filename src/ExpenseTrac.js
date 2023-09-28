/* eslint-disable no-unused-expressions */
import React, { useState } from "react";

function ExpenseTrac() {
  const [prodtPur, setProdtPur] = useState();
  const [expense, setExpense] = useState(null);
  const [inputArr, setInputArr] = useState([]);
  const [editId, setEditId] = useState();

  const addSummary = (e) => {
    e.preventDefault();
    if (editId) {
      const newSummary = inputArr.map((data) => {
        return data.id === editId ? { id: editId, prodtPur, expense } : data;
      });
      setInputArr(newSummary);
      setEditId(null);
    } else {
      setInputArr([...inputArr, { id: Date.now(), prodtPur, expense }]);
    }
    setProdtPur("");
    setExpense(0);
  };

  const handleDelete = (id) => {
    setInputArr(inputArr.filter((t) => t.id !== id));
  };

  const handleEdit = (t) => {
    setEditId(t.id);
    setProdtPur(t.prodtPur);
    setExpense(t.expense);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Expense Tracker</h1>
      <input
        type="text"
        value={prodtPur}
        placeholder="productPurchased"
        onChange={(e) => setProdtPur(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={expense}
        placeholder="Expense"
        onChange={(e) => setExpense(e.target.value)}
      />
      <br />
      <button onClick={addSummary}>AddOn Summary</button>
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>ProductPurchase</th>
            <th>Expense</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inputArr.map((t) => (
            <tr key={t.id}>
              <td>{t.prodtPur}</td>
              <td>{t.expense}</td>
              <td>
                <button onClick={(e) => handleEdit(t)}>Edit</button>
              </td>
              <td>
                <button onClick={(e) => handleDelete(t.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTrac;
