import React from 'react';
import { Skill } from '../models/curriculum-vitae';
import styles from './skill.module.scss'

class SkillComponent extends React.Component<{ skill: Skill }, { }> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.skill}>
                <div className={styles.color}>{this.props.skill.name}</div>
                <div className={styles.levels}>
                    <div className={`${styles.level} ${styles.secondary} ${this.props.skill.skill >= 1 ? styles.hasColor : ''}`}></div>
                    <div className={`${styles.level} ${styles.secondary} ${this.props.skill.skill >= 2 ? styles.hasColor : ''}`}></div>
                    <div className={`${styles.level} ${styles.secondary} ${this.props.skill.skill >= 3 ? styles.hasColor : ''}`}></div>
                    <div className={`${styles.level} ${styles.secondary} ${this.props.skill.skill >= 4 ? styles.hasColor : ''}`}></div>
                    <div className={`${styles.level} ${styles.secondary} ${this.props.skill.skill >= 5 ? styles.hasColor : ''}`}></div>
                </div>
            </div>
        )
    }

}

export default SkillComponent;
