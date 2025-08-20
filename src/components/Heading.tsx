import { Separator } from "./ui/separator";

const Heading = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-2">{description}</p>
        )}
      </div>
      <Separator></Separator>
    </>
  );
};

export { Heading };
