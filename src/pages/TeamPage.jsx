import "../styles/JS_TeamPage.css"

const TeamPage = () => {
  return (
    <div className="p-5 mx-8 my-10">
      <div className="row">
        <div className="col-lg-4">
          <svg id="actor1" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
          <h2 className="fw-normal py-4">Andrea Paola</h2>
          <p>
            Andrea es experta en varios lenguajes de programación, incluyendo Python, JavaScript, y Java. Además, tiene experiencia en el desarrollo de aplicaciones web y móviles.  Ha trabajado en proyectos diversos, desde la creación de sistemas de gestión interna hasta el desarrollo de aplicaciones de cliente para grandes empresas.
          </p>
        </div>
        <div className="col-lg-4">
          <svg id="actor2" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
          <h2 className="fw-normal font-bold py-4">Daniel Andres</h2>
          <p>Daniel tiene más de siete años de experiencia en desarrollo frontend. Daniel es un maestro en HTML, CSS y JavaScript, y domina los principales frameworks frontend como React.js y Angular. Tiene una sólida comprensión de diseño UX/UI y utiliza herramientas como Figma y Sketch para crear prototipos y colaborar eficientemente con los diseñadores</p>
        </div>
        <div className="col-lg-4">
          <svg id="actor3" className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
          <h2 className="fw-normal py-4">Rafale Orozco</h2>
          <p>Rafael tiene una sólida trayectoria de diez años en el mundo de las bases de datos. Ha trabajado en empresas líderes como DataSolutions y Database Dynamics, Martín es experto en el diseño de bases de datos relacionales y no relacionales. Tiene experiencia con tecnologías como MySQL, PostgreSQL, MongoDB y Cassandra. Además, domina el lenguaje SQL y utiliza técnicas avanzadas para optimizar el rendimiento de las consultas.</p>
        </div>
      </div>
    </div>
  )
}
export default TeamPage