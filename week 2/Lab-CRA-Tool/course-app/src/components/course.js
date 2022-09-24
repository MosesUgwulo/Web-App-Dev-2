import React from "react"
import Module from "./module"


const Course = (props) => {
  const list = props.modules.map((module, index) => (
    <Module key={index} description={module} />
  ))
  return (
    <>
      <h2>{`${props.title} modules table`} </h2>
      <table className="striped bordered hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  )
}

export default Course