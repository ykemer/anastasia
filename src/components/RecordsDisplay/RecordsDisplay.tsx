import { useState } from "react";
import { useData } from "../../context/DataContext"; // Import useData
import "./RecordsDisplay.css"; // Import the CSS file

const RecordsDisplay = () => {
  const { records } = useData(); // Use the useData hook
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredRecords = records.filter((record) => {
    const recordDate = new Date(record.date);
    return recordDate >= new Date(fromDate) && recordDate <= new Date(toDate);
  });

  return (
    <div>
      <h2>Records Display</h2>
      <div className="date-input-container">
        <label>
          From:
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </label>
        <label>
          To:
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </label>
      </div>
      <table className="records-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Pain Level</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record, index) => (
            <tr key={record.id}>
              <td>{index + 1}</td>
              <td>{new Date(record.date).toLocaleDateString()}</td>
              <td>{record.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredRecords.length === 0 && (
        <p>No records found for the selected date range.</p>
      )}
    </div>
  );
};

export default RecordsDisplay;
