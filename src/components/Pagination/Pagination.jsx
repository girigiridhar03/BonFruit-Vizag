import React from "react";
import {
  HStack,
  Button,
  IconButton,
  Box
} from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/**
 * Generates an array of page numbers to display, including possible ellipses.
 * Example: currentPage=3, totalPages=24 => [1, 2, 3, 4, 5, "...", 24]
 */
const getPageNumbers = (currentPage, totalPages) => {
  const pages = [];
  const maxVisible = 5; // how many numeric buttons to show (excluding ellipses)

  // If total pages is small, show all
  if (totalPages <= maxVisible) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Always show the first page
  pages.push(1);

  // Determine start and end of page range around currentPage
  let start = Math.max(2, currentPage - 1);
  let end = Math.min(totalPages - 1, currentPage + 1);

  // If current page is near the start
  if (currentPage <= 2) {
    end = 4;
  }
  // If current page is near the end
  if (currentPage >= totalPages - 1) {
    start = totalPages - 3;
  }

  // Add ellipses if needed
  if (start > 2) {
    pages.push("...");
  }

  // Add pages between start and end
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Add ellipses if needed
  if (end < totalPages - 1) {
    pages.push("...");
  }

  // Always show the last page
  pages.push(totalPages);

  return pages;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  highlightColor = "orange.500",
  inactiveBg = "gray.100",
  inactiveText = "gray.800"
}) => {
  // Build the array of pages (and possibly "...") to render
  const pagesToShow = getPageNumbers(currentPage, totalPages);

  // Handle arrow buttons
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // Common button box size
  const boxSize = "40px"; // Adjust as needed for bigger/smaller squares

  return (
    <HStack spacing="8px">
      {/* Previous Button */}
      <IconButton
        aria-label="Previous Page"
        icon={<FiChevronLeft />}
        onClick={handlePrev}
        isDisabled={currentPage === 1}
        borderRadius="8px"
        variant="ghost"
        w={boxSize}
        h={boxSize}
        _disabled={{
          bg: inactiveBg,
          cursor: "not-allowed"
        }}
      />

      {/* Page Number Buttons */}
      {pagesToShow.map((page, idx) =>
        page === "..." ? (
          <Box
            key={idx}
            w={boxSize}
            h={boxSize}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            color="gray.500"
          >
            ...
          </Box>
        ) : (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            borderRadius="8px"
            w={boxSize}
            h={boxSize}
            bg={page === currentPage ? highlightColor : "white"}
            color={page === currentPage ? "white" : inactiveText}
            _hover={{
              bg: page === currentPage ? highlightColor : inactiveBg
            }}
          >
            {page}
          </Button>
        )
      )}

      {/* Next Button */}
      <IconButton
        aria-label="Next Page"
        icon={<FiChevronRight />}
        onClick={handleNext}
        isDisabled={currentPage === totalPages}
        borderRadius="8px"
        variant="ghost"
        w={boxSize}
        h={boxSize}
        _disabled={{
          bg: inactiveBg,
          cursor: "not-allowed"
        }}
      />
    </HStack>
  );
};

export default Pagination;
