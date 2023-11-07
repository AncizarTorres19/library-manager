import { useEffect, useReducer } from 'react';
import { AuthContext } from './components/Auth/AuthContext'
import { authReducer } from './components/Auth/authReducer';
import { Navigation } from './routes/Navigation';

function App() {

  // Intentar cargar el usuario desde localStorage
  const storedUser = localStorage.getItem('user');
  const initialUser = storedUser ? JSON.parse(storedUser) : { logged: false };

  const [user, dispatch] = useReducer(authReducer, initialUser);

  useEffect(() => {
    try {
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      // Manejar el error aquí, por ejemplo, notificar al usuario o tomar medidas alternativas
      console.error('Error al acceder a localStorage:', error);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <Navigation />
    </AuthContext.Provider>
  )
}

export default App; 