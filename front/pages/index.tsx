import React from 'react';
import Button from '@material-ui/core/Button';

function HomePage() {
    return <div>Welcome to Next.js! <Button variant="contained">{process.env.HOST_ROCKET}</Button></div>
}

export default HomePage