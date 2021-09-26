import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';

const Authors = () => {
    const [ authors, setAuthors ] = useState( [] );

    useEffect( () => {
        fetch( './authors.JSON' )
            .then( res => res.json() )
            .then( data => setAuthors( data ) );
    }, [] );

    return (
        <div className="row m-2">
            <div className="col-md-9">
                <div className="row">
                    {
                        authors.map( author => <Author
                            key={ author.id }
                            author={ author }></Author> )
                    }
                </div>
            </div>
            <div className="col-md-3 bg-dark mt-2 pt-2 rounded-3 border border-secondary">
                <h3 className="text-center fw-bold text-info">Invited Authors: </h3>
            </div>
        </div>

    );
};

export default Authors;