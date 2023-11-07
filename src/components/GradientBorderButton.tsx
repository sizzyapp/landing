import React from 'react';
import { Button, createStyles, keyframes } from '@mantine/core';

const animateBorder = keyframes({
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
});

const useStyles = createStyles((theme) => ({
    buttonWrapper: {
        position: 'relative',
        '&:hover $buttonBg': {
            filter: 'blur(10px)',
            transition: 'filter 0.4s ease-in',
        },
    },
    button: {
        fontSize: theme.fontSizes.xs, // Adjust font-size to your preference
        fontWeight: 500,
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingTop: theme.spacing.xs, // Adjust padding to your preference
        paddingBottom: theme.spacing.xs, // Adjust padding to your preference
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        color: theme.colors.gray[7],
        borderRadius: theme.radius.md,
        border: 0,
        cursor: 'pointer',
        position: 'relative', // To stack on top of the pseudo element
        zIndex: 2,
        transition: 'all 100ms linear',
        overflow: 'hidden', // Ensure the pseudo-element does not overflow the button boundaries
        '&:hover': {
            backgroundColor: theme.colors.gray[1], // Adjust the color for hover state
        },
    },
    buttonBg: {
        content: '""',
        position: 'absolute',
        top: -1, // Align with the button edge considering the border size
        left: -1,
        right: -1,
        bottom: -1,
        zIndex: 1,
        background: `linear-gradient(90deg, #FF8038 0%, #FF0099 30.43%, #00EBEB 68.23%, #DB00FF 100%)`,
        borderRadius: theme.radius.md, // Make sure this is equal to the button's border-radius
        animation: `${animateBorder} 4s ease infinite`,
        transition: 'opacity 0.3s ease-in-out',
    },
}));

export function GradientBorderButton({ children }) {
    const { classes } = useStyles();

    return (
        <a target="_blank" href="https://zerotoshipped.com">
        <div className={classes.buttonWrapper}>
            <Button className={classes.button} type="button">
                {children}
            </Button>
            <div className={classes.buttonBg} />
        </div>
        </a>
    );
}
