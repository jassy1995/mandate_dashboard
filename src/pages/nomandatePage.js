import React from "react";
import NomandateTable from "components/nomandateTable";



function NoMandatePage() {

  return (
    <>
      <main className="overflow-auto mt-20">
        <div className="max-w-7xl mx-auto py-2 sm:px-6 lg:px-8 overflow-auto">
          <div className="px-4 py-2 sm:px-0 mt-5">
            <NomandateTable/>
          </div>
        </div>
      </main>
    </>
  );
}

export default NoMandatePage;
