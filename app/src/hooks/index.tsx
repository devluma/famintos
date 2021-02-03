import React from 'react';

// Adicionar hook de autenticação
// import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
  <>
    { children }
  </>
);

export default AppProvider;
