function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Hello, I'm a Computer Science Student
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto">
          I am passionate about technology, software development
          and building solutions that solve real-world problems.
        </p>

        <a
          href="#about"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Learn More
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-5">About Me</h2>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-600 leading-7">
            I am a Computer Science student interested in software development,
            cybersecurity and technology. I enjoy learning new programming
            languages and developing applications. My goal is to become a skilled
            software developer and build useful digital solutions.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-5">Experience</h2>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg">Personal Projects</h3>
          <p className="text-gray-500 mb-3">Software Development</p>

          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Developed web applications using React.</li>
            <li>Created responsive interfaces using HTML and CSS.</li>
            <li>Worked with Python for programming and data analysis.</li>
            <li>Practiced Git and GitHub for project management.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-5">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold">HTML</h3>
            <p className="text-gray-500 text-sm">Web structure</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold">CSS</h3>
            <p className="text-gray-500 text-sm">Web styling</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold">JavaScript</h3>
            <p className="text-gray-500 text-sm">Programming</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold">React</h3>
            <p className="text-gray-500 text-sm">Frontend development</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold">Python</h3>
            <p className="text-gray-500 text-sm">Programming & data analysis</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold">Git & GitHub</h3>
            <p className="text-gray-500 text-sm">Version control</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white border-t">
        <p className="text-sm text-gray-500">
          © 2026 My Portfolio. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App