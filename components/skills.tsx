import React from 'react';
import { CurriculumVitae, Skill } from '../models/curriculum-vitae';
import styles from './skills.module.scss'
import SkillComponent from './skill';

class SkillsComponent extends React.Component<{ cv: CurriculumVitae }, { }> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`flex ${styles.skills}`}>
                <div className="flex flex-column flex-50 p-right">
                    <h2>Rol</h2>
                    {this.props.cv.roles.map((skill: Skill, index) => (
                        <SkillComponent key={index} skill={skill} />
                    ))}
                    <h2>Vaardigheden</h2>
                    <h3>Programmeertalen</h3>
                    {this.props.cv.programmingLanguages.map((skill: Skill, index) => (
                        <SkillComponent key={index} skill={skill} />
                    ))}
                    <h3>Methoden en technieken</h3>
                    {this.props.cv.methods.map((skill: Skill, index) => (
                        <SkillComponent key={index} skill={skill} />
                    ))}
                </div>
                <div className="flex flex-column flex-50 p-left">
                    <h2>Frameworks</h2>
                    <h3>Front-end</h3>
                    {this.props.cv.frameworks.frontend.map((skill: Skill, index) => (
                        <SkillComponent key={index} skill={skill} />
                    ))}
                    <h3>Back-end</h3>
                    {this.props.cv.frameworks.backend.map((skill: Skill, index) => (
                        <SkillComponent key={index} skill={skill} />
                    ))}
                    <h3>Continuous integration</h3>
                    {this.props.cv.frameworks.continuousIntegration.map((skill: Skill, index) => (
                        <SkillComponent key={index} skill={skill} />
                    ))}
                    <h3>Versie beheer</h3>
                    {this.props.cv.frameworks.versionControl.map((skill: Skill, index) => (
                        <SkillComponent key={index} skill={skill} />
                    ))}
                </div>
            </div>
        )
    }

}

export default SkillsComponent;
