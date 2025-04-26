import { PainRecord } from "../types/PainRecord";

const exportToCSV = (records: PainRecord[]) => {
  const csvData = records.map((record, index) => ({
    "#": index + 1,
    Date: new Date(record.date).toLocaleDateString(),
    Level: record.level,
  }));

  const csvHeaders = Object.keys(csvData[0]).join(",");
  const csvRows = csvData.map((record) => Object.values(record).join(","));
  const csvFile = [csvHeaders, ...csvRows].join("\n");

  return csvFile;
};

export { exportToCSV };
