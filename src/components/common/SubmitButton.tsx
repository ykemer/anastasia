type ButtonProps = {
  label: string;
  onClick: () => void;
};

const SubmitButton = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="mt-15 px-8 py-4 rounded-full
                  bg-purple-900 text-white-900 font-bold text-xl
                  shadow-lg border-4 border-purple-900
                  transition-colors duration-200
                  hover:bg-purple-800 hover:border-purple-800
                  active:bg-purple-600 active:border-purple-600
                  focus:outline-none focus:ring-4 focus:ring-purple-300 mb-0 sm:mb-10"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
