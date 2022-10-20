import React from "react";
import PendingTable from "components/pendingTable";

function LocationPage() {

  return (
    <>
      <main className="overflow-auto mt-20">
        <div className="max-w-7xl mx-auto py-2 sm:px-6 lg:px-8 overflow-auto">
          <div className="px-4 py-2 sm:px-0 mt-5">
            <PendingTable />
          </div>
        </div>
      </main>
    </>
  );
}

export default LocationPage;
