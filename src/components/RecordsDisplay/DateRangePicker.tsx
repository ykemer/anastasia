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
    <div className="flex flex-col gap-4 w-full px-2 mb-10">
      <div className="flex flex-col">
        <label className="mb-2 text-white-900 font-semibold text-lg">
          {t("input.date_from")}:
        </label>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="rounded-xl border-2 border-purple-900 bg-purple-50 text-purple-900 px-4 py-3 text-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-white-900 font-semibold text-lg">
          {t("input.date_to")}:
        </label>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="rounded-xl border-2 border-purple-900 bg-purple-50 text-purple-900 px-4 py-3 text-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
