import { t } from "i18next";
import DatePickerWithLabel from "../common/DatePickerWithLabel";

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
      <DatePickerWithLabel
        value={fromDate}
        setValue={setFromDate}
        label={t("input.date_from")}
      />
      <DatePickerWithLabel
        value={toDate}
        setValue={setToDate}
        label={t("input.date_to")}
      />
    </div>
  );
};

export default DateRangePicker;
