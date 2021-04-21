import React,  { useEffect, useState } from 'react';
import {Container, Typography, Grow, Grid} from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from '../../styles';
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';
import Footer from '../footer/Footer';
import Navbar from '../Navbar/Navbar';


const Reviews = () => {
    const [currentId, setCurrentId ] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(getPosts());
    }, [currentId, dispatch]);


    return(
        <Container maxidth="lg">
          <Grow in>
              <Container>
                 <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                      <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                 </Grid>
                 <Footer/>
              </Container>
          </Grow>
        </Container>
    );
}

export default Reviews;