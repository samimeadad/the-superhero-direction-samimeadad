import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import Invite from '../Invite/Invite';

//This is the parent component. It is directly under App() component
const Authors = () => {
    // Set state for the authors to be loaded on the Author component and display the cards
    const [ authors, setAuthors ] = useState( [] );

    //Set state for the invited author's information (total fees, selected authors list) in the Invited Author Section on the right.
    const [ inviteList, setInviteList ] = useState( [] );

    //Data fetch from custom created ./public/authors.JSON file
    useEffect( () => {
        fetch( './authors.JSON' )
            .then( res => res.json() )
            .then( data => setAuthors( data ) );
    }, [] );

    //Event handlers for Invite Button which is in the child component
    const handleInviteList = author => {
        //condition applied for preventing duplicate invitation to the same author
        if ( inviteList.includes( author ) ) {
            return;
        }
        //if the author is not invited yet, he or she will be added to the invited list
        else {
            const newInviteList = [ ...inviteList, author ];
            setInviteList( newInviteList );
        }


    }

    //Return the JSX to represent the Author Info Cards and the Invitation section on the right side of the UI
    return (
        //the parent div
        <div className="row me-2">
            {/* div for Author's Cards */ }
            <div className="col-md-9">
                <div className="row g-3 mb-3">
                    {
                        authors.map( author => <Author
                            key={ author.id }
                            author={ author }
                            handleInviteList={ handleInviteList }></Author> )
                    }
                </div>
            </div>

            {/* div for Invitation Information */ }
            <div className="col-md-3 bg-dark mt-2 mb-3 pt-2 rounded-3 border border-secondary">
                <Invite inviteList={ inviteList }></Invite>
            </div>
        </div>

    );
};

export default Authors;