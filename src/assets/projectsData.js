export const projects = [
  {
    name: 'TaskPro',
    page: 'https://annanadvor.github.io/taskPro_project-group-6/',
    repository: 'https://github.com/AnnaNADVOR/taskPro_project-group-6',
    technologies: 'React',
    category: 'Team Project',
    date: 'March 2024',
    annotation:
      'A convenient web application for planning tasks and monitoring their deadlines.',
    features: [
      'intuitive interface',
      'responsive design',
      'theming',
      'task tracking',
      'task filtering',
      'task moving',
      'user authentication',
      'profile customization',
    ],
    myRole: [
      {
        roleName: 'Team Lead',
        roleDescription:
          'consulting the team, monitoring work, accepting pool requests, configuring the repository, connecting fonts, routing, working with endpoints.',
      },
      {
        roleName: 'Front-end Developer',
        roleDescription:
          'working with forms for creating/editing cards with tasks, using Formik and Yup, filtering tasks, moving tasks between columns, working with the React Date Picker library',
      },
    ],
  },

  {
    name: 'PhoneBook',
    page: 'https://annanadvor.github.io/goit-react-hw-08-phonebook/',
    repository: 'https://github.com/AnnaNADVOR/goit-react-hw-08-phonebook',
    technologies: 'React',
    category: 'Homework Project',
    date: 'December 2023',
    annotation:
      'React application for saving and deleting contacts, searching saved contacts by keyword, register, login and update the user, work with a private collection of contacts.',
    features: ['routing', 'code splitting', 'use of React Hooks'],
    myRole: [
      {
        roleName: 'Front-end Developer',
        roleDescription: '',
      },
    ],
  },

  {
    name: 'YourEnergy',
    page: 'https://worldofvictory.github.io/jrIT.Group-project/favorites.html',
    repository: 'https://github.com/worldofvictory/jrIT.Group-project',
    technologies: 'HTML, CSS, JavaScript',
    category: 'Team Project',
    date: 'October 2023',
    annotation: 'A two-page website for finding exercises for sports.',
    features: [
      'responsive design',
      'convenient scroll up',
      'clear navigation between pages',
      'filter',
      'keyword search',
      'pagination',
      'saving/deleting favorite exercises',
    ],
    myRole: [
      {
        roleName: 'Scrum Master',
        roleDescription:
          'allocation of tasks, filling the Trello board, organizing daily meetings, control of task deadlines, helping with code',
      },
      {
        roleName: 'Front-end Developer',
        roleDescription:
          'developing the Favorites page, working with the tui-pagination library, using Local Storage to getting/deleting selected favorite exercises and to getting quote of the day',
      },
    ],
  },
];
