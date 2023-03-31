import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Pagination({ data, setCurrentWikiId }) {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  let totalPage = Math.ceil(data.length / 5);
  const limit = 5;
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setCurrentPage(1);
            setOffset(0);
          }}
          disabled={currentPage < 2 ? true : false}
        >
          {"<<"}
        </button>
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
            setOffset(offset - limit);
          }}
          disabled={currentPage < 2 ? true : false}
        >
          {"<"}
        </button>
        {Array(totalPage)
          .fill()
          .map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                disabled={currentPage - 1 === i ? true : false}
              >
                <div>{i + 1}</div>
              </button>
            );
          })}
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
            setOffset(offset + limit);
          }}
          disabled={currentPage > totalPage - 1 ? true : false}
        >
          {">"}
        </button>
        <button
          onClick={() => {
            setCurrentPage(totalPage);
            setOffset(totalPage);
          }}
          disabled={currentPage > totalPage - 1 ? true : false}
        >
          {">>"}
        </button>
      </div>
      <div>
        {data &&
          data.slice(offset, offset + limit).map(({ id, title, contents }) => {
            return (
              <div
                key={id}
                onClick={() => {
                  setCurrentWikiId(id);
                }}
              >
                <Link to={`/doc/${id}`}>
                  <h1>{title}</h1>
                </Link>
                <h3>{contents}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
