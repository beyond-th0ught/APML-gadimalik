import React from 'react'
import Arrow from '../../assets/arrow-right.svg'

function Table({data, type, prob, id}) {
  return (
    <div className='relative block p-1 border  border-gray-200 rounded-lg shadow w-full'>
    
    <table className='w-full text-[9px] text-left text-gray-500'>
      <thead className='text-[9px] text-gray-50 uppercase bg-[#c20505]'>
        <tr>
          <th scope="col" className="px-6 py-2 rounded-l-lg">V No.</th>
          <th scope="col" className="px-6 py-2">GM</th>
          <th scope="col" className="px-6 py-2">Problem</th>
          <th scope="col" className="px-6 py-2">Description</th>
          <th scope="col" className="px-6 py-2 rounded-r-lg">Time Up </th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((e) => {
          if (
            (e.len === type && e.prob === prob) ||
            (type === "all" && e.prob === prob)
          ) {
            return (
              <tr id={`${id}`} className="border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-2 grid grid-cols-2 gap-2 gap-x-3 font-medium whitespace-nowrap dark:text-white">
                  {e.vecNo || "NA"}{" "}
                  <span className='text-[#c20505]'>
                    {e.len}
                  </span>
                  <span>
                  | {e.details.year} | {e.details.cover} |{" "}
                    {e.details.type} |{" "}
                  </span>
                  <span className=''>
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
                  </span>
                  <span className='flex justify-start'>
                  <img src={e.compLogo} width="40px" height="25px" />
                  <img src={Arrow} color='white' />
                    <img src={e.shipLogo} width="40px" height="25px" />
                  </span>
                </th>
                <td className="px-6 py-4 bg-slate-950">{e.gm}</td>
                <td className="px-6 py-4">{e.prob}</td>
                <td className="px-6 py-4 bg-slate-950">
                  <textarea defaultValue={e.desc}  className='bg-slate-950'></textarea>
                </td>
                <td className="px-6 py-4">{e.time}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
    </div>
  )
}

export default Table