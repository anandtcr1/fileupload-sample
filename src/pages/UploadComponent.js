// UploadComponent.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as XLSX from "xlsx";
import { setExcelData } from "../features/excelSlice";

const UploadComponent = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      const employees = jsonData.map((row) => ({
        id: row[0] !== undefined ? row[0] : "",
        name: row[1] !== undefined ? row[1] : "",
      }));

      dispatch(setExcelData(employees));
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h2>Upload Excel File</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadComponent;
