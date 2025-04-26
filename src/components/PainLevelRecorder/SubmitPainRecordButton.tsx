type PainLevelRecorderProps = {
  painLevel: number;
  submit: () => void;
};
const SubmitPainRecordButton = ({
  submit,
  painLevel,
}: PainLevelRecorderProps) => {
  if (painLevel <= 0) return null; // Don't show the button if pain level is 0
  return (
    <button type="submit" className="submit-button" onClick={submit}>
      Submit
    </button>
  );
};

export default SubmitPainRecordButton;
