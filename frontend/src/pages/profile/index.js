import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const history = useHistory();
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    if (!ongId) handleLogout();
    
    useEffect( () => {
        api.get('profile', {
            headers: {
                authorization: ongId,
            }
        }).then( response => {
            setIncidents(response.data);
        })
    }, [ongId, ongName]);

    async function handleDeleteIncident(id) {
        try {
          await api.delete(`incidents/delete/${id}`, {
            headers: {
                authorization: ongId,
            }
          });  
          
          setIncidents(incidents.filter(incident => incident.id !== id));

        } catch (error) {
            alert('Erro ao deletar o caso. Tente novamente!');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <Link to="/">
                    <img src={logoImg} alt="be The Hero"/>
                </Link>
                <span>Bem vinda, {ongName}!</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={16} color="#E02041" />
                </button>
                
            </header>

            <h1>Casos cadastrados</h1>  
            <ul>
                {incidents.map( incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{ Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL' }).format(incident.value) }</p>
                        
                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>   
                ) )}
            </ul>
        </div>
    );
}