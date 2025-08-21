import { Loader2 } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex-1 flex items-center justify-center h-full self-center">
      <Loader2 className="animate-spin size-12" />
    </div>
  );
};

export { Spinner };
