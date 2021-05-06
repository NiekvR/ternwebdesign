import { getCV, getProjects } from '../lib/projects.service';
import React from 'react';
import { Project } from '../models/project';
import CurriculumVitaeComponent from '../components/curriculum-vitae-component';
import ProjectDetails from '../components/project-details';
import { CurriculumVitae } from '../models/curriculum-vitae';
import Layout from '../components/layout';
import Head from 'next/head';


export function getStaticProps() {
    const projects = getProjects();
    const cv = getCV();
    return {
        props: {
            projects,
            cv
        }
    }
}

class Home extends React.Component<{ projects: Project[], cv: CurriculumVitae }, { extraContentOpen: boolean }> {
    constructor(props) {
        super(props);
        this.state = {extraContentOpen: false};
    }

    openExtraContent() {
        this.setState({ extraContentOpen: true });
    }

    closeExtraContent() {
        this.setState({ extraContentOpen: false })
    }

    render() {
        return (
            <>
                <Head>
                    <title>Tern Webdesign</title>
                    <meta name="description" content="TernWebdesign, voor het bedenken, ontwerpen en maken
                    van webapplicaties." />
                    <meta property="og:title" content="Tern Webdesign" key="title" />
                    <meta property="og:description" content="TernWebdesign, voor het bedenken, ontwerpen en maken
                    van webapplicaties." key="description" />
                </Head>
                <div className="side-bar left"></div>
                <Layout home={true} open={this.state.extraContentOpen} openExtraContent={() => this.openExtraContent()}>
                    {this.props.projects.map((project: Project) => (
                        <ProjectDetails key={project.title} project={project}/>
                    ))}
                </Layout>
                <CurriculumVitaeComponent cv={this.props.cv} open={this.state.extraContentOpen} close={() => this.closeExtraContent()}/>
                <div className="side-bar right"></div>
            </>
        )
    }
}

export default Home;
