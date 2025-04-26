import { t } from "i18next";

type DateRangePickerProps = {
  fromDate: string;
  toDate: string;
  setFromDate: (date: string) => void;
  setToDate: (date: string) => void;
};

const DateRangePicker = ({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}: DateRangePickerProps) => {
  return (
    <>
      <div className="date-input-container">
        <label className="date-picker-label">{t("input.date_from")}:</label>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>
      <div className="date-input-container">
        <label className="date-picker-label">{t("input.date_to")}:</label>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>
    </>
  );
};

export default DateRangePicker;
