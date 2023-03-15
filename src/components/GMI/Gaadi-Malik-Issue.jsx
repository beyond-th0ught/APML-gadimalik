import React, { useEffect, useState } from "react";

// IMPORT FUNCTIONS
import { fetchData } from "./gmiFunctions";

export default function Gaadi_Malik_Issue() {
  const [loadedContent, setLoadedContent] = useState([]);
  const [emptyContent, setEmptyContent] = useState([]);

  const [type, setType] = useState("all");

  useEffect(() => {
    (async () => {
      const data = await fetchData();

      setLoadedContent(data[0]);
      setEmptyContent(data[1]);
    })();
  }, []);

  return (
    <>
      <div className="Section1">
        <div>
          <button onClick={() => setType("all")}>ALL</button>
          <button onClick={() => setType("🚚")}>LINE_SXL</button>
          <button onClick={() => setType("🚛")}>LINE_MXL</button>
          <button onClick={() => setType("🚍")}>LINE_TRAILER</button>
        </div>
        <div>
          {/* <p>{lC}</p> */}
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
              {loadedContent.map((e) => {
                if (e.len === type || type === "all") {
                  return (
                    <tr>
                      <td>{e.vecNo || "NA"}</td>
                      <td>
                        <span>
                          {e.len}
                          <img
                            // style="background-color: black"
                            src={e.compLogo}
                            width="40px"
                            height="25px"
                          />
                          |{e.details.year}|{e.details.cover}|{e.details.type}|
                        </span>
                        <span
                          className={
                            e.rDetails.speed > 5
                              ? "working-rotated-thing"
                              : "speed-o"
                          }
                        >
                          {e.run}
                        </span>
                        |
                        <span
                          className={
                            e.rDetails.speed > 5
                              ? "working-rotated-thing"
                              : "speed-o"
                          }
                        >
                          {e.rDetails.speed}
                        </span>
                        |
                        <span
                          className={
                            e.rDetails.halt <= 1
                              ? "working-rotated-thing"
                              : "speed-o"
                          }
                        >
                          {e.rDetails.halt}
                        </span>
                        |
                        <span>
                          <img
                            // style="background-color: black"
                            src={e.shipLogo}
                            width="55px"
                            height="25px"
                          />
                        </span>
                      </td>
                      <td>{e.gm}</td>
                      <td>{e.prob}</td>
                      <td>{e.desc}</td>
                      <td value="hello"></td>
                      <td>{e.temp}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>

        <div>
          {/* <p>{eC}</p> */}
          <div>
            <p className="caseno" type="text" disabled></p>
            Gaadi malik Issue (Empty)
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
              {emptyContent.map((e) => {
                if (e.len === type || type === "all") {
                  return (
                    <tr>
                      <td>{e.vecNo || "NA"}</td>
                      <td>
                        <span>
                          {e.len}
                          <img
                            // style="background-color: black"
                            src={e.compLogo}
                            width="40px"
                            height="25px"
                          />
                          |{e.details.year}|{e.details.cover}|{e.details.type}|
                        </span>
                        <span
                          className={
                            e.rDetails.speed > 5
                              ? "working-rotated-thing"
                              : "speed-o"
                          }
                        >
                          {e.run}
                        </span>{" "}
                        |{" "}
                        <span
                          className={
                            e.rDetails.speed > 5
                              ? "working-rotated-thing"
                              : "speed-o"
                          }
                        >
                          {e.rDetails.speed}
                        </span>{" "}
                        |{" "}
                        <span
                          className={
                            e.rDetails.speed <= 1
                              ? "working-rotated-thing"
                              : "speed-o"
                          }
                        >
                          {e.rDetails.halt}
                        </span>{" "}
                        |{" "}
                        <span>
                          <img
                            // style="background-color: black"
                            src={e.shipLogo}
                            width="55px"
                            height="25px"
                          />
                        </span>
                      </td>
                      <td>{e.gm}</td>
                      <td>{e.prob}</td>
                      <td>{e.desc}</td>
                      <td>{e.time}</td>
                      <td>{e.temp}</td>
                    </tr>
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
