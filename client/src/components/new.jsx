import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useEffect, useRef, useState } from "react";
import styles from "./transaction.module.css";

type Props = {
  selected: ServicesProps;
  setSelected: React.Dispatch<React.SetStateAction<ServicesProps>>;
  reset: () => void; // Added reset function to reset the selected service when drawer is closed
};

export default function ServicesTab({ selected, setSelected, reset }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // Ref with HTMLDivElement type

  // Function to scroll to the next item
  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const itemWidth = container?.firstElementChild?.clientWidth; // Added null check for firstElementChild

      if (itemWidth !== undefined) {
        // Added check for itemWidth
        container.scrollBy({
          left: containerWidth - itemWidth, // the last item becomes the first item in the new sets after scroll
          behavior: "smooth",
        });
      }
    }
  };

  // Function to scroll to the previous item
  const handlePrevClick = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const itemWidth = container?.firstElementChild?.clientWidth; // Added null check for firstElementChild

      if (itemWidth) {
        // Added check for itemWidth
        container.scrollBy({
          left: -(containerWidth - itemWidth), // the first item becomes the last item in the new sets after scroll
          behavior: "smooth",
        });
      }
    }
  };

  // Function to scroll the clicked item into view
  const scrollToItem = (index: number) => {
    setSelected(services[index]);
    reset();

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const item = container.children[index] as HTMLElement;
      if (item) {
        item.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const [showPrev, setShowPrev] = useState<boolean>(false); // Control visibility of "Previous" button
  const [showNext, setShowNext] = useState<boolean>(true); // Control visibility of "Next" button

  // Scroll event listener to show/hide buttons
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef?.current;
      const offset = container?.firstElementChild?.clientWidth || 0;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const scrollLeft = container.scrollLeft;

      setShowPrev(scrollLeft > offset); // Show "Previous" if scroll is not at the start
      setShowNext(scrollLeft + 8 < maxScrollLeft); // Show "Next" if scroll is not at the end
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check for buttons visibility
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative w-full flex gap-5 mt-5">
      {showPrev && (
        <div
          onClick={handlePrevClick}
          className="absolute shadow mt-2 z-50 left-[-30px] border flex items-center rounded h-[33px] cursor-pointer hover:opacity-50"
        >
          <KeyboardArrowLeftIcon />
        </div>
      )}
      <div
        className={--scroll gap-5 overflow-x-scroll flex flex-nowrap p-2 ${styles.snapContainer}}
        ref={scrollContainerRef}
      >
        {services.map((service: ServicesProps, indx: number) => {
          const isActive: boolean = selected?.id === service?.id;
          return (
            <div
              key={indx}
              className={`gap-5 text-nowrap border hover:shadow cursor-pointer rounded-md px-2 py-2 flex items-center ${
                isActive && "border-black border-[1.5px] font-semibold"
              } ${styles.snapItem}`}
              onClick={() => scrollToItem(indx)}
            >
              <p className="text-xs capitalize">{service?.name}</p>

              {isActive && <CheckIcon className="text-lg" />}
            </div>
          );
        })}
      </div>
      {showNext && (
        <div
          onClick={handleNextClick}
          className="absolute z-50 shadow mt-2 right-[-30px] border flex items-center rounded h-[33px] cursor-pointer hover:opacity-50"
        >
          <KeyboardArrowRightIcon />
        </div>
      )}
    </div>
  );
}