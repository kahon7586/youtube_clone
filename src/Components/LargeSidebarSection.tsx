import { Children, ReactNode, useState } from "react";
import Button from "./Button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface LargeSidebarSectionProps {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
}

const LargeSidebarSection = ({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const childrenArray = Children.toArray(children).flat();

  const showExpandBtn = childrenArray.length > visibleItemCount;

  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);

  const ExpandedBtnIcon = isExpanded ? ChevronUp : ChevronDown;
  const ExpandedBtnText = isExpanded ? "Show Less" : "Show More";

  return (
    <div>
      {title && <div className="mb-1 ml-4 mt-2 text-lg">{title}</div>}
      {visibleChildren}
      {showExpandBtn && (
        <Button
          className="flex w-full items-center gap-4 rounded-lg p-3"
          variant="ghost"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <ExpandedBtnIcon className="h-6 w-6" />
          <div>{ExpandedBtnText}</div>
        </Button>
      )}
    </div>
  );
};

export default LargeSidebarSection;
