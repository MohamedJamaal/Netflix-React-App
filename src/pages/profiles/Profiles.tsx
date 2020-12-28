import React from 'react' 
import profiles from '../../data/profiles/profiles.json'
import Button from '../../components/button/Button'
import './Profiles.css'

interface Props {
    onProfileClick: Function
}

export default function Profiles({onProfileClick}: Props) { // from landing.tsx state
    return <div className="content">
    <span className="title"> Who's Watching ?</span>
    <div className="profiles">
        {profiles.map(( profile, index ) => (
         <div key={index} onClick={(e) => onProfileClick(profile)} className="profile">
            <img className="image" alt="" src={profile.image_src} />
            <span className="username">{profile.username}</span>
        </div>
        ))}
    </div>
    <Button label="MANAGE PROFILES" />
</div>
}