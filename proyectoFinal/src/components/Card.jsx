/* eslint-disable react/prop-types */
import { 
    useContext, 
    useEffect, 
    useReducer 
} from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Link,
    Card,
    Typography,
    CardActions,
    CardContent,
    CardMedia, 
    CardActionArea, 
    BottomNavigationAction
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { ContextGlobal } from "./utils/global.context";

const reducer = (state, action) => {
    const { type, payload } = action

    if (type === 'ADD_FAV') {
        return [...state, payload];
    }
    return state;
}

export const CardPost = ({ name, username, id }) => {
    const navigate = useNavigate();

    const { theme } = useContext(ContextGlobal);

    const [state, dispatch] = useReducer(reducer, []);

    const addFav = () => {
        const fav = JSON.parse(localStorage.getItem('fav')) || [];

        let ids = fav.map(item => item ? item.id : null);

        if (!ids.includes(id)) {
            dispatch({ type: 'ADD_FAV', payload: { name, username, id } });
        }
    }

    useEffect(() => {
        const favJSON = JSON.parse(localStorage.getItem('fav')) || [];

        if (state[state.length - 1] !== undefined) {
            favJSON.push(state[state.length - 1]);
            localStorage.setItem('fav', JSON.stringify(favJSON));
        }

    }, [state]);

    return (
        <Link to={`../doctor/${id}`} className="card">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={`../../public/imgDoctors/${id}.jpg`}
                        alt="Doctor" />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2">
                            {username}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <BottomNavigationAction
                        label="Favoritos"
                        value="favorites"
                        icon={<FavoriteIcon />}
                        onClick={addFav}
                        className={theme === "oscuro" ? "favButtonDark" : "favButton"} />
                    <BottomNavigationAction
                        label="More"
                        value="MoreInformation"
                        icon={<MoreHorizIcon />}
                        onClick={() => navigate(`/doctor/${id}`, { replace: true })}
                        className={theme === "oscuro" ? "favButtonDark" : "favButton"} />
                </CardActions>
            </Card>
        </Link>
    );
};

