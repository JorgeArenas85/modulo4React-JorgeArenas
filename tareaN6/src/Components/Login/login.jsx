import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validación de campos
        if (!username || !password) {
            setError('Por favor ingrese nombre de usuario y contraseña.');
            return;
        }
        // Limpia el error si todo está validado
        setError('');
        // Aquí iría la lógica para enviar los datos de inicio de sesión al servidor
        console.log('Datos enviados:', { username, password });
    };

    return (
        <div>
            <h2>Inicio de Sesión</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre de Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
