import React, { useState } from 'react';
import Hero from '../components/Hero/';
import PageLoader from '../components/Elements/PageLoader';

const Home: React.FC = () => {
    const [isLoading, setLoadingStatus] = useState(false);

    return (
        <div className="page page-home">
			{isLoading ? <PageLoader /> : <Hero setPageLoading={setLoadingStatus} />}
		</div>
    )
}

export default Home;