import React from "react";
import "./Table.scss";

interface ITable {
  data: Array<object>;
}

const Table: React.FC<ITable> = ({ data }) => {
  const createColumnHeaders = () => {
    return (
      <tr className="table__header">
        {Object.keys(data[0]).map((header) => (
          <td key={`table-head-${header}`} className="table__header-element">
            {header}
          </td>
        ))}
      </tr>
    );
  };

  const createTableData = () => {
    return data.map((dataElement) => (
      <tr className="table__body" key={`table-data-${dataElement}`}>
        {Object.values(dataElement).map((value) => (
          <td key={`table-data-${value}`} className="table__body-element">
            {value}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>{createColumnHeaders()}</thead>
      <tbody>{createTableData()}</tbody>
    </table>
  );
};

export default Table;
