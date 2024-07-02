import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
    return (
        <>
            <div style={{padding:'40px 0px 20px 40px'}}>
                <h1>Our Core <span style={{ color: '#AE1D3C' }}>Expertise</span></h1>
                <p style={{maxWidth:'500px'}}>At CSPRO Technology, we pride ourselves on offering a wide range of comprehensive IT services designed to meet the diverse needs of businesses across various industries. Our expert team is dedicated to delivering innovative, reliable, and cost-effective solutions that drive growth and efficiency.</p>
            </div>
            <div style={{ display: 'flex', padding: '40px', flexWrap: 'wrap', gap: '30px', justifyContent: 'space-between' }}>
                <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1719832032~exp=1719835632~hmac=ece1030209da191f5a635666f30baaa763da784959d6a2564be5a0a8a4d611c8&w=826"
                            alt="Web"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Web Development
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                We have highly skilled professionals with extensive experience in various aspects of web development. From front-end to back-end development, our experts are proficient in the latest technologies and frameworks                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <p style={{ color: '#AE1D3C', marginTop: '0%' }}>
                            From $2000
                        </p>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169864.jpg?t=st=1719834783~exp=1719838383~hmac=15bfbede3d8a7ff8d3968293a760f17ba741b35109652277af75c7c73a911f98&w=996"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                App Development
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                We have highly skilled and experienced professionals who excel in creating mobile applications across various platforms. Whether it’s iOS, Android, or cross-platform solutions .
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <p style={{ color: '#AE1D3C', marginTop: '0%' }}>
                            From $3000
                        </p>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169860.jpg?t=st=1719834884~exp=1719838484~hmac=d58c418e67ab561935b7ad054713f87f7f6abfbb4afcc5ddbef1f8cde572b82c&w=826"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Data Analytics
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our data analytics team consists of highly skilled professionals with extensive experience in various industries. Our experts are proficient in the latest tools and methodologies, ensuring your data analytics projects                         </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <p style={{ color: '#AE1D3C', marginTop: '0%' }}>
                            From $1500
                        </p>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://img.freepik.com/free-photo/digital-cloud-data-storage-digital-concept-cloudscape-digital-online-service-global-network-database-backup-computer-infrastructure-technology-solution_90220-1046.jpg?t=st=1719834433~exp=1719838033~hmac=c956f028bf2f7d77ddf5c2e2a241b5ef86bf6c298c9fe5c4359c5f7a16d5534c&w=826"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Cloud Computing
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our cloud computing team comprises highly experienced professionals with deep expertise in various cloud platforms, including AWS, Azure, and Google Cloud.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <p style={{ color: '#AE1D3C', marginTop: '0%' }}>
                            From $2500
                        </p>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://img.freepik.com/free-photo/businessman-working-futuristic-office_23-2151003702.jpg?t=st=1719834549~exp=1719838149~hmac=f32a81b7108233d9429caf4481f07a6945b008b97d5adf866902f443119e9284&w=826"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                AI Integration
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Integrating AI into your existing systems can be challenging. Our team ensures a smooth and seamless integration process, minimizing disruption to your operations.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <p style={{ color: '#AE1D3C', marginTop: '0%' }}>
                            From $3000
                        </p>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://img.freepik.com/free-photo/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online_1423-68.jpg?t=st=1719835257~exp=1719838857~hmac=ee97f1e2827c514b376342a09a3bca28164ebe46b20d31cd40da1650d1760365&w=826"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Ecom Development
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our e-commerce development team comprises highly skilled professionals with extensive experience in various e-commerce platforms, including Shopify, Magento, WooCommerce, and more.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <p style={{ color: '#AE1D3C', marginTop: '0%' }}>
                            From $3000
                        </p>
                    </CardActions>
                </Card>

            </div>
        </>
    );
}
