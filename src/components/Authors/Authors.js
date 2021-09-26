import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import Invite from '../Invite/Invite';

const Authors = () => {
    const [ authors, setAuthors ] = useState( [] );
    const [ inviteList, setInviteList ] = useState( [] );

    useEffect( () => {
        fetch( './authors.JSON' )
            .then( res => res.json() )
            .then( data => setAuthors( data ) );
    }, [] );

    const handleInviteList = author => {
        const newInviteList = [ ...inviteList, author ];
        setInviteList( newInviteList );
    }

    return (
        <div className="row me-2">
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
            <div className="col-md-3 bg-dark mt-2 mb-3 pt-2 rounded-3 border border-secondary">
                <Invite inviteList={ inviteList }></Invite>
            </div>
        </div>

    );
};

export default Authors;