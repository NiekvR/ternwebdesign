import React from 'react';
import { Framework } from '../models/curriculum-vitae';
import { Frameworks } from '../models/project';

function FireBaseIcon () {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 0 0-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984 14.3 7.148z"/></svg>
    )
}

function TypeScripIcon () {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="512" viewBox="0 0 512 512" width="512"><rect height="512" rx="50" width="512"/><rect height="512" rx="50" width="512"/><path d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff"/></svg>
    )
}

function JavaScripIcon () {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="256px" height="256px" viewBox="0 0 256 256" preserveAspectRatio="xMinYMin meet"><path d="M0 0h256v256H0V0z"/><path fill="#ffffff" d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/></svg>
    )
}

class FrameworkComponent extends React.Component<{ frameworks: Frameworks, extended?: boolean }, { selectedTab: string }> {
    private frameworkList: string[];

    constructor(props) {
        super(props);
        this.frameworkList = Object.keys(this.props.frameworks);
    }

    private renderIcon(frameworkString: string) {
        switch (frameworkString) {
            case 'html': return <i className="fab fa-html5 fa-2x" key={frameworkString}></i>;
            case 'css': return <i className="fab fa-css3-alt fa-2x" key={frameworkString}></i>;
            case 'sass': return <i className="fab fa-sass fa-2x" key={frameworkString}></i>;
            case 'angular': return <i className="fab fa-angular fa-2x" key={frameworkString}></i>;
            case 'js': return <JavaScripIcon key={frameworkString}  />;
            case 'typescript': return <TypeScripIcon key={frameworkString}  />;
            case 'wordpress': return <i className="fab fa-wordpress fa-2x" key={frameworkString}></i>;
            case 'firebase': return <FireBaseIcon key={frameworkString}  />;
            case 'node': return <i className="fab fa-node-js fa-2x" key={frameworkString}></i>;
            case 'react': return <i className="fab fa-react fa-2x" key={frameworkString}></i>;
        }
    }

    private renderText(frameworkString: string) {
        switch (frameworkString) {
            case 'html': return 'HTML';
            case 'css': return 'CSS';
            case 'sass': return 'SASS';
            case 'angular': return 'Angular.io';
            case 'js': return 'Javascript';
            case 'typescript': return 'Typescript';
            case 'wordpress': return 'Wordpress';
            case 'firebase': return 'Firebase';
            case 'node': return 'Node JS';
            case 'react': return 'React';
        }
    }

    private renderFramework(frameworkString: string) {
        return (
            <div className="flex space-between align-items-center extended" key={frameworkString}>
                <span>{ this.renderText(frameworkString)}</span>
                <span className="icon">{ this.renderIcon(frameworkString) }</span>
            </div>
        )
    }

    render() {
        return (
            <div className={`techs-used ${this.props.extended ? 'flex-column' : ''}`}>
                {this.frameworkList.map(frameworkString => this.props.extended ?
                    this.renderFramework(frameworkString) :
                    this.renderIcon(frameworkString))}
            </div>
        )
    }
}

export default FrameworkComponent;
