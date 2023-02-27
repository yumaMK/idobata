import React from 'react';
import {
	ListItem,
	Avatar,
	ListItemAvatar,
	ListItemText,
	Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from './gravatar';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));


function MessageItem({ name, text }) {
	const classes = useStyles();
	const avatarPath = gravatarPath(name);

	return (
		<ListItem divider={true}>
			<ListItemAvatar>
				<Avatar src={avatarPath} />
			</ListItemAvatar>
			<ListItemText
				primary={name}
				secondary={
					<Typography
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary"
					>
						{text}
					</Typography>
				}
			/>
		</ListItem>
	)
}

export default MessageItem;