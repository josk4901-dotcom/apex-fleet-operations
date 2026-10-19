function Content({ title, email }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>Email: {email}</p>
    </section>
  );
}

export default Content;