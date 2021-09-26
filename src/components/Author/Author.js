import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons'

const Author = ( props ) => {
    const { name, role, country, age, salary, image } = props.author;

    return (
        <div className="card ps-3 m-2 border border-1 border-secondary bg-dark" style={ { maxWidth: "450px" } }>
            <hr className="text-secondary" />
            <div div className="row" >
                <div className="col-md-5">
                    <img style={ { height: '100px', width: '150px' } } src={ image } className="img-fluid rounded-start mt-4 mb-3 border border-1 border-secondary" alt="author_image" />
                    <button onClick={ () => props.handleInviteList( props.author ) } className="btn btn-info text-dark"><FontAwesomeIcon icon={ faBookReader } /> Invite</button>
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title text-info fw-bold">{ name }</h5>
                        <p className="card-text text-white"><b>Role:</b> { role }</p>
                        <p className="card-text text-white"><b>Age:</b> { age }</p>
                        <p className="card-text text-white"><b>Country:</b> { country }</p>
                        <p className="card-text text-white"><b>Fee:</b> { salary }</p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Author;