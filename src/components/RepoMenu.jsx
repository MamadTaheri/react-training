import React, {useEffect} from 'react';
import {useIterator} from "../hooks/useIterator";
import RepositoryReadme from "./RepositoryReadme";

const RepoMenu = ({repositories, selected, onSelect = f => f}) => {
    const [{name}, previos, next] = useIterator(
        repositories,
        selected ? repositories.findIndex(repo => repo.name === selected) : null
    );

    return (
        <div className="d-flex flex-column">
            <div style={{display: "flex"}}>
                <button onClick={previos}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            <div className="border border-danger">
                {/*<RepositoryReadme login={login} repo={name} />*/}
            </div>
        </div>
    );
};

export default RepoMenu;