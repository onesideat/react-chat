import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
    return <Link to="/" className="logo">Disqus<span>.</span></Link>
}

export default Logo;