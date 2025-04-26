import { t } from "i18next";
import { exportToCSV } from "../../infrastructure/services/export-to-csv";
import { PainRecord } from "../../infrastructure/types/PainRecord";

type ShareCsvProps = {
  records: PainRecord[]; // Replace 'any' with the actual type of your records
};

const ShareCsv = ({ records }: ShareCsvProps) => {
  const shareData = async () => {
    if (navigator.share) {
      try {
        const csvFile = exportToCSV(records);
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

  if (records.length === 0) {
    return null;
  }

  return (
    <div>
      <button onClick={shareData} className="share-button">
        {t("button.share_csv")}
      </button>
    </div>
  );
};

export default ShareCsv;
