import React from 'react';
import Project from './project';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);

        var projects =  [
            {
                name: 'PL 92/2019',
                description: 'Dá nova redação ao art. 1º da Lei Municipal nº 3.017, de 19 de junho de 2017, que Institui o Dia Municipal da Pessoa com Surdocegueira.',
                link: 'https://sapl.camaranh.rs.gov.br/materia/64952'
            }
        ]

        this.state = {
            projects: projects,
            filtered: projects
        }
    }

    render() {
        return (
         <div>
             {this.state.projects.map((project) => {
                 return <Project name={project.name} description={project.description} link={project.link} />
             })}
         </div>   
        )
    }
}