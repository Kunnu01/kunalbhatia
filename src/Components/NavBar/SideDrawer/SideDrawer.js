import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faEnvelope, faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    list: {
        width: 240,
        height: '100vh',
        background: '#2a2930',
    },
    fullList: {
        width: 'auto',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 240,
            flexShrink: 0,
        },
    },
    sideList: {
        fontSize: '0.87rem',
        position: 'absolute',
        top: '27%',
        left: '35%',
    },
    listItem: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '5%',
        }
    }
});
class TemporaryDrawer extends React.Component {

    render() {
        const { classes, open, onClose } = this.props;

        const list = [
            {
                text: 'Home',
                icon: <FontAwesomeIcon icon={faHome} size="2x" />,
            },
            {
                text: 'About',
                icon: <FontAwesomeIcon icon={faUserCircle} size="2x" />,
            },
            {
                text: 'Projects',
                icon: <FontAwesomeIcon icon={faCodeBranch} size="2x" />,
            },
            {
                text: 'Skills',
                icon: <FontAwesomeIcon icon={faCode} size="2x" />,
            },
            {
                text: 'Contact',
                icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
            },
        ];

        const sideList = (
        <div className={classes.list}>
            <List>
            {list.map(({text, icon}) => (
                <ListItem className={classes.listItem} button key={text} alignItems="center">
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText>
                    <Typography className={classes.sideList} color="textSecondary" variant="button">
                        {text}
                    </Typography>
                </ListItemText>
                </ListItem>
            ))}
            </List>
        </div>
        );

        return (
        <div>
            <Drawer
                open={open} 
                onClose={onClose}
                className={classes.drawer}
            >
            <div
                tabIndex={0}
                role="button"
                onClick={onClose}
                onKeyDown={onClose}
            >
                {sideList}
            </div>
            </Drawer>
        </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);