import React from 'react';
import { useHandleBack } from '../utils';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Grid, Card, CardMedia } from '@mui/material';
import '../styles.css';

const Gallery: React.FC = () => {
    const handleBack = useHandleBack();

    const images = [
        'binangonan1.png',
        'binangonan2.png',
        'binangonan3.png',
    ];
    console.log(images)

    return (
        <section>
            <h2>Binangonan Chapel</h2>

            <Grid container spacing={2}>
                {images.map((image, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="220"
                                width='auto'
                                image={`/images/${image}`} // Adjust the path based on your folder structure
                                alt={`Image ${index + 1}`}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Stack alignItems='center'>
                <Button style={{ fontWeight: 'bold', marginTop: '3rem' }} variant='contained' onClick={handleBack}>Back</Button>
            </Stack>
            {/* Add your wedding gallery content here */}
        </section>
    );
};

export default Gallery;
