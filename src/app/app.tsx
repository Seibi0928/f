import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Draggable from 'react-draggable';
import { createStyles, styled, Typography } from '@mui/material'
import Paper, { PaperProps } from '@mui/material/Paper';

const [body] = document.getElementsByTagName('body');
if (!body) {
    throw new Error('The body element does not exist.');
}
const div = document.createElement('div');
body.appendChild(div);
createRoot(div).render(<SimpleDialog />);

function PaperComponent(props: PaperProps) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

function SimpleDialog() {
    return (<div style={{ position: 'absolute', bottom: '4rem', right: '3rem', z-index: '2147483647' }}>
        <Draggable>
            <Paper elevation={5}>
                <Typography variant={"h3"}>
                    Try to drag me
                </Typography>
            </Paper>
        </Draggable>
    </div>);
}