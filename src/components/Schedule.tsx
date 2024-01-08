import React from 'react';
import { useHandleBack } from '../utils';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles.css';

const Schedule: React.FC = () => {
    const handleBack = useHandleBack();
    return (
        <section>
            <div>
                <h3>DATE:</h3>
                <ul>
                    <li>APRIL 8, 2024 | 9:00AM | MONDAY</li>
                </ul>
            </div>
            <div>
                <h3>LOCATION:</h3>
                <ul>
                    <li>IGLESIA NG DIOS KAY CRISTO JESUS, HALIGI AT SUHAY NG KATOTOHANAN | BINANGONAN CHAPEL</li>
                </ul>
            </div>
            <div>
                <h3>RECEPTION:</h3>
                <ul>
                    <li>TBA</li>
                </ul>
            </div>

            <Stack alignItems='center'>
                <Button style={{ fontWeight: 'bold', marginTop: '3rem' }} variant='contained' onClick={handleBack}>Back</Button>
            </Stack>

        </section>
    );
};

export default Schedule;
