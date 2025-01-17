import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
