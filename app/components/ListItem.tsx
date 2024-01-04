import { FaCheckCircle } from "react-icons/fa";

type Props = {
  text: string;
  bold?: boolean;
};

export const ListItem = ({ bold = false, text }: Props) => {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-2">
      <FaCheckCircle className="text-2xl text-brand" />
      <span className={bold ? "font-bold" : ""}>{text}</span>
    </div>
  );
};
