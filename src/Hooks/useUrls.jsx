import React from "react";
import axios from "axios";
import { kad, AMCCover, gad, kbd, len, local, makeVehicle, vec, vecNo, vehicleImg } from "../utils/GMIUtils";

function useUrls() {
  const issueUrl =
    'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType":["Gaadi Malik Issue"],"status.keyword":["Open"]}';

  const logoUrl =
    "https://script.google.com/macros/s/AKfycbyzz-dKS85zqH8Hzim81SIm-7wKvvafbAVdPikeL9oc9tumXzqZKWP2k73mYRkF1zmy/exec";
 
  const vehicleUrl = "https://apis.fretron.com/partner-fleet/v2/allVehiclesList/";

  // AUTH HEADER
  const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w`,
  };

  const fetchData = async () => {
    try {
      let issueData;
      let vehicleData;
      let sheetData;

      let content = [];
      let loaded = [];
      let empty = [];

      const issueRes = await axios.get(issueUrl, { headers });
      issueData = issueRes.data;

      const vehRes = await axios.get(vehicleUrl, { headers });
      vehicleData = vehRes.data.data;

      const sheetRes = await axios.get(logoUrl);
      sheetData = sheetRes.data.data;

      console.log(issueRes)
      console.log(vehRes)
      console.log(sheetRes)

      vehicleData = vehicleData.map((vehicle) => ({
        ...vehicleData.find(
          (element) =>
            vehicle.vehicleRegistrationNumber ===
            element.vehicleRegistrationNumber
        ),
        ...vehicle,
      }));

      vehicleData = vehicleData.map((vehicle) => ({
        ...sheetData.find(
          (element) => vehicle.vehicleRegistrationNumber === element[0]
        ),
        ...vehicle,
      }));

      for (let i = 0; i < issueData.length; i++) {
        for (let j = 0; j < vehicleData.length; j++) {
          if (
            issueData[i]["issueNo"] != null &&
            issueData[i]["createdAt"] > 1675863674000 &&
            kad(issueData[i]["customFields"]).includes("oad") &&
            kad(issueData[i]["customFields"]) != "Emp" &&
            vec(issueData[i]["customFields"]) ==
              vehicleData[j]["vehicleRegistrationNumber"] &&
            vehicleData[j]["customFields"] != null
          ) {
            let loadData = {
              vecNo: vecNo(issueData[i]["customFields"]),
              len: len(vehicleData[j]["customFields"]),
              compLogo: vehicleImg(vehicleData[j]["vehicleMake"]),
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
              shipLogo: vehicleData[j][27],
              gm: gad(vehicleData[j]["customFields"]),
              prob: kbd(issueData[i]["customFields"]),
              desc: issueData[i]["issueDescription"],
              time: issueData[i]["createdAt"],
              temp: kad(issueData[i]["customFields"]),
            };

            loaded.push(loadData);
          } else if (
            issueData[i]["issueNo"] != null &&
            issueData[i]["createdAt"] > 1675863674000 &&
            kad(issueData[i]["customFields"]).includes("Emp") &&
            kad(issueData[i]["customFields"]) != "Load" &&
            vec(issueData[i]["customFields"]) ==
              vehicleData[j]["vehicleRegistrationNumber"] &&
            vehicleData[j]["customFields"] != null
          ) {
            let emptyData = {
              vecNo: vecNo(issueData[i]["customFields"]),
              len: len(vehicleData[j]["customFields"]),
              compLogo: vehicleImg(vehicleData[j]["vehicleMake"]),
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
              shipLogo: vehicleData[j][27],
              gm: gad(vehicleData[j]["customFields"]),
              prob: kbd(issueData[i]["customFields"]),
              desc: issueData[i]["issueDescription"],
              time: issueData[i]["createdAt"],
              temp: kad(issueData[i]["customFields"]),
            };

            empty.push(emptyData);
          }
        }
      }

      var a = setInterval(() => {}, 1000);
      content.push(loaded);
      content.push(empty);
      return content;
    } catch (err) {
      console.log(err);
    }
  };
  return [issueUrl, fetchData];
}

export default useUrls;
