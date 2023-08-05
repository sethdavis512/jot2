import { type ReactNode } from 'react';

import Navbar from './Navbar';

interface DefaultLayoutProps {
    children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            {children}
        </div>
    );
}
