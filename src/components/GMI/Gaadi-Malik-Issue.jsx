import React, { useEffect, useState } from "react";
import axios from "axios";

// IMPORT FUNCTIONS
import { wp, kad, kbd, currentStatus, vecNo } from "./gmiFunctions";

export default function Gaadi_Malik_Issue() {
  let [issueData, setIssueData] = useState([]);
  let [vehicleData, setVehicleData] = useState([]);

  // URLS
  const issueUrl =
    'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"status.keyword":["Open"]}';

  const vehicleUrl =
    "https://apis.fretron.com/partner-fleet/v2/allVehiclesList/";

  const logoUrl =
    "https://script.google.com/macros/s/AKfycbyzz-dKS85zqH8Hzim81SIm-7wKvvafbAVdPikeL9oc9tumXzqZKWP2k73mYRkF1zmy/exec";

  // AUTH HEADER
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w`,
  };

  useEffect(() => {
    // GET ISSUE DATA
    axios.get(issueUrl, { headers }).then((res) => {
      setIssueData(res.data);
    });

    // GET VEHICLE LIST
    axios.get(vehicleUrl, { headers }).then((res) => {
      setVehicleData(res.data.data);
    });
  }, []);

  useEffect(() => {
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
  }, [issueData]);

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

            <tbody>
              {issueData.map((e) => {
                console.log(e);
                if (
                  e["issueNo"] != null &&
                  e["issueType"] == "Gaadi Malik Issue" &&
                  e["createdAt"] > 1675863674000 &&
                  kbd(e["customFields"]) != "New Tyre/टायर की समस्या" &&
                  e["assignee"]["name"] != "Punit" &&
                  kbd(e["customFields"]) != "New Tyre" &&
                  kbd(e["customFields"]) != "Accident" &&
                  kbd(e["customFields"]) != "ACCIDENT" &&
                  kbd(e["customFields"]) != "NEW TYRE" &&
                  wp(e["customFields"]) != "Workshop-(Eicher)" &&
                  (kad(e["customFields"]).includes("load") ||
                    !kad(e["customFields"]).includes("Emp")) &&
                  !currentStatus(e["customFields"]).includes(
                    "ONWAY DOCUMENTATION PENDING"
                  )
                ) {
                  return (
                    <>
                      <tr>
                        <td>{vecNo(e["customFields"])}</td>
                      </tr>
                    </>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
