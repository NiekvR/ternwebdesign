import { PROJECTS } from '../data/tern-projects';
import { Project } from '../models/project';
import { CURRICULUMVITAE } from '../data/luminis-curriculum-vitae';
import { CurriculumVitae, Experience } from '../models/curriculum-vitae';

export function getProjects(): Project[] {
    const projects: Project[] = PROJECTS;
    return projects;
}

export function getAllProjectIds() {
    const projects: Project[] = PROJECTS;

    return projects.map(project => {
        return {
            params: {
                id: getTitleId(project.title)
            }
        }
    })
}

export function getProjectData(id) {
    const projects = getProjects();

    return { ...projects.find(project => getTitleId(project.title) === id) };
}

export function getTitleId(title) {
    return title.replace(/\s/, '').toLowerCase();
}

export function getCVEducation(): Experience[] {
    return getCV().education;
}

export function getCVWork(): Experience[] {
    return getCV().work;
}

export function getCV(): CurriculumVitae {
    const cv: CurriculumVitae = CURRICULUMVITAE;
    return cv;
}
