/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import Layout from "./Layout";
import { 
    Card, 
    CardContent, 
    CardMedia,
    Typography
} from "@mui/material";

function Detail() {
    const params = useParams()

    const [post, setPost] = useState()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(response => response.json())
            .then(json => setPost(json))
            .catch(error => console.log(error));
    }, [params.id]);

    return (
        <Layout>
            <Card sx={{ maxWidth: 700, maxHeight:550, display:'flex', paddingTop:5, paddingLeft:10 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={`../../public/imgDoctors/${params.id}.jpg`}
                    alt="Doctor" />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: '', gap: 0.5 }}>
                    <Typography
                        variant="h5"
                        component="div"
                    >
                        Nombre Completo: {post?.name} {post?.username}
                    </Typography>
                    <Typography
                        variant="soft"
                        fontSize="sm"
                        sx={{ '--Typography-gap': '0.5rem', p: 1 }}
                    >
                        🌁{post?.address?.city}, {post?.address?.suite},{post?.address?.street}
                    </Typography>
                    <Typography
                        variant="soft"
                        fontSize="sm"
                        sx={{ '--Typography-gap': '0.5rem', p: 1 }}
                    >
                        📠 {post?.phone}
                    </Typography>
                    <Typography
                        variant="soft"
                        fontSize="sm"
                        sx={{ '--Typography-gap': '0.5rem', p: 1 }}
                    >
                        📧 {post?.email}
                    </Typography>
                    <Typography
                        variant="soft"
                        fontSize="sm"
                        sx={{ '--Typography-gap': '0.5rem', p: 1 }}
                    >
                        🌐 {post?.website}
                    </Typography>
                    <Typography
                        variant="soft"
                        fontSize="sm"
                        sx={{ '--Typography-gap': '0.5rem', p: 1 }}
                    >
                        🏥 {post?.company?.name}
                    </Typography>
                </CardContent>
            </Card>
        </Layout>
    )
}

export default Detail;
