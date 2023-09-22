import React, { useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
import MissingValidationText from './missingValidationText';

const TitleText = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1),
    fontWeight: "bold",
    fontSize: "42px",
    textAlign: 'center',
    color: "black",
}));

const ContainerGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(3)
}));

const PasswordComponent = ({ options }) => {
    const [isSpecialCharValid, setSpecialCharValid] = useState(false)
    const [isNumberValid, setNumberValid] = useState(false)
    const [isUppercase, setUppercaseValid] = useState(false)
    const [isNoConsecutiveLetters, setNoConsecutiveLetters] = useState(false)
    const dataObject = useMemo(() => {
        return [
            { name:"specialChar", title: "Has a special char !@#$%^&*", show: (options.indexOf("specialChar") > -1), isValid: isSpecialCharValid },
            { name:"number", title: "Has a number 0-9", show: (options.indexOf("number") > -1), isValid: isNumberValid },
            { name:"uppercase", title: "Has an uppercase letter", show: (options.indexOf("uppercase") > -1), isValid: isUppercase },
            { name:"noConsecutiveLetters", title: "Has no consecutive letters", show: (options.indexOf("noConsecutiveLetters") > -1), isValid: isNoConsecutiveLetters }
        ]
    }, [isNoConsecutiveLetters, isNumberValid, isSpecialCharValid, isUppercase, options])

    const validateDataObject = (password) => {
        if (password === ""){
            setNoConsecutiveLetters(false)
        } else {
            setNoConsecutiveLetters(!/(.)\1/.test(password))
        }
        setSpecialCharValid(/[!@#$%^&*]/.test(password))
        setNumberValid(/\d/.test(password))
        setUppercaseValid(/[A-Z]/.test(password))
    }

  return (
    <div>
        <Grid container justifyContent="center" xs={12}>
            <TitleText id="titleText" for="password">
                Password Component
            </TitleText>
        </Grid>
        <Grid container xs={12}>
            <ContainerGrid container justifyContent='flex-end' alignItems="center" xs={6} >
                <input style={{maxHeight: "16px"}} id="password" onChange={(e) => { 
                    (validateDataObject(e.target.value))}} />
            </ContainerGrid>
            <ContainerGrid container justifyContent="left" xs={6}>
                <div >
                    {dataObject.filter(o => o.show === true).map((data) => {
                        return (
                            <MissingValidationText title={data.title} isValid={data.isValid}/>
                        )
                    })}
                </div>
            </ContainerGrid>
        </Grid>
    </div>
  );
};

export default PasswordComponent;