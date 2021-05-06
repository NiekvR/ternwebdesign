import classNames from 'classnames';
import Image from 'next/image';
import Framework from './frameworks';
import Link from 'next/link';
import { getTitleId } from '../lib/projects.service';

export default function ProjectDetails({project}) {
    const projectClass = classNames({
        'item': true,
        'list': true,
        'sm': project.size === 'sm',
        'md': project.size === 'md',
        'lg': project.size === 'lg'
    });
    const tagClass = classNames({
       'tag': true,
       'blue': project.color === '#55B6D7',
       'green': project.color === '#BED63A',
       'dark-green': project.color === '#76B542',
    });
    const contentClass = classNames({
       'content': true,
       'blue': project.color === '#55B6D7',
       'green': project.color === '#BED63A',
       'dark-green': project.color === '#76B542',
    });

    return (
        <div className={projectClass}>
            <Link href={`/projects/${getTitleId(project.title)}`}>
                <div className={contentClass}>
                    <div className="content-image">
                        <Image
                            priority
                            src={project.headerImage}
                            alt={`${project.title} `}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className={tagClass}>{ project.stack }</div>
                    <div className="content-text">
                        <h1>
                            {project.title}
                        </h1>
                        <p>
                            {project.excerpt}
                        </p>
                    </div>
                    <Framework frameworks={project.frameworks} />
                </div>
            </Link>
        </div>
    )
}
