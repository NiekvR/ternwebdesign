export class CurriculumVitae {
  name: string;
  personalia: Personalia;
  education: Experience[];
  work: Experience[];
  roles: Skill[];
  programmingLanguages: Skill[];
  methods: Skill[];
  frameworks: Framework;
  profielschets: string[];
  projects: Project[];
}


export class Personalia {
  function: string;
  city: string;
  birthDate: string;
  nationality: string;
  languages: string[];
}


export class Experience {
  name: string;
  startYear: string;
  endYear: string;
}

export class Skill {
  name: string;
  skill: number;
}

export class Framework {
  backend: Skill[];
  frontend: Skill[];
  continuousIntegration: Skill[];
  versionControl: Skill[];
}

export class Project {
  periode: string;
  opdrachtgever: string;
  rol: string;
  vaardigheden: string;
  situatie: string;
  werkzaamheden: string
}
