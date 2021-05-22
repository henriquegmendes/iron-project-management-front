import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_PROJECTS_API_URL,
    });

    this.api.interceptors.request.use(config => {
      console.log(config);

      config.headers.banana = 'maça'; // incluir este header "banana" em TODOS os requests

      return config; // após retornar o config ele inicia o request!
    }); // aqui conseguimos colocar qualquer informação dentro do request ANTES dele ser feito para a API!!!
  }

  getProjects = async () => {
    const { data } = await this.api.get('/projects');

    return data; // listagem de projetos
  }

  createProject = async projectData => {
    await this.api({
      url: '/projects',
      method: 'POST',
      data: projectData,
    });
  }

  signupUser = async (userData) => {
    
  }


}

export default new ApiService();

