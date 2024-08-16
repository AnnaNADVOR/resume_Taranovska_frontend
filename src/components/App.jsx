import css from './App.module.css';
import photo from '../assets/photo.jpg';
import sprite from '../assets/sprite.svg';
import { projects } from '../assets/projectsData';

export const App = () => {
  return (
    <div className={css.main}>
      {/* --- Main content --- */}
      <div className={css.mainContent}>
        <div className={css.profile}>
          <h1 className={css.mainTitle}>Anna Taranovska</h1>
          <h2 className={css.position}>Front-end Developer</h2>
          <p>
            I am a diligent and persistent beginner in front-end development. I
            take responsibility for the tasks and work for the result.
            Furthermore, I am improving my tech and soft skills.
          </p>
        </div>
        <div className={css.projectSection}>
          <h3 className={css.title}>Project experience</h3>
          <ul className={css.projectList}>
            {projects.map(project => (
              <li className={css.projectItem} key={project.name}>
                <ul className={css.projectInfoList}>
                  <li
                    className={`${css.projectInfoItem} ${css.projectAccentItem}`}
                  >
                    <a
                      className={css.projectLink}
                      href={project.page}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  </li>
                  <li
                    className={`${css.projectInfoItem} ${css.projectAccentItem}`}
                  >
                    <a
                      className={css.projectLink}
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li
                    className={`${css.projectInfoItem} ${css.projectAccentItem}`}
                  >
                    <p>{project.technologies}</p>
                  </li>
                </ul>
                <ul className={css.projectInfoList}>
                  <li className={css.projectInfoItem}>GoIt</li>
                  <li className={css.projectInfoItem}>{project.category}</li>
                  <li className={css.projectInfoItem}>{project.date}</li>
                </ul>
                <p className={css.projectAnnotation}>{project.annotation}</p>
                <h5 className={css.projectInfoTitle}>Features</h5>
                <p className={css.projectFeatures}>
                  {project.features.join(', ')}
                </p>
                <h5 className={css.projectInfoTitle}>My Role</h5>
                {project.myRole.map(({ roleName, roleDescription }) => (
                  <p
                    className={css.roleDescription}
                    key={roleName + project.name}
                  >
                    <span className={css.roleName}>{roleName}: </span>
                    {roleDescription}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* -- SideBar -- */}
      <aside className={css.aside}>
        <div className={css.photoThumb}>
          <img className={css.photoThumb} src={photo} alt="my avatar" />
        </div>
        {/* --- contacts --- */}
        <div className={css.asideSection}>
          <h3 className={css.visuallyHidden}>Contacts</h3>
          <address className={css.address}>
            <ul>
              <li className={css.asideItem}>
                <a
                  className={css.contactLink}
                  href="tel:+380964977473"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0964977473
                </a>
              </li>
              <li className={css.asideItem}>
                <a
                  className={css.contactLink}
                  href="mailto:anjanadvorna@gmail.com"
                >
                  anjanadvorna@gmail.com
                </a>
              </li>
              <li className={css.asideItem}>
                <p>Kyiv, Ukraine</p>
              </li>
            </ul>
          </address>
          <ul className={css.socialLinkList}>
            <li className={css.socialLinkItem}>
              <a
                className={`${css.contactLink} ${css.socialLink}`}
                href="https://github.com/AnnaNADVOR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg>
                  <use href={`${sprite}#github-icon`}></use>
                </svg>
              </a>
            </li>
            <li className={css.socialLinkItem}>
              <a
                className={`${css.contactLink} ${css.socialLink}`}
                href="https://www.linkedin.com/in/anna-taranovska/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg>
                  <use href={`${sprite}#linkedin-icon`}></use>
                </svg>
              </a>
              {/* LinkedIn */}
            </li>
          </ul>
        </div>
        {/* --- Education --- */}
        <div className={css.educationSection}>
          <h3 className={css.title}>Education</h3>
          <ul className={css.asideList}>
            <li className={css.asideItem}>
              <h4 className={css.educationTitle}>IT School CoIT</h4>
              <h4 className={css.educationTitle}>Fullstack Developer</h4>
              <p>2023 - 2024</p>
            </li>
            <li className={css.asideItem}>
              <h4 className={css.educationTitle}>
                Zhytomyr Ivan Franko State University
              </h4>
              <h4 className={css.educationTitle}>
                Master's degree, Primary education
              </h4>
              <p>2015 - 2017</p>
            </li>
          </ul>
        </div>
        {/* --- Tech skills --- */}
        <div className={css.asideSection}>
          <h4 className={`${css.title} ${css.WhiteTitle}`}>Tech skills</h4>
          <ul className={css.asideList}>
            <li className={css.asideItem}>HTML5</li>
            <li className={css.asideItem}>CSS3</li>
            <li className={css.asideItem}>JavaScript</li>
            <li className={css.asideItem}>React</li>
            <li className={css.asideItem}>Adaptive design</li>
            <li className={css.asideItem}>GIT</li>
          </ul>
        </div>
        {/* --- Soft skills --- */}
        <div className={css.asideSection}>
          <h4 className={`${css.title} ${css.WhiteTitle}`}>Soft skills</h4>
          <ul className={css.asideList}>
            <li className={css.asideItem}>Attentive</li>
            <li className={css.asideItem}>Responsible</li>
            <li className={css.asideItem}>Adaptability</li>
            <li className={css.asideItem}>Communication</li>
          </ul>
        </div>
        {/* --- Languages --- */}
        <div className={css.asideSection}>
          <h4 className={`${css.title} ${css.WhiteTitle}`}>Languages</h4>
          <ul className={css.asideList}>
            <li className={css.asideItem}>English - Intermediate</li>
            <li className={css.asideItem}>Ukrainian - Native</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
