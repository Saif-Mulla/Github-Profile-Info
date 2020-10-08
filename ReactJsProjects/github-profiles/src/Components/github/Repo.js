import React from 'react';

const Repo = (props) =>{
    return(
        <div id="repository" className="container card border-dark mb-3" style={{width: 70 + "%"}}>
            <div className="card-body">
                <h5 className="card-title">User Repositories</h5>
                <ul className="list-group">
                    {props.RepoInfo.map((data) => {
                        return(
                            <li className="list-group-item" key={data.repoid}>
                                <p> Name => {data.reponame} </p> 
                                <p> Description => <a href={data.repourl}>{data.repodesc}</a> </p> 
                                </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Repo