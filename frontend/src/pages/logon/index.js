import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const history = useHistory();
    const [id, setId] = useState('');
    
    async function handleLogin(e) {
        e.preventDefault();

        const data = {
            id
        };

        try {
            const response = await api.post('sessions', data);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            
            history.push('/profile');
        } catch (error) {
            alert('Acesso inválido, tente novamente.');
        }
        
    }


    return (
        <div className="logon-container">
            <section className="form">
                <Link to="/">
                    <img src={logoImg} alt="be The Hero"/>
                </Link>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID"
                        value={id}
                        onChange={ e => setId(e.target.value)} />
                    <button type="submit" className="button">Entrar</button>
                    
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt='Heroes' />
        </div>
    );
}
