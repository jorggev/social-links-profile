/* eslint-disable no-unused-vars */
import React from 'react';
import './profileImage.css'
import profileIimage from '../../assets/images/avatar-jessica.jpeg'


const Profile = () => {
    return (
        <div className='profile-image-container'>
            <img src={profileIimage} alt="Profile Image" className='profile-image'/>
        </div>
    );
};

export default Profile;