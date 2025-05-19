import { t } from "i18next";
import { FaTrashAlt } from "react-icons/fa";

type PainRecordTableProps = {
  records: { id: string; date: string; level: number }[];
  deleteRecords: (id: string) => void;
};
const PainRecordsTable = ({ records, deleteRecords }: PainRecordTableProps) => {
  if (!records || records.length === 0) {
    return (
      <p className="text-2xl text-center text-white-900 font-semibold mt-8">
        No records available.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full rounded-xl shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-purple-900 text-white-900 text-lg ">
            <th className="py-3 px-2 font-bold">#</th>
            <th className="py-3 px-2 font-bold">
              {t("pain_record.table.header.date")}
            </th>
            <th className="py-3 px-2 font-bold">
              {t("pain_record.table.header.pain_level")}
            </th>
            <th className="py-3 px-2 font-bold">
              {t("pain_record.table.header.delete")}
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr
              key={record.id}
              className={`text-center ${
                index % 2 === 0
                  ? "bg-purple-500 text-white"
                  : "bg-white text-purple-900"
              }`}
            >
              <td className="py-2 px-2">{index + 1}</td>
              <td className="py-2 px-2">
                {new Date(record.date).toLocaleDateString()}
              </td>
              <td className="py-2 px-2 font-bold text-lg">{record.level}</td>
              <td className="py-2 px-2">
                <button
                  onClick={() => deleteRecords(record.id)}
                  className="text-red-600 hover:text-red-800 transition-colors duration-200 p-2 rounded-full hover:bg-red-100"
                  aria-label={t("pain_record.table.header.delete")}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PainRecordsTable;
