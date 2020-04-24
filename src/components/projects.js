import React from 'react';
import Project from './project';
import Pagination from './pagination';
import api from "../services/api";

export default class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            filtered: [],
            pagination: {}
        }
    }

    componentDidMount() {
      this.loadProjects();
    }

    loadProjects = async (page = 1) => {
      console.log("getting page", page)
      const response = await api.get(`/projects?page=${page}`);

      const { projects, ...pagination } = response.data;

      this.setState({ projects, pagination });
    }

    prevPage = () => {
      const { page, ...pagination } = this.state.pagination;

      if (page === 1) return;

      const prevPageNumber = page - 1;

      this.loadProjects(prevPageNumber);
    }

    nextPage = () => {
      const { page, ...pagination } = this.state.pagination;

      if (page === pagination.total_pages) return;

      const nextPageNumber = page + 1;

      this.loadProjects(nextPageNumber);
    }

    render() {
      const pagination = this.state.pagination;

      return (
       <div>
           {this.state.projects.map((project) => {
               return <Project name={project.name} description={project.description} link={project.link} key={project.name} />
           })}

           <Pagination
              prevPage={this.prevPage}
              nextPage={this.nextPage}
              pagination={this.state.pagination}
            />

       </div>
      )
    }
}

