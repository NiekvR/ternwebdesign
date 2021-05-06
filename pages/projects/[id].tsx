import { getAllProjectIds, getProjectData } from '../../lib/projects.service';
import Layout from '../../components/layout';
import { Project } from '../../models/project';
import React from 'react';
import Image from 'next/image';
import classNames from 'classNames';
import Head from 'next/head';

export async function getStaticPaths() {
    const paths = getAllProjectIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const projectData = getProjectData(params.id)
    return {
        props: {
            projectData
        }
    }
}

class ProjectDetail extends React.Component<{ projectData: Project }, { aClass: string }> {
    constructor(props) {
        super(props);

        this.state = {
            aClass: classNames({
                'blue': this.props.projectData.color === '#55B6D7',
                'green': this.props.projectData.color === '#BED63A',
                'dark-green': this.props.projectData.color === '#76B542',
            })
        }
    }

    render() {
        return (
            <>
                <Head>
                    <title>Tern Webdesign - {this.props.projectData.title}</title>
                    <meta property="og:title" content={`Tern Webdesign - ${this.props.projectData.title}`} key="title" />
                    <meta property="og:description" content={this.props.projectData.excerpt} key="description" />
                </Head>
                <div className="side-bar left"></div>
                <Layout home={false} frameworks={this.props.projectData.frameworks}>
                    <div className="detail-header">
                        <Image
                            priority
                            src={this.props.projectData.headerImage}
                            alt="logo ternwebdesign"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="detail-content">
                        <h1>{this.props.projectData.title}</h1>
                        <div className="flex content">
                            <div className="flex-50 text-justify" >
                                <div dangerouslySetInnerHTML={{ __html: this.props.projectData.text }}></div>
                                {   !!this.props.projectData.url ? (
                                        <div className="flex justify-content-center align-items-end flex-1">
                                            <a href={this.props.projectData.url} className={this.state.aClass} target="_blank">{ 'Ga naar site' }</a>
                                        </div>
                                    ) : null
                                }
                            </div>
                            {
                                !!this.props.projectData.logo ? (
                                    <div className="flex-50 flex align-items-start justify-content-center">
                                        <Image
                                            priority
                                            src={this.props.projectData.logo}
                                            alt={`logo ${this.props.projectData.title}`}
                                            height={150}
                                            width={150}
                                        />
                                    </div>
                                ) : null
                            }
                        </div>
                        {
                            !!this.props.projectData.detailImage ? (
                                <Image
                                    priority
                                    src={this.props.projectData.detailImage}
                                    alt="logo ternwebdesign"
                                    height={300}
                                    width={600}
                                />
                            ) : null
                        }
                    </div>
                </Layout>
                <div className="side-bar right"></div>
            </>
        )
    }
}

export default ProjectDetail;
