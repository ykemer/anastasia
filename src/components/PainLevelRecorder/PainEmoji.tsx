type PainEmojiProps = {
  level: number;
};

const PainEmoji = ({ level }: PainEmojiProps) => {
  const emojis: Record<string, string> = {
    0: "😄",
    1: "😐",
    2: "😟",
    3: "😣",
    4: "😖",
    5: "😩",
    6: "😫",
    7: "🤕",
    8: "😭",
    9: "😨",
    10: "🤯",
  };

  if (level < 0 || level > 10) {
    return null;
  }

  return <span className="text-5xl p-3">{emojis[level]}</span>;
};

export default PainEmoji;
