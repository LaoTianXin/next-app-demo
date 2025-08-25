import { Separator } from "./ui/separator";

const Heading = ({
  title,
  description,
  rightSlot,
}: {
  title: string;
  description?: string;
  rightSlot?: React.ReactNode;
}) => {
  return (
    <>
      <div className="flex justify-between px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          {description && (
            <p className="text-muted-foreground mt-2">{description}</p>
          )}
        </div>
        {rightSlot}
      </div>
      <Separator></Separator>
    </>
  );
};

export { Heading };
