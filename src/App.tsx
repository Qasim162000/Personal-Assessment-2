import React from "react";

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center underline mt-8">
        Hello world!
      </h1>
    </>
  );
};
