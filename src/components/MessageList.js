import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
	root: {
		gridRow: 1,
	},
});

const MessageList = () => {
	const classes = useStyles();

	return <div className={ classes.root }>messageList</div>
};

export default MessageList;