import React from "react";
import UploadComponent from "./UploadComponent";
import TableComponent from "./TableComponent";

const UploadExcel = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Excel File Upload & Display</h2>

      <UploadComponent />
      <TableComponent />
    </div>
  );
};

export default UploadExcel;
