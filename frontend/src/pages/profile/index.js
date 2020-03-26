import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="profile-container">
            <header>
                <Link to="/">
                    <img src={logoImg} alt="be The Hero"/>
                </Link>
                <span>Bem vinda, APAD!</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={16} color="#E02041" />
                </button>
                
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
            <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste...</p>

                    <strong>VALOR:</strong>
                    <p>R$ 000,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste...</p>

                    <strong>VALOR:</strong>
                    <p>R$ 000,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste...</p>

                    <strong>VALOR:</strong>
                    <p>R$ 000,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste...</p>

                    <strong>VALOR:</strong>
                    <p>R$ 000,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste...</p>

                    <strong>VALOR:</strong>
                    <p>R$ 000,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                </button>
                </li>
            </ul>
        </div>
    );
}