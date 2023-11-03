import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h4 className='oprojektu'> <a href='./index.html'> O projektu </a> </h4>
      <div className='team'>
        <h4> <a href=''> Hedvika Reichlová </a> </h4>
        <h4> <a href=''> Tereza Smolová </a> </h4>
        <h4> <a href=''> Kristýna Jozífová </a> </h4>
      </div>
    </header>
    <main>
      <p></p>
    </main>
    <footer>
      <p>
        Hedvika Reichlová, Tereza Smolová, Kristýna Jozífová - Czechitas,
        Digitální akademie: Web
      </p>
    </footer>
  </div>
);
