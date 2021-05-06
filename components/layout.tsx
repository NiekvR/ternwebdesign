import React from 'react';
import Image from 'next/image';
import { Frameworks } from '../models/project';
import FrameworkComponent from './frameworks';
import { getTitleId } from '../lib/projects.service';
import Link from 'next/link';

class Layout extends React.Component<{ children, home: boolean, frameworks?: Frameworks, open?: boolean, openExtraContent?: () => void }, { }> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`container ${this.props.open ? "open" : ""}`}>
                <div className={`item list logo md ${ this.props.home ? '' : 'detail'}`}>
                    <div className="logo-container">
                        { !!this.props.open ? (
                            <button onClick={() => this.props.openExtraContent()}><span>Over...</span></button>
                        ) : ( null )}
                        <Image
                            priority
                            src="/images/ternwebdesign.png"
                            alt="logo ternwebdesign"
                            width={290}
                            height={90}
                        />
                        { !this.props.home ? (
                            <Link href="/">
                                <button><span>Alle projecten</span></button>
                            </Link>
                        ) : ( null )}
                        <div className="scroll">
                            Scroll naar beneden
                            <i className="fas fa-angle-double-down"></i>
                        </div>
                    </div>
                    { !!this.props.frameworks ? (
                            <div className="frameworks">
                                <h2>Gebruikte technieken</h2>
                                <FrameworkComponent frameworks={this.props.frameworks} extended={!!this.props.frameworks} />
                            </div>
                        ): null
                    }
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
