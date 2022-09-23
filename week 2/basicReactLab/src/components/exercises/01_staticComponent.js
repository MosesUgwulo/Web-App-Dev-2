import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No. of Lectures</th>
            <th>No. of Practicals</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>DevOps</td>
            <td>2</td>
            <td>4</td>
          </tr>

          <tr>
            <td>Web Development</td>
            <td>4</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
  );
};

export default Demo;
