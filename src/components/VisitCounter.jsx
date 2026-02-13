import React, { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';

/**
 * VisitCounter Component
 * Fetches and displays the number of visits using the Counter API.
 */
const VisitCounter = () => {
    const [visits, setVisits] = useState('...');

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                // Using Counter API (v1) to increment and get the count
                // Namespace: anthonydcm1-portfolio, Key: visits
                const response = await fetch('https://api.counterapi.dev/v1/anthonydcm1-portfolio/visits/up');
                const data = await response.json();

                if (data && data.count !== undefined) {
                    setVisits(data.count.toLocaleString());
                } else {
                    setVisits('0');
                }
            } catch (error) {
                console.error('Erro ao buscar contador de visitas:', error);
                setVisits('N/A');
            }
        };

        fetchVisits();
    }, []);

    return (
        <div className="visit-counter" title="Total de visitas à página">
            <FaEye className="visit-icon" />
            <span className="visit-label">Visitas:</span>
            <span className="visit-count">{visits}</span>
        </div>
    );
};

export default VisitCounter;
