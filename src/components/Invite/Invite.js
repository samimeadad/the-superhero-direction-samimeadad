import React from 'react';

//Component for the Invitation information on the right panel
const Invite = ( props ) => {

    const { inviteList } = props || {};

    //Calculation of the total cost/fee/salary
    let totalCost = 0;
    for ( const guest of inviteList ) {
        totalCost = totalCost + guest.salary;
    }

    //Presentation of the information on the UI
    return (
        <div className="ps-3">
            <h2 className="fw-bold text-info">Invitation Summary</h2>
            <hr className="text-secondary" />
            <h4 className="fw-bold text-info">Invited Authors: <span className="text-warning">{ inviteList.length }</span> </h4>
            <h4 className="fw-bold text-info">Total Fees: <span className="text-warning">${ totalCost }</span> </h4>
            <hr className="text-secondary" />
            <h4 className="fw-bold text-info">Authors List:</h4>
            <ul>
                {
                    inviteList.map( invitee => <li className="fw-bold text-info">{ invitee.name }, { invitee.role }</li> )
                }
            </ul>
        </div>
    );
};

export default Invite;