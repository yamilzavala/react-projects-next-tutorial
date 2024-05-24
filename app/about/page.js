import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1 className="text-7xl">
                AboutPage
            </h1>
            <Link href='/' className="mt-5 text-2xl btn btn-primary">
                back to home
            </Link>
        </div>
    );
};

export default AboutPage;