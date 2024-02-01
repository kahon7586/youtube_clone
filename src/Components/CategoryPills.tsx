import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import { useRef, useState } from "react";

interface CategoryPillsProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const CategoryPills = ({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillsProps) => {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const TRANSLATE_LENGTH = 200;

  function handleClickLeft() {
    setTranslate((currTranslate) => {
      const newTranslate = currTranslate - TRANSLATE_LENGTH;
      if (newTranslate <= 0) return 0;
      return newTranslate;
    });
  }

  function handleClickRight() {
    if (containerRef.current === null) return;
    const edge = containerRef.current.scrollWidth;
    // total scrollable width of containter
    const width = containerRef.current.clientWidth;
    // current shown container width on screen
    console.log(edge, width);
    setTranslate((currTranslate) => {
      const newTranslate = currTranslate + TRANSLATE_LENGTH;
      if (newTranslate >= edge - width) {
        // the position of edge - width is the left side when scrollbar reach the end
        return edge - width;
      }
      return newTranslate;
    });
  }

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div
        className="flex h-auto w-[max-content] gap-3 whitespace-nowrap transition-transform"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => {
          return (
            <Button
              className="whitespace-nowrap rounded-lg px-3 py-1 "
              variant={selectedCategory === category ? "dark" : "default"}
              onClick={() => onSelect(category)}
              key={category}
            >
              {category}
            </Button>
          );
        })}
      </div>

      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 h-full w-24 -translate-y-1/2 bg-gradient-to-r from-white from-50% ">
          <Button
            className="aspect-square h-full w-auto p-1.5"
            variant="ghost"
            onClick={handleClickLeft}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}

      {isRightVisible && (
        <div className="absolute right-0 top-1/2 flex h-full w-24 -translate-y-1/2 justify-end bg-gradient-to-l from-white from-50%">
          <Button
            className="aspect-square h-full w-auto p-1.5"
            variant="ghost"
            onClick={handleClickRight}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryPills;
