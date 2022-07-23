import React from "react"

//create component
const ApprovalCard = (props) => {

    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Delete</div>
                </div>
            </div>
        </div>
    )
}

//export the component
export default ApprovalCard