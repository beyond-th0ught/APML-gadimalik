import React from 'react'
import Spinner from "../../assets/spinner.gif"
function BlurTable() {

  return (
    <div className='relative  block p-1 border  border-gray-200 rounded-lg shadow w-full'>
                    <div className='absolute left-[43%] top-[40%] z-40 p-2 rounded-md'>
                      <img src={Spinner} />

                    </div>
                    <table className='w-full text-sm text-left text-gray-500 blur-sm'>
                        <thead className='text-medium text-gray-50 uppercase bg-[#c20505]'>
                          <tr className='p-7'>
                            <th scope="col" className="px-6 py-3 rounded-l-lg">V No.</th>
                            <th scope="col" className="px-6 py-3">GM</th>
                            <th scope="col" className="px-6 py-3">Problem</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">Time Up </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr id="blur" className="border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 grid grid-cols-2 gap-2 gap-x-3 font-medium whitespace-nowrap dark:text-white">
                               -
                            </th>
                            <td className="px-6 py-4 bg-slate-950">-</td>
                            <td className="px-6 py-4">-</td>
                            <td className="px-6 py-4">-</td>
                          </tr>

                          <tr id="blur" className="border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 grid grid-cols-2 gap-2 gap-x-3 font-medium whitespace-nowrap dark:text-white">
                               -
                            </th>
                            <td className="px-6 py-4 bg-slate-950">-</td>
                            <td className="px-6 py-4">-</td>
                            <td className="px-6 py-4">-</td>
                          </tr>
                        </tbody>
                    </table>    
                </div>
  )
}

export default BlurTable
