import { t } from "i18next";
import SubmitButton from "../common/SubmitButton";

type PainLevelRecorderProps = {
  painLevel: number;
  submit: () => void;
};
const SubmitPainRecordButton = ({
  submit,
  painLevel,
}: PainLevelRecorderProps) => {
  if (painLevel <= 0) return null;
  return <SubmitButton onClick={submit} label={t("button.submit")} />;
};

export default SubmitPainRecordButton;
