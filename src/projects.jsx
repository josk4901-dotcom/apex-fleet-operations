function projects({ title, projects }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </section>
  );
}

export default projects;