import { useState } from "react";
import CSVReader from "react-csv-reader";
import { HyperFormula } from "hyperformula";
import "handsontable/dist/handsontable.full.min.css";
import { registerAllModules } from "handsontable/registry";
import { HotTable } from "@handsontable/react";
import { Navbar } from "./components/Navbar";
import "./styles.css";
import MyPieChart from "./MyPieChart";

const App = () => {
  registerAllModules();

  //To store the data in a variable using useState
  const [csvData, setCsvData] = useState<any>([]);

  const handleFileUpload = (data: any, fileInfo: any) => {
    setCsvData(data);
  };

  //Shows sum in the Second Last Row
  const sumSecondLastRow = [
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
    "6",
  ];

  //Shows Percentage in the Second Last Row
  let PercentageLastRow: any = [
    "",
    "=ROUND(B9/G9*100,2)",
    "=ROUND(C9/G9*100,2)",
    "=ROUND(D9/G9*100,2)",
    "=ROUND(E9/G9*100,2)",
    "=ROUND(F9/G9*100,2)",
    "",
    "=ROUND(H9/J9*100,2)",
    "=ROUND(I9/J9*100,2)",
    "",
    "",
    "=ROUND(4/6*100,2)",
  ];

  //A new variable to concat the whole data together
  const newData = [...csvData.slice(0, 8), sumSecondLastRow, PercentageLastRow];

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 text-center">
        {/* To Display Data in a piechart*/}
        <MyPieChart value1={98} value2={2} />
        {/* PieChart to Display Data */}
        <CSVReader onFileLoaded={handleFileUpload} />
        {csvData.length === 0 ? (
          <h1 className="mt-4 font-bold">
            Submit a CSV File above to be Mapped across the table
          </h1>
        ) : (
          <div className="mt-4 mx-auto">
            {/* Table Instance to display data */}
            <HotTable
              data={newData}
              formulas={{
                engine: HyperFormula,
              }}
              cell={[
                { row: 9, col: 7, className: "custom-cell-one" },
                { row: 9, col: 8, className: "custom-cell-two" },
              ]}
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
            ></HotTable>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
