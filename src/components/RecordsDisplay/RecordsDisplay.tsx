import { useState } from "react";
import { useData } from "../../infrastructure/context/DataContext";
import PainRecordsTable from "./PainRecordsTable";
import DateRangePicker from "./DateRangePicker";
import { useTranslation } from "react-i18next";
import ShareCsv from "./ShareCsv";

const RecordsDisplay = () => {
  const { t } = useTranslation("pain_record");
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

  const deleteRecords = (id: string) => {
    deleteRecord(id);
  };

  return (
    <div className="container mx-auto flex flex-col">
      <h2 className="text-4xl text-white text-center">
        {t("menu.display_records")}
      </h2>
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
      <ShareCsv records={filteredRecords} />
    </div>
  );
};

export default RecordsDisplay;
