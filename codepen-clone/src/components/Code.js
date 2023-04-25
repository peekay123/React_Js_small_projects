import React, {useContext} from 'react';
import { Editor } from './Editor';
import {Box, styled} from '@mui/material';
import { DataContext } from './context/DataProvider';

const Container = styled(Box)`
display: flex;
background-color: #060606;
height: 50vh`

export const Code = () => {
  const{html, setHtml, css, setCss, javaScript, setJavaScript} = useContext(DataContext);
  return (
    <Container>
    <Editor
    heading="HTML"
    icon="/"
    color="#FF3C41"
    value={html}
    onChange={setHtml}
    />
    <Editor
    heading="CSS"
    icon="*"
    color="#0EBEFF"
    value={css}
    onChange={setCss}
    />
    <Editor
    heading="JS"
    icon="()"
    color="#FCD000"
    value={javaScript}
    onChange={setJavaScript}
    />
    </Container>
  )
}
