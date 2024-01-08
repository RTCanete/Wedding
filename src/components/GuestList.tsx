import React from 'react';
import { useHandleBack } from '../utils';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles.css';

const GuestList: React.FC = () => {
    const handleBack = useHandleBack();
    return (
        <section>
            <div>
                <h2>Bride's Guest:</h2>
                <h3>Bride's Guest:</h3>
                <ul>
                    <li>April 8, 2024 | 9:00am | Monday</li>
                </ul>
            </div>

            <Stack alignItems='center'>
                <Button style={{ fontWeight: 'bold', marginTop: '3rem' }} variant='contained' onClick={handleBack}>Back</Button>
            </Stack>
            {/* Add your guest list content here */}
        </section>
    );
};

export default GuestList;
