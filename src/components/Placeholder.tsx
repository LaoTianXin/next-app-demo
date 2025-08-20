import { ShieldAlert } from "lucide-react";
import { cloneElement } from "react";

type Placeholder = {
  title: string;
  icon?: React.ReactElement<HTMLElement>;
  button?: React.ReactElement<HTMLElement>;
};

const Placeholder = ({
  title,
  icon = <ShieldAlert />,
  button,
}: Placeholder) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full gap-y-3">
      <div className="flex flex-col items-center justify-center">
        {cloneElement(icon, { className: "size-12" })}
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      {button && (
        <div className="flex flex-col items-center justify-center">
          {cloneElement(button, { className: "h-12" })}
        </div>
      )}
    </div>
  );
};

export { Placeholder };
