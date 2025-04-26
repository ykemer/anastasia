import { t } from "i18next";

type PainLevelRecorderProps = {
  painLevel: number;
  submit: () => void;
};
const SubmitPainRecordButton = ({
  submit,
  painLevel,
}: PainLevelRecorderProps) => {
  if (painLevel <= 0) return null;
  return (
    <button type="submit" className="submit-button" onClick={submit}>
      {t("button.submit")}
    </button>
  );
};

export default SubmitPainRecordButton;
