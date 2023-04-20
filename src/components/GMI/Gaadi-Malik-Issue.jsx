import React, { useContext, useEffect, useState } from "react";

// IMPORT FUNCTIONS
import { TopNavContext } from "../../Context/TopNavContextProvider";
import { LoadContext } from '../../Context/LoadContextProvider'
import Topnav from "../BaseComponents/Topnav";
import RtoPanel from "../RTO/RtoLoad";
import RtoEmpty from "../RTO/RtoEmpty";
import { CountContext } from "../../Context/CountContextProvider";

export default function Gaadi_Malik_Issue() {
  const { type } =  useContext(TopNavContext)
  const { loadedContent, emptyContent } = useContext(LoadContext) 
  
  const { count } = useContext(CountContext);

  let temp;

  return (
    <>
      <Topnav />
      <div className="Section">
        
        {/* RTO */}
        <div className="SubSection">
          <RtoPanel />
          <RtoEmpty />
        </div>
        
        {/* एडवांस */}
        <div className="SubSection">
          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.al}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              एडवांस Issue (Loaded)
            </div>

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
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "एडवांस ") ||
                    (type === "all" && e.prob === "एडवांस ")
                  ) {
                    return (
                      <tr id="al">
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

          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.ae}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              एडवांस Issue (Empty)
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
                    (e.len === type && e.prob === "एडवांस ") ||
                    (type === "all" && e.prob === "एडवांस ")
                  ) {
                    return (
                      <tr id="ae">
                        <td>{e.vecNo || "NA"}</td>
                        <td>
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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
                            <img src={e.shipLogo} width="55px" height="25px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <textarea value={e.desc}></textarea>
                        <td>{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* अनलोडिंग समस्या	*/}
        <div className="SubSection">
          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.ul}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              अनलोडिंग समस्या Issue (Loaded)
            </div>

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
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "अनलोडिंग समस्या ") ||
                    (type === "all" && e.prob === "अनलोडिंग समस्या ")
                  ) {
                    return (
                      <tr id="ul">
                        <td>
                          {e.vecNo || "NA"}
                          {/* <td> */}
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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

          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.ue}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              अनलोडिंग समस्या Issue (Empty)
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
                    (e.len === type && e.prob === "अनलोडिंग समस्या ") ||
                    (type === "all" && e.prob === "अनलोडिंग समस्या ")
                  ) {
                    return (
                      <tr id="ue">
                        <td>{e.vecNo || "NA"}</td>
                        <td>
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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
                            <img src={e.shipLogo} width="55px" height="25px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <textarea value={e.desc}></textarea>
                        <td>{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* लोडिंग समस्या */}
        <div className="SubSection">
          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.ll}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              लोडिंग समस्या Issue (Loaded)
            </div>

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
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "लोडिंग समस्या") ||
                    (type === "all" && e.prob === "लोडिंग समस्या")
                  ) {
                    return (
                      <tr id="ll">
                        <td>
                          {e.vecNo || "NA"}
                          {/* <td> */}
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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

          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.le}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              लोडिंग समस्या Issue (Empty)
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
                    (e.len === type && e.prob === "लोडिंग समस्या") ||
                    (type === "all" && e.prob === "लोडिंग समस्या")
                  ) {
                    return (
                      <tr id="le">
                        <td>{e.vecNo || "NA"}</td>
                        <td>
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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
                            <img src={e.shipLogo} width="55px" height="25px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <textarea value={e.desc}></textarea>
                        <td>{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* रूट समस्या */}
        <div className="SubSection">
          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.rol}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              रूट समस्या Issue (Loaded)
            </div>

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
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "रूट समस्या ") ||
                    (type === "all" && e.prob === "रूट समस्या ")
                  ) {
                    return (
                      <tr id="rol">
                        <td>
                          {e.vecNo || "NA"}
                          {/* <td> */}
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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

          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.roe}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              रूट समस्या Issue (Empty)
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
                    (e.len === type && e.prob === "रूट समस्या ") ||
                    (type === "all" && e.prob === "रूट समस्या ")
                  ) {
                    return (
                      <tr id="roe">
                        <td>{e.vecNo || "NA"}</td>
                        <td>
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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
                            <img src={e.shipLogo} width="55px" height="25px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <textarea value={e.desc}></textarea>
                        <td>{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* खाली */}
        <div className="SubSection">
          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.kl}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              खाली Issue (Loaded)
            </div>

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
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "खाली ") ||
                    (type === "all" && e.prob === "खाली ")
                  ) {
                    return (
                      <tr id="kl">
                        <td>
                          {e.vecNo || "NA"}
                          {/* <td> */}
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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

          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.ke}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              खाली Issue (Empty)
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
                    (e.len === type && e.prob === "खाली ") ||
                    (type === "all" && e.prob === "खाली ")
                  ) {
                    return (
                      <tr id="ke">
                        <td>{e.vecNo || "NA"}</td>
                        <td>
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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
                            <img src={e.shipLogo} width="55px" height="25px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <textarea value={e.desc}></textarea>
                        <td>{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* बिल्टी,चलन */}
        <div className="SubSection">
          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.cl}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              बिल्टी,चलन Issue (Loaded)
            </div>

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
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "बिल्टी,चलन") ||
                    (type === "all" && e.prob === "बिल्टी,चलन")
                  ) {
                    return (
                      <tr id="cl">
                        <td>
                          {e.vecNo || "NA"}
                          {/* <td> */}
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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

          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.ce}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              बिल्टी,चलन Issue (Empty)
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
                    (e.len === type && e.prob === "बिल्टी,चलन") ||
                    (type === "all" && e.prob === "बिल्टी,चलन")
                  ) {
                    return (
                      <tr id="ce">
                        <td>{e.vecNo || "NA"}</td>
                        <td>
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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
                            <img src={e.shipLogo} width="55px" height="25px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <textarea value={e.desc}></textarea>
                        <td>{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Other issue */}
        <div className="SubSection">
          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.ol}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              Other issue Issue (Loaded)
            </div>

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
                {loadedContent.map((e) => {
                  if (
                    (e.len === type && e.prob === "Other issue") ||
                    (type === "all" && e.prob === "Other issue")
                  ) {
                    return (
                      <tr id="ol">
                        <td>
                          {e.vecNo || "NA"}
                          {/* <td> */}
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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

          <div>
            <div style={{ fontSize: "35px" }}>
              <input
                value={count.oe}
                type="text"
                disabled
                style={{
                  backgroundColor: "black",
                  color: "red",
                  fontSize: "35px",
                }}
              />
              Other issue Issue (Empty)
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
                    (e.len === type && e.prob === "Other issue") ||
                    (type === "all" && e.prob === "Other issue")
                  ) {
                    return (
                      <tr id="oe">
                        <td>{e.vecNo || "NA"}</td>
                        <td>
                          <span>
                            {e.len}
                            <img src={e.compLogo} width="40px" height="25px" />|
                            {e.details.year}|{e.details.cover}|{e.details.type}|
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
                            <img src={e.shipLogo} width="55px" height="25px" />
                          </span>
                        </td>
                        <td>{e.gm}</td>
                        <td>{e.prob}</td>
                        <textarea value={e.desc}></textarea>
                        <td>{e.time}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
