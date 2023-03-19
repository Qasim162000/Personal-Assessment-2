import React from "react";
import { Grid } from "./components/Grid";

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center underline mt-8">
        Pie Graph here
      </h1>
      <Grid />
    </>
  );
};
