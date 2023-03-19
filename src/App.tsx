import { useState } from "react";
import CSVReader from "react-csv-reader";
import "handsontable/dist/handsontable.full.min.css";
// import Handsontable from "handsontable/base";
import { registerAllModules } from "handsontable/registry";
import { HotTable } from "@handsontable/react";

const App = () => {
  registerAllModules();
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = (data: any, fileInfo: any) => {
    setCsvData(data);
  };

  return (
    <>
      <div className="container mx-auto py-10">
        <CSVReader onFileLoaded={handleFileUpload} />
        {/* <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Column 1</th>
              <th className="border p-2">Column 2</th>
              <th className="border p-2">Column 3</th>
              <th className="border p-2">Column 3</th>
              <th className="border p-2">Column 3</th>
              <th className="border p-2">Column 3</th>
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, i) => (
              <tr key={i}>
                <td className="border p-2">{row[0]}</td>
                <td className="border p-2">{row[1]}</td>
                <td className="border p-2">{row[2]}</td>
                <td className="border p-2">{row[3]}</td>
                <td className="border p-2">{row[4]}</td>
                <td className="border p-2">{row[5]}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <HotTable
          data={csvData}
          rowHeaders={true}
          colHeaders={true}
          height="auto"
          licenseKey="non-commercial-and-evaluation" // for non-commercial use only
        />
      </div>
    </>
  );
};

export default App;
