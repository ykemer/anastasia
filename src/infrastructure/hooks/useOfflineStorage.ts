import { PainRecord } from "../types/PainRecord";

interface OfflineStorageHookResult {
  saveData: (data: PainRecord[]) => void;
  getData: () => PainRecord[];
}

export const useOfflineStorage = (): OfflineStorageHookResult => {
  const saveData = (newData: PainRecord[]) => {
    localStorage.setItem("pain_records", JSON.stringify(newData));
  };

  const getData = (): PainRecord[] => {
    const storedData = localStorage.getItem("pain_records");
    return storedData ? JSON.parse(storedData) : [];
  };

  return { saveData, getData };
};
