import React, { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import { supabase } from '../supabaseClient';

/**
 * VisitCounter Component
 * Fetches and increments the number of visits using Supabase.
 */
const VisitCounter = () => {
    const [visits, setVisits] = useState('...');

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                // Call the SQL function we created in Supabase
                const { data, error } = await supabase.rpc('increment_visits', { 
                    row_id: 'portfolio_visits' 
                });

                if (error) throw error;

                if (data !== null) {
                    setVisits(data.toLocaleString());
                } else {
                    setVisits('0');
                }
            } catch (error) {
                console.error('Erro ao buscar contador de visitas (Supabase):', error);
                setVisits('---');
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
