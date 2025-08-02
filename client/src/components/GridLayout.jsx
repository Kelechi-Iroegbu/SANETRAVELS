import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GridLayout = () => {
  const scrollContainerRef = useRef(null); // Ref with HTMLDivElement type
  const columns = 30;
  const firstRowHeight = 112;
  const otherRowsHeight = 72;
  const boxWidth = 141.67;

  const handleNextClick = () => {
    if (scrollContainerRef.current) {                                   //// to check binding
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
  const scrollToItem = (index) => {
    // setSelected(services[index]);
    reset();

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const item = container.children[index];
      if (item) {
        item.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const [showPrev, setShowPrev] = useState(false); // Control visibility of "Previous" button
  const [showNext, setShowNext] = useState(true); // Control visibility of "Next" button

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
    <div className="relative flex gap-5 mt-5 max-w-[1000px]">
      {/* {showPrev && ( */}
      <div
        onClick={handlePrevClick}
        className="absolute shadow mt-2 z-50 right-2 top-10 border flex items-center rounded h-[33px] cursor-pointer hover:opacity-50"
      >
        {/* <KeyboardArrowLeftIcon /> */}
        <ChevronRight className=" border rounded-full text-white bg-red-400 hover:bg-red-500 transition duration-300 cursor-pointer" />
      </div>
      {/* )} */}
      <div
        className="--scroll gap-5 overflow-x-scroll flex p-2"
        ref={scrollContainerRef}
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {/* <div className="w-full relative"> */}
        {/* First Row */}
        {/* <div className="flex gap-5  w-full"> */}
        {[...Array(columns)].map((_, idx) => (
          <div className="">
            <div
              onClick={() => scrollToItem(idx)}
              style={{
                scrollSnapAlign: "start",
                width: `${boxWidth}px`,
                height: `${firstRowHeight}px`,
              }}
              className="border bg-white flex justify-center items-center"
            >
              {idx + 1}
            </div>
          </div>
        ))}
        {/* </div> */}

        {/* Other Rows (3 rows) */}
        {/* {[...Array(2)].map((_, rowIndex) => (
        <Grid container key={`row-${rowIndex + 2}`}>
          {[...Array(columns)].map((_, colIndex) => (
            <Grid item key={`row${rowIndex + 2}-col${colIndex}`} xs>
              <div
                style={{
                  width: `${boxWidth}px`,
                  height: `${otherRowsHeight}px`,
                }}
                className="border bg-white"
              />
            </Grid>
          ))}
        </Grid>
      ))} */}
      </div>
      {/* {showNext && ( */}
      <div
        onClick={handleNextClick}
        className="absolute left-2 top-10 z-50 shadow mt-2 border flex items-center rounded h-[33px] cursor-pointer hover:opacity-50"
      >
        <ChevronLeft className="border rounded-full text-white bg-red-400 hover:bg-red-500 transition duration-300 cursor-pointer" />
        {/* <KeyboardArrowRightIcon /> */}
      </div>
      {/* )} */}
    </div>
  );
};

export default GridLayout;
