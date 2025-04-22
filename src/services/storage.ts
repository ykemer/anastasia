import { PainRecord } from "../types/PainRecord";

const STORAGE_KEY = "pain_records";

export const saveRecord = (record: PainRecord) => {
  const records = getRecords();
  records.push(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
};

export const getRecords = (): PainRecord[] => {
  const records = localStorage.getItem(STORAGE_KEY);
  return records ? JSON.parse(records) : [];
};

export const deleteRecords = () => {
  localStorage.removeItem(STORAGE_KEY);
};
