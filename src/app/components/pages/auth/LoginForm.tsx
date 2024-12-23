import React from 'react';

const LoginForm = () => {
  return (
    <form className="max-w-md bg-white p-8 mt-10 rounded-lg shadow-md">
      <h2 className="text-2xl mb-6 text-center">Iniciar Sesión</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Correo Electrónico</label>
        <input type="email" className="w-full p-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contraseña</label>
        <input type="password" className="w-full p-2 border rounded" required />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
