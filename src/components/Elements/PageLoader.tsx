import React from 'react';
import { ReactComponent as Loader } from '../../static/svg/page-loader.svg';

const PageLoader: React.FC = (props: any) => {
    return <div className='page-loader'><Loader /></div>;
}

export default PageLoader;