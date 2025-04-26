import { t } from "i18next";
import { FaTrashAlt } from "react-icons/fa";

type PainRecordTableProps = {
  records: { id: string; date: string; level: number }[];
  deleteRecords: (id: string) => void;
};
const PainRecordsTable = ({ records, deleteRecords }: PainRecordTableProps) => {
  if (!records || records.length === 0) {
    return <p>No records available.</p>;
  }

  return (
    <table className="records-table">
      <thead>
        <tr>
          <th>#</th>
          <th>{t("pain_record.table.header.date")}</th>
          <th>{t("pain_record.table.header.pain_level")}</th>
          <th>{t("pain_record.table.header.delete")}</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
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
  );
};

export default PainRecordsTable;
