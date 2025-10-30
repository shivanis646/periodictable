import React from "react";
import elements from "../data/elements.js";
import "../styles/table.css";

export default function PeriodicTable() {
  const mainElements = elements.filter(
    (el) => el.period !== "L" && el.period !== "A"
  );
  const lanthanides = elements.filter((el) => el.period === "L");
  const actinides = elements.filter((el) => el.period === "A");

  return (
    <div>
      <div className="table">
        {mainElements.map((el) => (
          <div
            key={el.atomicNumber}
            className={`element category-${el.category.toLowerCase().replace(/\s/g, "-")}`}
            style={{
              gridColumn: el.group ? el.group : "auto",
              gridRow: el.period ? el.period : "auto"
            }}
          >
            <div className="number">{el.atomicNumber}</div>
            <div className="symbol">{el.symbol}</div>
            <div className="name">{el.name}</div>
          </div>
        ))}
      </div>

      {/* Lanthanides Row */}
      <div className="lanthanide-row">
        {lanthanides.map((el) => (
          <div
            key={el.atomicNumber}
            className={`element category-${el.category.toLowerCase().replace(/\s/g, "-")}`}
          >
            <div className="number">{el.atomicNumber}</div>
            <div className="symbol">{el.symbol}</div>
            <div className="name">{el.name}</div>
          </div>
        ))}
      </div>

      {/* Actinides Row */}
      <div className="actinide-row">
        {actinides.map((el) => (
          <div
            key={el.atomicNumber}
            className={`element category-${el.category.toLowerCase().replace(/\s/g, "-")}`}
          >
            <div className="number">{el.atomicNumber}</div>
            <div className="symbol">{el.symbol}</div>
            <div className="name">{el.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
