import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, I'm Tanya 🎨</h1>
        <p>A creative UI/UX & Web Designer passionate about building intuitive and visually stunning user experiences.</p>
      </header>

      <main style={{ padding: '20px' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2>🌟 Featured Projects</h2>
          <ul>
            <li><strong>Briartics:</strong> A healthcare platform with real-time doctor chat and appointment booking.</li>
            <li><strong>FrozenWala:</strong> A modern food delivery UI with sleek user flows and product cards.</li>
            <li><strong>Design Showcase:</strong> A collection of landing pages and dashboard UIs made with Figma & Canva.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2>🎨 Design Skills </h2>
          <p>Figma, Canva, HTML/CSS, Flexbox, Responsive Design, UX Research, Prototyping</p>
        </section>
        <section style={{ marginBottom: '40px' }}>
          <h2>soft  skills</h2>
          <p>problem solving</p>
          <p>technical code</p>
        </section>

        <section>
          <h2>📬 Let’s Connect</h2>
          <p>Email: tanya@example.com</p>
          <p>Dribbble: <a href="https://dribbble.com/tanyadesigns" target="_blank" rel="noopener noreferrer">dribbble.com/tanyadesigns</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/tanyadesigns" target="_blank" rel="noopener noreferrer">linkedin.com/in/tanyadesigns</a></p>
        </section>
      </main>

      <footer style={{ marginTop: '50px', padding: '20px', backgroundColor: '#282c34', color: '#fff' }}>
        <p>© 2025 Tanya. Designed with 💛 and attention to detail.</p>
      </footer>
    </div>
  );
}

export default App;
