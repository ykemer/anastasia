type DatePickerWithLabelProps = {
  value: string;
  label: string;
  setValue: (value: string) => void;
};

const DatePickerWithLabel = ({
  value,
  setValue,
  label,
}: DatePickerWithLabelProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-white-900 font-semibold text-lg">
        {label}:
      </label>
      <input
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded-xl border-2 border-purple-900 bg-purple-50 text-purple-900 px-4 py-3 text-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
      />
    </div>
  );
};

export default DatePickerWithLabel;
