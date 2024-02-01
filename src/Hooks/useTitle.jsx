import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `  ${title}-Booking-show`;
  }, [title]);
};

export default useTitle;
