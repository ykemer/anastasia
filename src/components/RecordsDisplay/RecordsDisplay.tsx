import { useState } from "react";
import { useData } from "../../context/DataContext"; // Import useData
import "./RecordsDisplay.css"; // Import the CSS file
import { FaTrashAlt } from "react-icons/fa";

const RecordsDisplay = () => {
  const { records, deleteRecord } = useData(); // Use the useData hook
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredRecords = records.filter((record) => {
    const recordDate = new Date(record.date);

    const startDate = new Date(fromDate);
    startDate.setHours(0, 0, 0, 0); // Set start time to 00:00:00
    const endDate = new Date(toDate);
    endDate.setHours(23, 59, 59, 999); // Set end

    return recordDate >= startDate && recordDate <= endDate;
  });

  const exportToCSV = () => {
    // Implementation will be added here
    const csvRows = [];
    const headers = ["ID", "Date", "Pain Level"];
    csvRows.push(headers.join(","));

    filteredRecords.forEach((record) => {
      const values = [record.id, record.date, record.level];
      csvRows.push(values.join(","));
    });

    const csvString = csvRows.join("\n");

    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "pain_records.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const deleteRecords = (id: string) => {
    deleteRecord(id);
  };

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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record, index) => (
            <tr key={record.id}>
              <td>{index + 1}</td>
              <td>{new Date(record.date).toLocaleDateString()}</td>
              <td>{record.level}</td>
              <td>
                <button onClick={() => deleteRecords(record.id)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredRecords.length === 0 && (
        <p>No records found for the selected date range.</p>
      )}
      {filteredRecords.length > 0 && (
        <button onClick={exportToCSV} className="export-button">
          Export to CSV
        </button>
      )}
    </div>
  );
};

export default RecordsDisplay;
