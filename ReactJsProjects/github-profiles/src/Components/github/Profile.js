import React from 'react';

const Profile = (props) => {
    return (
        <div id="main_card" className="card border-dark mb-3" style={{ width: 70 + '%' }}>
            <div className="card-header"><strong>{props.userData.name}</strong></div>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.userData.avatar_url} alt="Profile pic" className="thumbnail" style={{ width: 100 + '%' }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <span className="badge badge-primary" >{props.userData.public_repos} Repository</span>
                        <span className="badge badge-info" >{props.userData.followers} Followers</span>
                        <span className="badge badge-danger" >{props.userData.following} Following</span>
                            <ul className="list-group">
                                <li className=" list-group-item"> <strong>User Name - </strong> {props.userData.login} </li>
                                <li className=" list-group-item"> <strong>Bio - </strong> {props.userData.bio} </li>
                                <li className="list-group-item"><strong>EmailId - </strong> {props.userData.email}</li>
                                <li className="list-group-item"><strong>Location - </strong> {props.userData.location}</li>
                            </ul>
                        <br/>
                        <a className="btn btn-primary" href={props.userData.html_url} >Visit Profile &raquo;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile