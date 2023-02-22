import React, { useEffect, useState } from "react";
import axios from "axios";

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

          <table>
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

        <tr>
        {lis.filter(a => a['issueNo'] != null 
      && a['issueType'] == 'Gaadi Malik Issue' 
      && a['createdAt'] > 1675863674000 
      && kbd(a['customFields']) != 'New Tyre/टायर की समस्या' 
      && a['assignee']['name'] != 'Punit' 
      && kbd(a['customFields']) != 'New Tyre' 
      && kbd(a['customFields']) != 'Accident' 
      && kbd(a['customFields']) != 'ACCIDENT' 
      && kbd(a['customFields']) != 'NEW TYRE' 
      && wp(a['customFields']) != 'Workshop-(Eicher)' 
      && (kad(a['customFields']).includes('load') || !kad(a['customFields']).includes('Emp')) 
      && !Current_Status(a['customFields']).includes('ONWAY DOCUMENTATION PENDING')
    ).map(a => (
        <tr>
            <td style={{fontSize: '20px'}}>{vec1(a['customFields'])}</td>
            {qwe.map(b => (
                (vec(a['customFields']) === b['vehicleRegistrationNumber']) && (
                    <React.Fragment>
                        <td id="tsi">
                            {b['customFields'] != null ? (
                                <React.Fragment>
                                    {lin(b['customFields'])}
                                    <img style={{backgroundColor: 'black'}} src={vehicleimg(b['vehicleMake'])} width="40px" height="25px" />
                                    |{makevehicle(b['customFields'])} |{AMCcover(b['customFields'])} |{local(b['customFields'])}
                                    <span className={b[24] > 5 ? 'working-rotated-thing' : 'speed-o'}>{rs(b[24])}</span> |
                                    <span className={b[24] > 5 ? 'speed' : 'speed-o'}>{b[24]}</span> |
                                    <span className={b[23] > 1 ? 'halt-hrs' : 'halt-hrs1'}>{b[23]}</span> |
                                    <span><img style={{backgroundColor: 'black'}} src={b[27]} width="55px" height="25px" /></span>
                                </React.Fragment>
                            ) : (
                                <span style={{color: 'red'}}>Please Enter the Details</span>
                            )}
                        </td>
                        <td id="tsi">
                            {b['customFields'] != null ? (
                                <React.Fragment>{gad(b['customFields'])}</React.Fragment>
                            ) : (
                                <span style={{color: 'red'}}>Please Enter the Details</span>
                            )}
                        </td>
                    </React.Fragment>
                )
            ))}
            <td>{kbd(a['customFields'])}</td>
            <td>
                <textarea className="desc" cols="40" rows="1" className={a['issueDescription'] == 'Case yet not Attended' ? 'casenoo' : null}>{a['issueDescription']}</textarea>
            </td>
            <td>
                {a['updates']['forwardReasons'] === 'issue.reopened' ? (
                    <span style={{backgroundColor: 'transparent', color: 'pink'}}>{GetFullName(a['updates']['time'])}</span>
                ) : (
                    <span style={{backgroundColor: 'transparent', color: 'red'}}>{GetFullName(a['createdAt'])}<br /></span>
                )}
            </td>
          </tr>
    ))}
          </tr>
          </table>
        </div>
      </div>
    </>
  );
}
