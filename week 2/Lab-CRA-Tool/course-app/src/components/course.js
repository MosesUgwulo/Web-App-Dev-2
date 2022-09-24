import React from "react";
import Module from "./module";

const Course = (props) => {
    const list = props.modules.map((module, index) => (
        <Module key={index} description={module} />
    ))

    return (
    <>
        <h2> {`${props.title} modules table`} </h2>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>No. Lectures</th>
                    <th>No. Practicals</th>
                </tr>
            </thead>

            <tbody>{list}</tbody>
        </table>
    </>
    )
}

export default Course;