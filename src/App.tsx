import { useState } from "react";
import CSVReader from "react-csv-reader";
import { HyperFormula } from "hyperformula";
import "handsontable/dist/handsontable.full.min.css";
import { registerAllModules } from "handsontable/registry";
import { HotTable } from "@handsontable/react";
import { Navbar } from "./components/Navbar";

const App = () => {
  registerAllModules();
  const [csvData, setCsvData] = useState<any>([]);

  const handleFileUpload = (data: any, fileInfo: any) => {
    setCsvData(data);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10">
        <CSVReader onFileLoaded={handleFileUpload} />
        {csvData.length === 0 ? (
          <h1 className="mt-4 font-bold">
            Submit a CSV File above to be Mapped across the table
          </h1>
        ) : (
          <div className="mt-4 mx-auto">
            <HotTable
              data={[
                ...csvData,
                [
                  "",
                  "=SUM(B3:B8)",
                  "=SUM(C3:C8)",
                  "=SUM(D3:D8)",
                  "=SUM(E3:E8)",
                  "=SUM(F3:F8)",
                  "=SUM(G3:G8)",
                  "=SUM(H3:H8)",
                  "=SUM(I3:I8)",
                  "=SUM(J3:J8)",
                  "=SUM(K3:K8)",
                  "",
                ],
              ]}
              formulas={{
                engine: HyperFormula,
              }}
              contextMenu={true}
              rowHeaders={true}
              colHeaders={true}
              height="auto"
              fixedRowsBottom={1}
              customBorders={true}
              dropdownMenu={true}
              multiColumnSorting={true}
              manualRowMove={true}
              licenseKey="non-commercial-and-evaluation"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
