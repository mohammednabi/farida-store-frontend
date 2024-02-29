import React from "react";
import { FaCheck } from "react-icons/fa";
const ReviewSendedSuccesfuly = () => {
  return (
    <div className="bg-emerald-500 text-mainWhite p-3 text-xl flex gap-3 rounded-lg mt-5 items-center">
      <FaCheck />
      <h1>
        Your rating has been sent successfully, your review is awaiting approval
      </h1>
    </div>
  );
};

export default ReviewSendedSuccesfuly;
