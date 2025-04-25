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
    <div className="date-input-container">
      <label>
        From:
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </label>
      <label>
        To:
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </label>
    </div>
  );
};

export default DateRangePicker;
