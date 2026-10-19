import MyFirstApp from './MyFirstAPP.jsx';
import Skills from './skills.jsx';
import Projects from './projects.jsx';
import Experience from './Experince.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <MyFirstApp name="Joshua" />

      <Skills
        title="My Skills"
        skills={["HTML", "CSS", "JavaScript", "React"]}
      />

      <Projects
        title="My Projects"
        projects={[
          "Online Shopping Website"
        ]}
      />

      <Experience
        title="My Experience"
        description="Building web development projects"
      />

      <Content
        title="Contact Me"
        email="joshua@example.com"
      />

      <Footer year={2026} />
    </div>
  );
}

export default App;