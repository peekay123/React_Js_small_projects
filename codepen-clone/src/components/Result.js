import React, {useContext, useState} from 'react';
import {Box, styled} from '@mui/material';
import { DataContext } from './context/DataProvider';
import { useEffect } from 'react';

const Container = styled(Box)`
height: 41vh`

export const Result = () => {
    const[src, setSrc] = useState('');
    const{html, css, javaScript} = useContext(DataContext);
    const srcCode = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javaScript}</script>
        
    </html>
    `
    useEffect(() => {
        const timeout = setTimeout(() =>{
            setSrc(srcCode);
        }, 1000)

        return () => clearTimeout(timeout); 
    }, [html, css, javaScript])


  return (
    <Container>
        <iframe
        srcDoc={src}
        title='output'
        sandbox='allow-scripts'
        style={{border: '0'}}
        width='100%'
        height='100%'/>
    </Container>
  )
}
