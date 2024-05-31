import { useState } from 'react';
import { AccountCreation } from './pages/account-creation';
import { HomePage } from './pages/UserPages/homePage.tsx';
import { AdminPage } from './pages/AdminPages/adminPage';

export function App() {
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [loggingAccount, setLoggingAccount] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Novo estado para navegação do admin

  const [inputValue, setInputValue] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simulando lógica de login
    if (inputValue === 'admin@example.com') {
      setIsAdmin(true); // Navegar para a página de admin se o email for de admin
    } else {
      setLoggingAccount(true); // Navegar para a página do usuário comum
    }
  };

  if (creatingAccount) {
    return <AccountCreation />;
  }

  if (loggingAccount) {
    return <HomePage />;
  }

  if (isAdmin) {
    return <AdminPage />;
  }

  return (
    <div className='pt-40 px-16 bg-black w-screen h-screen'>
      <div className='pb-20'>
        <h1 className='flex text-4xl self-center text-white gap-2.5'>
          <img src="src\assets\image.png" alt="logo" className='size-11' />
          food explorer
        </h1>
      </div>
      

      <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 w-full'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-white opacity-75'>Email</label>
            <input
              type="email"
              name="email"
              placeholder='Exemplo: exemplo@exemplo.com.br'
              className='bg-cyan-950 rounded-lg px-3.5 py-3 text-white opacity-60'
              value={inputValue}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="password" className='text-white opacity-75'>Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder='No mínimo 6 caracteres'
              className='bg-cyan-950 rounded-lg px-3.5 py-3 text-white opacity-60'
            />
          </div>

          <div>
            <button
              type="submit"
              className='text-white text-base font-medium py-3 px-8 w-full rounded bg-red-900'>
              Entrar
            </button>
          </div>
          <div className='flex justify-center'>
            <button
              type="button"
              onClick={() => setCreatingAccount(true)}
              className='text-white text-base font-medium'>
              Criar uma conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
