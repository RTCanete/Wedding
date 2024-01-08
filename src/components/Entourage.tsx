import React from 'react';
import { useHandleBack } from '../utils';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles.css';

const Entourage: React.FC = () => {
    const handleBack = useHandleBack();

    return (
        <section className="center-container">

            <div className="entourage-container">
                <div className="individual-section">
                    <h3>PARENTS OF THE BRIDE:</h3>
                    <ul>
                        <li>JESUS RODRIGUEZ JR.</li>
                        <li>IMELDA RODRIGUEZ</li>
                    </ul>
                </div>

                <div className="individual-section">
                    <h3>PARENTS OF THE GROOM:</h3>
                    <ul>
                        <li>ROLANDO CAÑETE</li>
                        <li>LORNA CAÑETE</li>
                    </ul>
                </div>
            </div>
            <br />
            <div className="individual-section">
                <h3>PRINCIPAL WITNESSES:</h3>
                <div className="entourage-container">
                    <div className="brothers-section">
                        <ul>
                            <li>JESS ANTONIO</li>
                            <li>RONELIO TOCMO</li>
                            <li>MARION CARIÑO</li>
                            <li>ELMAR SARTE</li>
                        </ul>
                    </div>
                    <div className="sisters-section">
                        <ul>
                            <li>MARISA LEGASPI</li>
                            <li>MELITA FIDEL</li>
                            <li>CAROL FLORES</li>
                            <li>MARICAR MAGPANTAY</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="entourage-container">
                <div className="individual-section">
                    <h3>BEST MAN:</h3>
                    <ul>
                        <li>DANIEL DAVE TOCMO</li>
                    </ul>

                    <h3>GROOMSMEN:</h3>
                    <ul>
                        <li>JOEMARK LEGASPI</li>
                        <li>ARMANDO PESIGAN</li>
                        <li>RENATO EREVE</li>
                    </ul>

                    <h3>BIBLE BEARER:</h3>
                    <ul>
                        <li>RAIKKO MATEO CAÑETE</li>
                        <li>XAVIEN KHALIX CAÑETE</li>
                    </ul>
                </div>

                <div className="individual-section">
                    <h3>MAID OF HONOR:</h3>
                    <ul>
                        <li>JOHANIE MARANAN</li>
                    </ul>

                    <h3>BRIDESMAIDS:</h3>
                    <ul>
                        <li>DANICA TOCMO</li>
                        <li>JERRELYN HERNANDEZ</li>
                        <li>AIFRYL BLANCO</li>
                    </ul>

                    <h3>FLOWER GIRL:</h3>
                    <ul>
                        <li>YUUNA ANN CAÑETE</li>
                    </ul>
                </div>
            </div>

            <Stack alignItems='center'>
                <Button style={{ fontWeight: 'bold', marginTop: '3rem' }} variant='contained' onClick={handleBack}>Back</Button>
            </Stack>
        </section>
    );
};

export default Entourage;