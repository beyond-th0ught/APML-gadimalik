import React, { useEffect, useState } from "react";
import axios from "axios";

// IMPORT FUNCTIONS
import {
  kad,
  vec,
  vecNo,
  len,
  vehicleImg,
  makeVehicle,
  AMCCover,
  local,
} from "./gmiFunctions";

export default function Gaadi_Malik_Issue() {
  let [issueData, setIssueData] = useState([]);
  let [vehicleData, setVehicleData] = useState([]);
  let data = [];
  const [open, setOpen] = useState(false);

  // URLS
  const issueUrl = ``;
  ('https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"status.keyword":["Open"]}');

  const vehicleUrl =
    "https://apis.fretron.com/partner-fleet/v2/allVehiclesList/";

  const logoUrl =
    "https://script.google.com/macros/s/AKfycbyzz-dKS85zqH8Hzim81SIm-7wKvvafbAVdPikeL9oc9tumXzqZKWP2k73mYRkF1zmy/exec?action=getUser";

  // AUTH HEADER
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w`,
  };

  useEffect(() => {
    // GET ISSUE DATA
    axios.get(issueUrl, { headers }).then(async (res) => {
      await setIssueData(res.data);
    });

    // GET VEHICLE LIST
    axios.get(vehicleUrl, { headers }).then(async (res) => {
      await setVehicleData(res.data.data);
    });

    axios.get(logoUrl).then((res) => {
      vehicleData = vehicleData.map((vehicle) => ({
        ...vehicleData.find(
          (element) =>
            vehicle.vehicleRegistrationNumber ===
            element.vehicleRegistrationNumber
        ),
        ...vehicle,
      }));

      vehicleData = vehicleData.map((vehicle) => ({
        ...res.data.data.find(
          (element) => vehicle.vehicleRegistrationNumber === element[0]
        ),
      }));
    });
    setVehicleData(vehicleData);

    for (let i = 0; i < issueData.length; i++) {
      for (let j = 0; j < vehicleData.length; j++) {
        if (
          issueData[i]["issueNo"] != null &&
          issueData[i]["createdAt"] > 1675863674000 &&
          (kad(issueData[i]["customFields"]).includes("load") ||
            !kad(issueData[i]["customFields"]).includes("Emp")) &&
          vec(issueData[i]["customFields"]) ==
            vehicleData[j]["vehicleRegistrationNumber"] &&
          vehicleData[j]["customFields"] != null
        ) {
          let xyz = {
            vecNo: vecNo(issueData[i]["customFields"]),
            len: len(vehicleData[j]["customFields"]),
            logo: vehicleImg(vehicleData[j]["vehicleMake"]),
            details: {
              year: makeVehicle(vehicleData[j]["customFields"]),
              cover: AMCCover(vehicleData[j]["customFields"]),
              type: local(vehicleData[j]["customFields"]),
            },
            run: "⚙️",
            rDetails: {
              speed: vehicleData[j][24],
              halt: vehicleData[j][23],
            },
          };
          console.log(vehicleData[j]);
          console.log(xyz);
        }
      }
    }
  }, []);

  return (
    <>
      <div className="Section1">
        <div>
          <div>
            <p className="caseno" type="text" disabled></p>
            Gaadi malik Issue (Loaded)
          </div>

          <table border={1}>
            <thead>
              <tr>
                <th>V No.</th>
                <th></th>
                <th>GM</th>
                <th>Problem</th>
                <th>Description</th>
                <th>Time Up </th>
              </tr>
            </thead>

            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
}
