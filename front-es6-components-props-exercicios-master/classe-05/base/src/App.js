import './app.css';

import CookieImage from './assets/cookie.svg';
import AlertImage from './assets/alert.svg';

import Card from './components/Card'
function App() {
  return (
    <>
      <Card

        image={CookieImage}
        btnColor="red"
        btnText="Tudo Bem!"
      >
        <span>Nós utilizamos cookies para melhorar
          <br />
          nossa UX, analytics e marketing.
        </span>
      </Card>
      <Card

        image={AlertImage}
        btnColor="blue"
        btnText="Extender Login"
      >
        <span>Você será deslogado
          <br />
          imediatamente!
        </span>
      </Card>
    </>
  );
}

export default App;
