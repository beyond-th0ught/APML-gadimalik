import React, { useContext } from 'react'
import { LoadContext } from '../../Context/LoadContextProvider'
import { TopNavContext } from '../../Context/TopNavContextProvider'
import { CountContext } from '../../Context/CountContextProvider'

function RtoEmpty() {
    const {emptyContent} = useContext(LoadContext)
  const {type} = useContext(TopNavContext)
  const { count } = useContext(CountContext) 
  return (
    <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.re}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              RTO Issue (Empty)
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
              <tbody>
                {emptyContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "RTO") ||
                    (type === "all" && e.prob === "RTO")
                  ) {
                    return (
                      <tr id="re">
                        <td>
                          {e.vecNo || "NA"}{" "}
                          <span>
                            {e.len}{" "}
                            <img src={e.compLogo} width="40px" height="25px" />{" "}
                            | {e.details.year} | {e.details.cover} |{" "}
                            {e.details.type} |{" "}
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
                              e.rDetails.halt <= 1
                                ? "working-rotated-thing"
                                : "speed-o"
                            }
                          >
                            {e.rDetails.halt}
                          </span>{" "}
                          |{" "}
                          <span>
                            <img src={e.shipLogo} width="55px" height="25px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <td>
                          <textarea value={e.desc}></textarea>
                        </td>
                        <td>{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
  )
}

export default RtoEmpty