export const PROJECTS = [
  {
    stack: 'full-stack',
    headerImage: '/images/kuikenteller.jpg',
    title: 'Kuiken Teller',
    excerpt: 'Een PWA voor een citizens-science project om zoveel mogelijk waarnemingen van eendenkuikens te vergaren.',
    text: '<p>Deze applicatie is gemaakt om te onderzoeken of de achteruitgang van de wilde eend iets te maken heeft met de overleving van hun kuikens. Het project is begonnen in 2015 als een simpel webformulier en is in 2020 helemaal vernieuwd als Progressive Web Applicatie welke ook op de mobiele telefoon geïnstalleerd kan worden.</p><p>Dit jaar zijn er al meer dan 10000 waarnemingen ingestuurd.</p>',
    frameworks: {
      html: true,
      sass: true,
      angular: true,
      typescript: true,
      firebase: true,
    },
    size: 'lg',
    color: '#55B6D7',
    detailImage: '/images/kuikenteller_detail.png',
    url: 'https://kuikenteller.org',
    logo: '/images/kuiken_teller_logo.png'
  },
  {
    stack: 'frontend',
    headerImage: '/images/veldweekend.jpg',
    title: 'Veldweekend',
    excerpt: 'Een digitaal programmaboek voor een weekendje weg',
    text: '<p>Een oldskool website (html, css en js) om een digitaal programmaboekje te maken. Het maakt gebruik van alle mogelijkheden die het web bied. De wandelingen kunnen in detail bekeken worden in google maps. Het overzicht van de vogelsoorten in het gebied is natuurlijk niet compleet zonder geluid en de sudoku hoeft niet met de pen worden ingevuld.</p>',
    frameworks: {
      html: true,
      css: true,
      js: true,
    },
    size: 'sm',
    color: '#76B542',
    detailImage: '/images/veldweekend_detail.png',
    url: 'http://vanrabenswaaij.nl/veldweekend/',
    height: 500
  },
  {
    stack: 'frontend',
    headerImage: '/images/header_voetreflex_nicole.jpg',
    title: 'Voetreflextherapie Nicole',
    excerpt: 'Website voor de voetreflextherapie praktijk van Nicole Nuijten',
    text: '<p>De responsive website van Nicole is volledige ontworpen en gebouwd door TernWebdesign en is een angular.io app, gehost in firebase en maakt gebruikt van firebase functions.</p>',
    frameworks: {
      html: true,
      sass: true,
      angular: true,
      js: true,
    },
    size: 'md',
    color: '#76B542',
    detailImage: '/images/website_nicole.png',
    url: 'https://voetreflexzonetherapienicole.nl/'
  },
  {
    stack: 'frontend',
    headerImage: '/images/biologie_in_het_werkveld.jpg',
    title: 'Biologie in het Werkveld',
    excerpt: 'Tool voor docenten van de biologie in het werkveld cursussen om les-content bij studenten te krijgen.',
    text: '<p>Deze website maakt gebruik van wordpress om docenten de mogelijkheid te bieden mededelingen te versturen, presentaties te delen of extra lescontent te verschaffen.</p><p>De basis van deze website zijn een aantal html, css en javascript templates die doormiddel van php in wordpress worden geladen.</p>',
    frameworks: {
      html: true,
      css: true,
      js: true,
      php: true,
      wordpress: true
    },
    size: 'md',
    color: '#BED63A',
    detailImage: '/images/biologieInHetWerkveld_detail.png',
    url: 'http://biologieinhetwerkveld.nl/'
  },
  {
    stack: 'full-stack',
    headerImage: '/images/tern.jpg',
    title: 'Tern Support Systeem',
    excerpt: 'Applicatie om mogelijke vragen of issues vanuit applicaties overzichtelijk te kunnen managen.',
    text: '<p>Om ondersteuning van applicaties makkelijker te maken is de support app ontwikkeld. De applicatie bestaat uit twee onderdelen.</p>' +
      '<p>Een library die elke angular applicatie kan gebruiken om het support systeem aan de kant van de klant te instaleren. Dit bevat een ticket-formulier om nieuwe vragen te stellen en, zodra het ticket is ingediend een basic chat systeem zodat er direct gecommuncieerd kan worden met de developers van Tern.</p>' +
      '<p>Deze library is direct aangesloten met het admin systeem waar alle tickets binnen komen en de developer bij Tern direct laat communiceren met de klant.</p>',
    frameworks: {
      html: true,
      sass: true,
      typescript: true,
      angular: true,
      firebase: true
    },
    size: 'md',
    color: '#55B6D7',
    detailImage: '/images/ternSupportSystem_detail.png',
    height: 350
  },
  {
    stack: 'full-stack',
    headerImage: '/images/intoMyGarden.png',
    title: 'Into My Garden',
    excerpt: 'Digitaal tuinarchief, welke planten staan waar in je tuin en wat voor onderhoud hebben ze nodig?',
    text: '<p>Upload de plattegrond van je tuin en start met het \"planten\" van je tuin planten.</p>' +
      '<p>Naast het overzicht waar welke plant in je tuin staat kun je ook alle informatie over je planten kwijt en het onderhoud dat moet gebeuren (en wanneer).</p>' +
      '<p>Dit is een angular.io applicatie die gebruik maakt van firebase voor authenticatie, database, storage and hosting.</p>',
    frameworks: {
      html: true,
      sass: true,
      typescript: true,
      angular: true,
      firebase: true
    },
    size: 'lg',
    color: '#55B6D7',
    detailImage: '/images/intoMyGarden_detail.png',
    url: 'https://intomygarden.nl/',
  }
  // {
  //   stack: 'frontend',
  //   headerImage: 'images/crocodile.jpg',
  //   title: 'GROCS',
  //   excerpt: '',
  //   text: '',
  //   frameworks: {
  //     html: true,
  //     sass: true,
  //     angular: true,
  //   },
  //   size: 'md',
  //   color: '#BED63A',
  //   detailImage: 'images/grocs.png',
  //   url: 'https://grocs-8f331.web.app',
  // },
];
