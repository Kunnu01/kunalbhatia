import React from 'react'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AdvancedGridList from './GridComponent/Grid';

const styles = theme => ({
    root: {
        display: 'flex',
        paddingTop: '1%',
        marginLeft: '8%',
        marginRight: '8%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    sectionHeading: {
        marginTop: '7%',
        fontSize: '9rem',
        color: '#2a2930',
        [theme.breakpoints.down('sm')]: {
            fontSize: '4rem',
        }
    },
    intro: {
        flex: 1.2,
        paddingTop: '4%',
        padding: '5px',
        fontSize: '5.3rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '4rem',
        },
    },
    para: {
        paddingTop: '7%',
        fontSize: '20px',
        lineHeight: '33px',
        fontStyle: 'normal',
        fontWeight: '300',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '10%',
            fontSize: '20px',
            lineHeight: '33px',
            fontStyle: 'normal',
            fontWeight: '300',
        },
    },
    imageSection: {
        flex: 0.8,
        paddingTop: '4%',
        paddingLeft: '4%',
        padding: '5px',
    },
    image: {
        height: 'auto',
        maxWidth: '100%',
        boxShadow: '25px 20px 10px #2a2931'
    }
});

const ProjectsPage = (props) => {
    const { classes } = props;
    return (
        <>
            <header>
                <Typography align="center" className={classes.sectionHeading} variant="h1">
                    &lt;Projects /&gt;
                </Typography>
            </header>
                <AdvancedGridList />
            <section className={classes.root}>
                <div className={classes.intro}>
                    <Typography align="left" className={classes.intro} variant="h1" color="textPrimary">
                        Hello, <span style={{color: '#53f6c7'}}>I'm Kunal,</span> full-stack developer
                    </Typography>
                    <Typography align="left" className={classes.para} variant="p" color="textPrimary">
                        A WordPress website about Hypergiant company which creates hyper-efficient and scalable. The careful have the as a spirits and client ihave by assistant have took initial sentences omens.
                    </Typography>
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.image} src="https://bridge236.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-2.jpg" alt="myphoto"/>
                </div>
            </section>
        </>
    )
}

export default withStyles(styles)(ProjectsPage);


{/* <GridListTile key={tile.img} className={classes.gridList}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                    <IconButton className={classes.icon}>
                    <InfoIcon />
                    </IconButton>
                }
                />
            </GridListTile> */}