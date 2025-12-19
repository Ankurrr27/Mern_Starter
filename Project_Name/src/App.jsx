import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => console.log('BACKEND:', data))
      .catch(err => console.error('ERROR:', err));
  }, []);

  return <h1>Frontend running</h1>;
}

export default App;
