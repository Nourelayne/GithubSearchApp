import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 343,
    margin: theme.spacing(2),
  },
  media: {
    height: 350,
  },
}));


export default function CardList(props) {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="space-evenly">
                <Grid container item xs={12} spacing={3}>
                        {props.profiles.map(profile =>  <Card className={classes.root} key ={profile.id}>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    className={classes.media}
                                                                    image={profile.avatar_url}
                                                                    title="profile_image"
                                                                />
                                                                <CardContent>
                                                                    <Typography gutterBottom variant="h5" component="h2">
                                                                        {profile.name}
                                                                    </Typography>
                                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                                        {profile.company}
                                                                    </Typography>
                                                                </CardContent>
                                                            </CardActionArea>
                                                            <CardActions>
                                                                <Button size="medium" color="primary" onClick = {()=>props.showProfile(profile.login)}> See Profile </Button>
                                                                <Button size="medium" color="primary" onClick = {()=>props.deleteProfile(profile.id)}> Delete </Button>
                                                            </CardActions>
                                                        </Card>
                        )}
                </Grid>
            </Grid>
    )
}