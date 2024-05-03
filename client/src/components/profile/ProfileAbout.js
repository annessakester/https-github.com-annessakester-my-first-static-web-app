import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
	profile: {
		bio,
		skills,
		hobbies,
        githubusername,
        company,
        website,
		location,
		user: { name },
	},
}) => (
	<div className="profile-about bg-light p-2">
		{bio && (
			<Fragment>
				<h2 className="text-primary">
					{name.trim().split(' ')[0]}'s Bio
				</h2>
				<p>{bio}</p>
				<div className="line" />
			</Fragment>
		)}
		
		{location && (
			<Fragment>
				<h2 className="text-primary">
					Location
				</h2>
				<p>{location}</p>
				<div className="line" />
			</Fragment>
		)}
		<h2 className="text-primary">Skill Set</h2>
		<div className="skills">
			{skills.map((skill, index) => (
				<div key={index} className="p-1">
					<i className="fas fa-check" /> {skill}
				</div>
				
			))}
			
		</div>
		<div className="line" />
		<h2 className="text-primary">Hobbies</h2>
		<div className="skills">
			{hobbies.map((hobby, index) => (
				<div key={index} className="p-1">
					<i className="fas fa-check" /> {hobby}
				</div>
			))}
		</div>
	</div>
);

ProfileAbout.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
