import React from 'react';
import { Experience } from '../models/curriculum-vitae';

class Profile extends React.Component<{ education: Experience[], work: Experience[] }, { }> {
    private sortedEducation: Experience[];
    private sortedWork: Experience[];

    constructor(props) {
        super(props);

        this.sortExperienceByEndYear();
    }

    private sortExperienceByEndYear() {
        this.sortedEducation = this.sortExperience(this.props.education);
        this.sortedWork = this.sortExperience(this.props.work);
    }

    private sortExperience(experience: Experience[]) {
        return experience.sort(function(a, b) {
            if (a.endYear < b.endYear) {
                return -1 * -1;
            } else if ( a.endYear > b.endYear) {
                return 1 * -1;
            } else {
                return 0;
            }
        });
    }

    render() {
        return (
            <div className="flex flex-wrap">
                <div className="flex flex-column flex-50 p-right">
                    <h3>Opleiding</h3>
                    {this.sortedEducation.map((experience: Experience) => (
                        <div key={experience.name} className="list aligned-text">
                            <div className="flex-1 primary">{experience.name}</div>
                            <div className="tertiary">{experience.startYear} - {experience.endYear}</div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-column flex-50 p-left">
                    <h3>Werkgevers</h3>
                    {this.sortedWork.map((experience: Experience) => (
                        <div key={experience.name} className="list aligned-text">
                            <div className="flex-1 primary">{experience.name}</div>
                            <div className="secondary">{experience.startYear} - {experience.endYear}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Profile;
