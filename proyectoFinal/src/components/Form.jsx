import { useState, useEffect } from 'react';

import {
    TextField,
    Box,
    Button,
    FormControl,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from '@mui/material';

function Form() {
    const [email, setEmail] = useState('');
    const [texto, setTexto] = useState('');
    const [openFine, setOpenFine] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [ setIsValidText] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [textError, setTextError] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleClearClick();
        }, 20000);
        return () => clearTimeout(timeout);
    }, [texto, email]);

    const handleClearClick = () => {
        setEmail('');
        setTexto('');
        setIsValidEmail(true);
        setEmailError('');
    };

    const handleEmailChange = (value) => {
        setEmail(value);
        if (!isValidEmailFormat(value)) {
            setIsValidEmail(false);
            setEmailError('Formato de correo electrónico inválido');
        } else {
            setIsValidEmail(true);
            setEmailError('');
        }
    };

    const handleTextoChange = (value) => {
        setTexto(value);
        setCharacterCount(value.length);

        if(characterCount <= 4) {
            setIsValidText(false);
            setTextError('Contenido del comentario no puede ser menor a 4 caracteres');
        }else {
            setIsValidText(true);
            setTextError('');
        }
    }

    const handleButtonContinue = () => {
        if (isValidEmail && (characterCount >= 4 && characterCount <= 200)) {
            setOpenFine(true);
        }
    }

    const isValidEmailFormat = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    }

    const isDisabled = (email, characterCount) => {
        return isValidEmailFormat(email) && characterCount >= 4;
    }
    return (
        <>
            <Box sx={{ width: '100%', padding: 5 }}>
                <Typography
                    variant="h5"
                    component="div"
                >
                    ¿Tenés alguna consulta o queres saber más?
                </Typography>
                <Typography>Envíanos tus preguntas y nos pondremos en contacto contigo</Typography>
                <Dialog
                    open={openFine}
                    onClose={() => setOpenFine(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" sx={{ color: 'green' }}>
                        {`¡Gracias, ${email}!`}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" sx={{ color: 'green' }}>
                            {"Su mensaje ha sido enviado correctamente. Valoramos mucho su opinión."}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => { setOpenFine(false); }} autoFocus>
                            Cerrar
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
            <Box
                sx={{
                    p: 5,
                    m: 0,
                    borderRadius: 2,
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    width: 600,
                    height: 150,
                    gridColumn: '2',
                    gridRow: '2 / 3',
                    display: 'table-caption'
                }}
            >
                <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                    <TextField
                        label="example@example.com"
                        value={email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                        error={!isValidEmail}
                        helperText={emailError}
                        inputProps={{ maxLength: 50 }} />
                </FormControl>
                <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                    <TextField
                        id="outlined-multiline-static"
                        value={texto}
                        label="Comentario"
                        multiline
                        rows={4}
                        placeholder="Ingrese su comentario a continuación..."
                        variant="outlined"
                        error={characterCount < 4}
                        helperText={textError}
                        onChange={(e) => handleTextoChange(e.target.value)}
                    />
                    <Typography sx={{ fontSize: 12, color: characterCount > 200 ? 'red' : 'inherit' }}>
                        {characterCount}/200 caracteres
                    </Typography>
                </FormControl>
                <Button
                    disabled={!isDisabled(email,characterCount)}
                    onClick={handleButtonContinue}
                    key="enviar"
                    variant="contained"
                >
                    Enviar
                </Button>
            </Box>
        </>
    );
}

export default Form;