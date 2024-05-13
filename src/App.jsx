/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import './App.css'
import SkillsGrid from './SkillsGrid';
import ProjectsGrid from './ProjectsGrid';
function App() {
    const [language, setLanguage] = useState('ENG');
    const programmingLanguageList = [
        {
            image: "assets/c-sharp.svg",
            name: "C#"
        },
        {
            image: "assets/javascript.svg",
            name: "Javascript"
        },
        {
            image: "assets/typescript-icon.svg",
            name: "Typescript"
        },
        {
            image: "assets/python.svg",
            name: "Python"
        }
    ];

    const backendTechnologiesList = [
        {
            image: "assets/dotnet.svg",
            name: ".NET"
        },
        {
            image: "assets/nodejs-icon.svg",
            name: "NodeJS"
        },
        {
            image: "assets/nestjs.svg",
            name: "NestJS"
        },
        {
            image: "assets/graphql.svg",
            name: "GraphQL"
        },
        {
            image: "assets/postgresql.svg",
            name: "PostgreSQL"
        }
    ];

    const frontendTechnologiesList = [
        {
            image: "assets/html-5.svg",
            name: "HTML5"
        },
        {
            image: "assets/css-3.svg",
            name: "CSS3"
        },
        {
            image: "assets/react.svg",
            name: "React"
        },
        {
            image: "assets/bootstrap.svg",
            name: "Bootstrap"
        },
        {
            image: "assets/figma.svg",
            name: "Figma"
        }
    ];

    const toolsList = [
        {
            image: "assets/git-icon.svg",
            name: "GIT"
        },
        {
            image: "assets/visual-studio-code.svg",
            name: "Visual Studio Code"
        },
        {
            image: "assets/visual-studio.svg",
            name: "Visual Studio"
        },
        {
            image: "assets/pycharm.svg",
            name: "PyCharm"
        },
        {
            image: "assets/scrum.svg",
            name: "SCRUM"
        }
    ];

    const languagesList = [
        {
            image: "assets/ar.svg",
            name: language === 'ENG' ? "Spanish (Native)" : "Español (Nativo)"
        },
        {
            image: "assets/gb.svg",
            name: language === 'ENG' ? "English (B2)" : "Inglés (B2)"
        },
        {
            image: "assets/de.svg",
            name: language === 'ENG' ? "German (A1)" : "Alemán (A1)"
        }
    ];

    const projects = [
        {
            name: "AReNe (Asociación de Rehabilitación Neurológica)",
            image: "assets/logo-arene-brand.svg",
            description: language === 'ENG' ? `I participated in the development of an information system for AreNe that allows the organization
                to manage its patients, workers, areas, shifts and medical history.I carried out information gathering
                tasks for the subsequent system analysis and design and development tasks.` :
                `Particpé del desarrollo de un sistema de información para AreNe que le permite a la 
                organización realizar una gestión de sus pacientes, trabajadores, áreas, turnos e 
                historial clínico. Realicé tareas de relevamiento de información para el posterior 
                análisis y diseño del sistema y tareas de desarrollo`,
            technologies: [{
                tech: "React",
                color: "#3998b6"
            },
            {
                tech: "NestJS",
                color: "#ea2864"
            },
            {
                tech: "GraphQL",
                color: "#f6009b"
            }],
            links: [
                {
                    href: "https://arene.vercel.app/",
                    icon: "fa-solid fa-laptop",
                    text: language === 'ENG' ? "View Live Project" : "Ver Demo",
                },
                {
                    href: "https://github.com/RodrigoRomero2308/arene-front",
                    icon: "fa-brands fa-github",
                    text: language === 'ENG' ? "View Code" : "Ver Código",
                }
            ]
        },
        {
            name: language === 'ENG' ? "Research Group in Operations Management and Logistics" : "Grupo de Investigación en Gestión de Operaciones y Logística",
            image: "assets/logo-utn.png",
            description: language === 'ENG' ? `I participated in the development of a project in collaboration with the company Pecarí Implementos,
                where we created a simulation model to optimize the production process of vibratory compactors.`:
                `Participé del desarrollo de un proyecto en colaboración con la empresa Pecarí Implementos,
                 en donde creamos un modelo de simulación para optimizar el proceso de producción de vibrocompactadores`,
            technologies: [{
                tech: "Excel",
                color: "#0e6f3a"
            },
            {
                tech: "SIMIO",
                color: "#03a952"
            }],
            links: [
                {
                    href: "https://www.instagram.com/giol_utnfrcu/",
                    icon: "fa-brands fa-instagram",
                    text: "View Research Group",
                }
            ]
        },
    ]



    const changeLanguage = () => {
        if (language === 'ENG') {
            setLanguage('ESP');
        } else {
            setLanguage('ENG');
        }
    }


    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="navbar-left">
                        <h1>ENZO PREDIGER</h1>
                    </div>
                    {language === 'ENG' ? (
                        <div className="navbar-right">
                            <ul>
                                <li><a href="#about">ABOUT</a></li>
                                <li><a href="#studies">STUDIES</a></li>
                                <li><a href="#skills">SKILLS</a></li>
                                <li><a href='#projects'>PROJECTS</a></li>
                                <li>
                                    <button onClick={() => changeLanguage()} className="navbar-btn">{language}</button>
                                </li>
                            </ul>
                        </div>)
                        : (
                            <div className="navbar-right">
                                <ul>
                                    <li><a href="#about">SOBRE MÍ</a></li>
                                    <li><a href="#studies">EDUCACIÓN</a></li>
                                    <li><a href="#skills">HABILIDADES</a></li>
                                    <li><a href='#projects'>PROYECTOS</a></li>
                                    <li>
                                        <button onClick={() => changeLanguage()} className="navbar-btn">{language}</button>
                                    </li>
                                </ul>
                            </div>)
                    }
                </nav>
            </header>

            <section id="about">
                <div className="about-content">
                    <img src="assets/Profile-NoBackground.png" alt="Profile picture" />
                    {
                        language === 'ENG' ? (
                            <div className="about-text">
                                <h1><i className="fa-solid fa-person"></i> ABOUT ME</h1>
                                <p>Hi! &#x1F44B; My name is Enzo</p>
                                <p>
                                    &#x1F4BB; I'm a software developer from Concepción del Uruguay,
                                    Entre Ríos, Argentina.
                                </p>
                                <p>
                                    &#x1F4D6; I'm currently studying Information Systems Engineering at
                                    UTN.
                                </p>
                                <p>&#x1F393; In 2022, I graduated as a University Systems Analyst.</p>
                                <p>
                                    &#x1F64B; Find out more about me on my GitHub, my LinkedIn profile
                                    or download my CV.
                                </p>
                                <div className="about-buttons">
                                    <a
                                        href="https://www.linkedin.com/in/enzo-prediger/"
                                        target="_blank"
                                    >
                                        <button className="about-btn">
                                            <i className="fa-brands fa-linkedin"></i> LinkedIn
                                        </button>
                                    </a>
                                    <a href="/assets/[ENG]CV-EnzoPrediger.pdf" target="_blank">
                                        <button className="about-btn">
                                            <i className="fa-solid fa-file-arrow-down"></i> Download CV
                                        </button>
                                    </a>
                                    <a href="https://github.com/enzodp9" target="_blank">
                                        <button className="about-btn">
                                            <i className="fa-brands fa-github"></i> GitHub
                                        </button>
                                    </a>
                                </div>
                            </div>
                        )
                            :
                            (
                                <div className="about-text">
                                    <h1><i className="fa-solid fa-person"></i> SOBRE MÍ</h1>
                                    <p>Hola! &#x1F44B; Mi nombre es Enzo</p>
                                    <p>
                                        &#x1F4BB; Soy un programador de Concepción del Uruguay, Entre Ríos, Argentina.
                                    </p>
                                    <p>
                                        &#x1F4D6; Me encuentro estudiando Ingeniería en Sistemas de Información en UTN.
                                    </p>
                                    <p>&#x1F393; En 2022, me gradué como Analista Universitario de Sistemas.</p>
                                    <p>
                                        &#x1F64B; Obtenga más información sobre mí en mi GitHub, mi LinkedIn o descarga mi CV.
                                    </p>
                                    <div className="about-buttons">
                                        <a
                                            href="https://www.linkedin.com/in/enzo-prediger/"
                                            target="_blank"
                                        >
                                            <button className="about-btn">
                                                <i className="fa-brands fa-linkedin"></i> LinkedIn
                                            </button>
                                        </a>
                                        <a href="/assets/[ESP]CV-EnzoPrediger.pdf" target="_blank">
                                            <button className="about-btn">
                                                <i className="fa-solid fa-file-arrow-down"></i> Descargar CV
                                            </button>
                                        </a>
                                        <a href="https://github.com/enzodp9" target="_blank">
                                            <button className="about-btn">
                                                <i className="fa-brands fa-github"></i> GitHub
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            )
                    }

                </div>
            </section>

            <section id="studies">
                {language === 'ENG' ? (
                    <div className="studies-content">
                        <h1><i className="fa-solid fa-graduation-cap"></i> STUDIES</h1>
                        <ul>
                            <li>
                                <h3>
                                    University Analyst in Information Systems (Intermediate Title)
                                </h3>
                                <p>Universidad Tecnológica Nacional</p>
                                <p>2018-2022</p>
                            </li>
                            <li>
                                <h3>OracleONE Frontend Training</h3>
                                <p>Oracle</p>
                                <p>2022-2023</p>
                            </li>
                            <li>
                                <h3>Information Systems Engineer</h3>
                                <p>Universidad Tecnológica Nacional</p>
                                <p>2018-Act.</p>
                            </li>
                        </ul>
                    </div>
                ) :
                    (
                        <div className="studies-content">
                            <h1><i className="fa-solid fa-graduation-cap"></i> EDUCACIÓN</h1>
                            <ul>
                                <li>
                                    <h3>
                                        Analista Universitario de Sistemas de Información (Título intermedio)

                                    </h3>
                                    <p>Universidad Tecnológica Nacional</p>
                                    <p>2018-2022</p>
                                </li>
                                <li>
                                    <h3>Formación en FrontEnd de OracleONE</h3>
                                    <p>Oracle</p>
                                    <p>2022-2023</p>
                                </li>
                                <li>
                                    <h3>Ingeniero en Sistemas de Información</h3>
                                    <p>Universidad Tecnológica Nacional</p>
                                    <p>2018-Act.</p>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </section>

            <section id="skills">
                <div className="skills-content">
                    <h1><i className="fa-solid fa-gear"></i> {language === 'ENG' ? "SKILLS" : "HABILIDADES"}</h1>
                    <SkillsGrid title={language === 'ENG' ? "PROGRAMMING LANGUAGES" : "LENGUAJES DE PROGRAMACIÓN"} skillList={programmingLanguageList} />
                    <SkillsGrid title={language === 'ENG' ? "BACKEND TECHNOLOGIES" : "TECNOLOGÍAS BACKEND"} skillList={backendTechnologiesList} />
                    <SkillsGrid title={language === 'ENG' ? "FRONTEND TECHNOLOGIES" : "TECNOLOGÍAS FRONTEND"} skillList={frontendTechnologiesList} />
                    <SkillsGrid title={language === 'ENG' ? "TOOLS" : "HERRAMIENTAS"} skillList={toolsList} />
                    <SkillsGrid title={language === 'ENG' ? "LANGUAGES" : "IDIOMAS"} skillList={languagesList} />
                </div>
            </section>

            <section id="projects">
                <div className="projects-content">
                    <h1><i className="fa-solid fa-briefcase"></i> PROJECTS</h1>
                    <ProjectsGrid projects={projects} />
                </div>
            </section>

            <footer className="footer">
                <ul className="socials">
                    <li>
                        <a href="https://www.linkedin.com/in/enzo-prediger/" target="_blank">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/enzodp9" target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto: enzodprediger@gmail.com" target="_blank">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/enzodp9/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <p>Enzo Prediger &copy; 2024</p>
            </footer>
        </>
    );
}

export default App;
