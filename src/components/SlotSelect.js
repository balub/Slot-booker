import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import VehicleCard from "./VehicleCard";
import { GetVehicles } from "../service";
import moment from "moment";

function SlotSelect({ location }) {
  let doc_data = location.state.doc_data;
  let month = location.state.month;
  console.log(month);
  const [vehicleNos, setVehicleNos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let result = await GetVehicles(month, doc_data.doc_id);
      setVehicleNos(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      {vehicleNos.map((item) => {
        return (
          <VehicleCard
            data={item}
            docData={doc_data}
            key={item.doc_id}
            month={month}
          />
        );
      })}
    </div>
  );
}

export default SlotSelect;
