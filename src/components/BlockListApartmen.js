import React, { useEffect, useState } from "react";
import { HTTP_REQ, HTTP_REQ_LOCAL } from "./constant";
import * as DataApi from "./DataApi";
const BlockListApartmen = () => {
  const [dataServer, setDataServer] = useState([]);

  useEffect(() => {
    DataApi.retrievalDataApi().then((appartments) =>
      setDataServer(appartments.data)
    );
  }, []);
  return (
    <div className="block-list-apart p-2">
      <div style={{ height: 200 * 5, overflow: "auto" }}>
        {dataServer.length ? (
          <ul className="list-group">
            {dataServer.map((data) => {
              return (
                <li className="list-group-item heightL p-2 m-0" key={data._id}>
                  <img
                    width="100%"
                    alt=""
                    src={`${HTTP_REQ_LOCAL}${data.nameImg}`}
                  />
                  <p className="m-0">{data.adress}</p>
                  <p className="m-0">{data.description}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3>Данных нет</h3>
        )}
      </div>
    </div>
  );
};
export default BlockListApartmen;
