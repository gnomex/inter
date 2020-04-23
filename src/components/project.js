import React from 'react';

const Project = (props) => {
    return (
        <div className="jumbotron">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>
                <a class="btn btn-lg btn-primary" href={props.link} role="button">Ver site oficial</a>
            </p>
        </div>
    )
}

export default Project;