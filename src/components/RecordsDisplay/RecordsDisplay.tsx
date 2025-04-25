import { useState } from "react";
import { useData } from "../../context/DataContext";
import "./RecordsDisplay.css";
import PainRecordsTable from "./PainRecordsTable";
import DateRangePicker from "./DateRangePicker";

const RecordsDisplay = () => {
  const { records, deleteRecord } = useData();
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
    const csvData = filteredRecords.map((record, index) => ({
      "#": index + 1,
      Date: new Date(record.date).toLocaleDateString(),
      "Pain Level": record.level,
    }));

    const csvHeaders = Object.keys(csvData[0]).join(",");
    const csvRows = csvData.map((record) => Object.values(record).join(","));
    const csvFile = [csvHeaders, ...csvRows].join("\n");

    return csvFile;
  };

  const deleteRecords = (id: string) => {
    deleteRecord(id);
  };

  const shareData = async () => {
    if (navigator.share) {
      try {
        const csvFile = exportToCSV();
        const blob = new Blob([csvFile], { type: "text/csv" });
        const filesArray = [
          new File([blob], "pain_records.csv", {
            type: "text/csv",
          }),
        ];
        const shareData = {
          title: "Pain Tracker Records",
          text: "Check out my pain records!",
          files: filesArray,
        };
        await navigator.share(shareData);
        console.log("Shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div>
      <h2>Records Display</h2>
      <DateRangePicker
        fromDate={fromDate}
        toDate={toDate}
        setFromDate={setFromDate}
        setToDate={setToDate}
      />
      <PainRecordsTable
        records={filteredRecords}
        deleteRecords={deleteRecords}
      />
      {filteredRecords.length > 0 && (
        <div>
          <button onClick={shareData} className="share-button">
            Share CSV
          </button>
        </div>
      )}
    </div>
  );
};

export default RecordsDisplay;
