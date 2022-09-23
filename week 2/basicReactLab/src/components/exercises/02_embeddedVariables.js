import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  const noLectures = [2, 4];
  const noPracticals = [4, 6];
  const name = ["DevOps", "Web Development"];
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
          <td>{name[0]}</td>
          <td>{noLectures[0]}</td>
          <td>{noPracticals[0]}</td>
        </tr>

        <tr>
          <td>{name[1]}</td>
          <td>{noLectures[1]}</td>
          <td>{noPracticals[1]}</td>
        </tr>
      </tbody>
    </table>

  );
};

export default Demo;
