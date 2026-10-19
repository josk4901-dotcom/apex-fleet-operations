function skills({ title, skills }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default skills;