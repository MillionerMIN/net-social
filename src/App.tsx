import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div className='app'>
      net-social
      <input type='button' value='click' onClick={() => switchTheme()} />
    </div>
  );
}

export default App;
