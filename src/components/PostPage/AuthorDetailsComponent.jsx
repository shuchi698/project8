import React from 'react';
import AuthorAvatar from './../../images/avatar.png';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const AuthorDetailsComponent = ({data, classStyle, hidecomp}) => {
    return (
        <div className={`AuthorDetailsComponent ${hidecomp}`} key={data.id}>
            <div className='author-avatar'>
                <Stack direction="row" spacing={2}>
                    <Avatar src={AuthorAvatar} sx={{ width: 100, height: 100, fontSize: 65 }}></Avatar>
                </Stack>
            </div>
            <div className='author-details'>
                <div className={classStyle}>WRITTEN BY</div>
                <div className='author-name'>{data.author}</div>
                <div className='author-date'>{data.date} . {data.readTime}</div>
            </div>
        </div>
    );
}

export default AuthorDetailsComponent;