import cn from 'classNames';
import React from 'react';
import Profile from './profile';
import Image from 'next/image';
import { CurriculumVitae } from '../models/curriculum-vitae';
import SkillsComponent from './skills';

class CurriculumVitaeComponent extends React.Component<{ cv: CurriculumVitae, open: boolean, close: () => void}, { selectedTab: string }> {
    constructor(props) {
        super(props);
        this.state = { selectedTab: 'ABOUT' }
    }

    public extraContentClass = cn({
        'extra-content': true,
        'open': this.props.open
    });

    public openTab(tab: string) {
        this.setState({ selectedTab: tab });
    }

    render() {
        return (
            <div className={`extra-content ${this.props.open ? "open" : ""}`}>
                <i className="fas fa-angle-right fa-2x" onClick={() => this.props.close()}></i>

                <div className="header">
                    <h1>Over TERN / Niek</h1>
                    <div className={`tab-bar ${this.props.open ? "open" : ""}`}>
                        <button onClick={() => this.openTab('ABOUT')} className={`${this.state.selectedTab === 'ABOUT' ? "active" : ""}`}><span>Profielschets</span></button>
                        <button onClick={() => this.openTab('SKILLS')} className={`${this.state.selectedTab === 'SKILLS' ? "active" : ""}`}><span>Vaardigheden</span></button>
                    </div>
                </div>
                <div className={`text ${this.props.open ? "open" : ""}`}>
                    {
                        this.state.selectedTab === 'ABOUT' ?
                            this.props.cv.profielschets.map((alinea: string, index) => (
                            <p key={index}>{alinea}</p>
                            )) : null
                    }

                    {this.state.selectedTab === 'ABOUT' ? (
                        <Profile education={this.props.cv.education} work={this.props.cv.work}/>
                    ) : (
                        <SkillsComponent cv={this.props.cv} />
                    ) }
                </div>
                <Image
                    priority
                    src="/images/niek_van_rabenswaaij_tern_small.png"
                    alt="Niek van Rabenswaaij profiel"
                    width={600}
                    height={315}
                />
            </div>
        );
    }
}

export default CurriculumVitaeComponent;

