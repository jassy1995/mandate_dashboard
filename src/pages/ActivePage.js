import React from "react";
import ActiveTable from "components/activeTable";


function ActivePage() {
 



  // const next_function = async () => {
  //   if (!!phone && !!start_time && !!end_time) {
  //     dispatch({
  //       type: "INCREASE_START_FILTER_LOCATION",
  //       payload: start_filter_location + 10,
  //     });
  //   } else if (!!phone2 && !!period) {
  //     dispatch({
  //       type: "INCREASE_START_FILTER_PERIOD",
  //       payload: start_filter_period + 10,
  //     });
  //   } else {
  //     dispatch({
  //       type: "INCREASE_START_GROUP_LOCATION",
  //       payload: start_group_location + 10,
  //     });
  //   }
  // };

  // const pre_function = async () => {
  //   if ((!!phone && !!start_time, !!end_time)) {
  //     dispatch({
  //       type: "REDUCE_START_FILTER_LOCATION",
  //       payload: start_filter_location - 10,
  //     });
  //   } else if (!!phone2 && !!period) {
  //     dispatch({
  //       type: "REDUCE_START_FILTER_PERIOD",
  //       payload: start_filter_period - 10,
  //     });
  //   } else {
  //     dispatch({
  //       type: "REDUCE_START_GROUP_LOCATION",
  //       payload: start_group_location - 10,
  //     });
  //   }
  // };
 

  return (
    <>
      <main className="overflow-auto mt-20">
        <div className="max-w-7xl mx-auto py-2 sm:px-6 lg:px-8 overflow-auto">
          <div className="px-4 py-2 sm:px-0 mt-5">
            <ActiveTable/>
            {/* {!loading && locations.length > 0 && (
              <div className="flex justify-end  mb-2 pr-5 ">
                <button
                  onClick={pre_function}
                  className="border text-myColor font-bold py-2 px-2 mr-3 disabled:opacity-75 disabled:cursor-not-allowed"
                  disabled={
                    start_group_location <= 0 && start_filter_location <= 0 && start_filter_period <= 0
                  }
                >
                  Previous
                </button>
                <button
                  onClick={next_function}
                  className="border text-myColor font-bold  py-2 px-2  disabled:opacity-75 disabled:cursor-not-allowed"
                  disabled={locations.length < 10}
                >
                  Next
                </button>
              </div>
            )} */}
          </div>
        </div>
      </main>
    </>
  );
}

export default ActivePage;
