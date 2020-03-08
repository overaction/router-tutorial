import React from 'react';

const data = {
    velopert: {
        name: 'km',
        descript: 'hello~'
    },
    kmc: {
        name: 'kmc',
        descript: 'hi~'
    }
};

const Profile = ({match}) => {
    const {usernm} = match.params;
    const profile = data[usernm];
    console.log(match.params);
    if(!profile) {
        return <div>존재하지 않는 사용자</div>
    }
    return (
        <div>
            <h3>
                {usernm} {profile.name}
            </h3>
            <p>{profile.descript}</p>
        </div>
    )
}

export default Profile;