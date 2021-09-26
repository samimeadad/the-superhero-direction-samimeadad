import React from 'react';

const Invite = ( props ) => {
    const { inviteList } = props;

    let totalCost = 0;
    for ( const guest of inviteList ) {
        totalCost = totalCost + guest.salary;
    }

    return (
        <div>
            <h2 className="text-center fw-bold text-info">Invitation Summary</h2>
            <hr className="text-secondary" />
            <h4 className="text-center fw-bold text-info">Invited Authors: <span className="text-warning">{ inviteList.length }</span> </h4>
            <h4 className="text-center fw-bold text-info">Total Fees: <span className="text-warning">{ totalCost }</span> </h4>
        </div>
    );
};

export default Invite;