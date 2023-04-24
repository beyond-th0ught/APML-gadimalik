import React from 'react'

function Table({data, type, prob, id}) {
  return (
    <table>
      <thead>
        <tr>
          <th>V No.</th>
          <th>GM</th>
          <th>Problem</th>
          <th>Description</th>
          <th>Time Up </th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((e) => {
          if (
            (e.len === type && e.prob === prob) ||
            (type === "all" && e.prob === prob)
          ) {
            return (
              <tr id={`${id}`}>
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
  )
}

export default Table