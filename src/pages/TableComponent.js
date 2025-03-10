// TableComponent.js
import React from "react";
import { useSelector } from "react-redux";

const TableComponent = () => {
  const excelData = useSelector((state) => state.excel.employees);

  return (
    <div>
      <h2>Uploaded Data</h2>
      {excelData.length === 0 ? (
        <p>No data available. Please upload a file.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              {Object.keys(excelData[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableComponent;
