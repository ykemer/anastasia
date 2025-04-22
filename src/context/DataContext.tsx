import { createContext, useContext, useState } from "react";
import { useOfflineStorage } from "../hooks/useOfflineStorage";
import { PainRecord } from "../types/PainRecord"; // Import PainRecord

// Define the context type
interface DataContextType {
  records: PainRecord[];
  addRecord: (newRecord: PainRecord) => void;
  getRecordsByDateRange: (startDate: string, endDate: string) => PainRecord[];
}

// Initialize with a default value that matches the context type
const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const { saveData, getData } = useOfflineStorage();
  const [records, setRecords] = useState<PainRecord[]>(() => {
    try {
      return getData() || [];
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      return []; // Return an empty array as a fallback
    }
  });

  const addRecord = (newRecord: PainRecord) => {
    // Specify PainRecord type
    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    try {
      saveData(updatedRecords);
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
      // Consider displaying an error message to the user
    }
  };

  const getRecordsByDateRange = (startDate: string, endDate: string) => {
    // Specify string type
    return records.filter((record) => {
      const recordDate = new Date(record.date);
      return (
        recordDate >= new Date(startDate) && recordDate <= new Date(endDate)
      );
    });
  };

  return (
    <DataContext.Provider value={{ records, addRecord, getRecordsByDateRange }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext) as DataContextType; // Type assertion here
};
