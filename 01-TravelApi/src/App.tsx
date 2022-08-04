import { MantineProvider, createEmotionCache } from '@mantine/core';

import { Home } from 'pages/Home';

const myCache = createEmotionCache({ key: 'mantine', prepend: false });

function App() {
  return (
    <MantineProvider emotionCache={myCache}>
      <Home />
    </MantineProvider>
  );
}

export default App;
