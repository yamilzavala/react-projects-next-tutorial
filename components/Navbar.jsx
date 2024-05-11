import React from 'react';
import Link from 'next/link';
import { links } from '../data/data';

const Navbar = () => {
    return (
        <nav className='bg-base-300 py-4'>
            <div className='navbar px-8 mx-auto max-w-6xl flex-col sm:flex-row'>
                {/* logo */}
                <Link href='/' className='btn btn-primary'>Next.js</Link>
                
                {/* links */}
                <ul className='menu menu-horizontal md:ml-8'>
                    {links.map((link,idx) => {
                        const {href, label} = link;
                        return (
                            <li key={idx}>
                                <Link className='capitalize' href={href}>{label}</Link>{}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;