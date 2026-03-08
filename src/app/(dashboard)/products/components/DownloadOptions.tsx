"use client";
import React, { useState } from "react";

const DownloadOptions: React.FC = () => {
  const [option, setOption] = useState("");

  const handleOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
  ) => {
    setOption(e.target.value);
  };

  return (
    <select
      value={option}
      onChange={handleOptionChange}
      className="outline outline-gray-500 rounded-md p-2 focus-within:ring-2 focus-within:ring-foreground focus-within:outline-offset-4 w-full"
    >
      <option value="" disabled>
        -- Choose Download Formate --
      </option>
      <option value="pdf">PDF</option>
      <option value="xlsx">XLSX</option>
    </select>
  );
};

export default DownloadOptions;
