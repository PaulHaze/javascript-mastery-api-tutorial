import { MantineProvider } from '@mantine/core';

import { Home } from 'pages/Home';

function App() {
  return (
    <MantineProvider>
      <Home />
    </MantineProvider>
  );
}

export default App;
