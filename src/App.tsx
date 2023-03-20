import { useState } from "react";
import CSVReader from "react-csv-reader";
import { HyperFormula } from "hyperformula";
import "handsontable/dist/handsontable.full.min.css";
import { registerAllModules } from "handsontable/registry";
import { HotTable, HotColumn } from "@handsontable/react";
import { Navbar } from "./components/Navbar";
import "./styles.css";
import MyPieChart from "./MyPieChart";

const App = () => {
  registerAllModules();
  const [csvData, setCsvData] = useState<any>([]);

  const handleFileUpload = (data: any, fileInfo: any) => {
    setCsvData(data);
  };
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
  // =B9/G9
  const PercentageLastRow = [
    "",
    "=ROUND(B10/G10*100)",
    "=ROUND(C10/G10*100)",
    "=ROUND(D10/G10*100)",
    "=ROUND(E10/G10*100)",
    "=ROUND(F10/G10*100)",
  ];

  const newData = [...csvData, sumSecondLastRow, PercentageLastRow];

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 text-center">
        <MyPieChart value1={50} value2={50} />
        <CSVReader onFileLoaded={handleFileUpload} />
        {csvData.length === 0 ? (
          <h1 className="mt-4 font-bold">
            Submit a CSV File above to be Mapped across the table
          </h1>
        ) : (
          <div className="mt-4 mx-auto">
            <HotTable
              data={newData}
              formulas={{
                engine: HyperFormula,
              }}
              cell={[
                { row: 9, col: 7, className: "custom-cell-one" },
                { row: 9, col: 8, className: "custom-cell-two" },
                // { row: 9, col: 9, className: "custom-cell-three" },
                // { row: 9, col: 8, className: "custom-cell-four" },
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
            >
              <HotColumn data={0} />
              <HotColumn data={1} />
              <HotColumn data={2} />
              <HotColumn data={3} />
              <HotColumn data={4} />
              <HotColumn data={5} />
              <HotColumn data={6} />
              <HotColumn data={7} />
              <HotColumn data={8} />
              <HotColumn data={9} />
              <HotColumn data={10} />
              <HotColumn data={11} />
            </HotTable>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
