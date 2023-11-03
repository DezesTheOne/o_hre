import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1>O projektu</h1>
    </header>
    <main>
      <p></p>
    </main>
    <footer>
      <p>Hedvika Reichlová, Tereza Smolová, Kristýna Jozífová - Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
