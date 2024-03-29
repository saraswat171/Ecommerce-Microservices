import Box from '@mui/system/Box';
import FormCompo from '../../components/FormCompo';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupPic from '../../assests/images/singupPic.png'
import { FormData, UserSchema } from './types';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../feature/Auth/authAction';
import React, { useEffect } from 'react';
import { toggleSuccess, toggleerror } from '../../feature/Auth/authSlice';

export default function Signup() {

    const error = useAppSelector((state) => state?.auth?.error)
    const success = useAppSelector((state) => state?.auth?.success)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(UserSchema),
    });

    const onSubmit = async (data: FormData) => {
        console.log("SUCCESS", data);
    
    dispatch(signUpUser(data));
   
}
React.useEffect(() => {
    if (error) {
        alert(`Error: ${error}`)
        dispatch(toggleerror())
    }
}, [error])

useEffect(() => {
    if (success) {
        alert('SignUp success')
        dispatch(toggleSuccess())
        navigate('/');
    }
}, [success])

    return (
        <Box
            sx={{
                width: "100%",
                height: "94.6vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#f9fafb",
            }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper
                    sx={{
                        width: "55vw",
                        height: "60vh",
                        display: "flex",
                        alignItems: "center",
                        p: 3,
                    }}
                >
                    <Box
                        sx={{
                            width: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={signupPic}
                            alt="SignupPage"
                            style={{ width: "70%" }}
                        />
                    </Box>
                    <Stack
                        width={"50%"}
                        alignItems={"flex-start"}
                        justifyContent={"center"}
                    >
                        <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 4 }}>
                            Create your Free Account
                        </Typography>

                        <FormCompo
                            type="text"
                            placeholder="Name"
                            name="name"
                            register={register}
                            error={errors.name}
                        />

                        <FormCompo
                            type="text"
                            placeholder="Email"
                            name="email"
                            register={register}
                            error={errors.email}
                        />

                        <FormCompo
                            type="password"
                            placeholder="Password"
                            name="password"
                            register={register}
                            error={errors.password}
                        />

                        <FormCompo
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            register={register}
                            error={errors.confirmPassword}
                        />

                          
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            sx={{
                                textTransform: "none",
                                borderRadius: "10px",
                                fontSize: "16px",
                                width: "90%",
                                fontWeight: "500",
                                boxShadow: "none",
                                mb: 4,
                            }}
                        >
                            Create Account
                        </Button>
                    </Stack>
                </Paper>
            </form>
        </Box>
    );
}