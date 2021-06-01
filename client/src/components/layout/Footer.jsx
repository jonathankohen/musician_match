import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom" className="mt-5">
            <Navbar.Text>
                &copy;{' '}
                <a
                    href="https://github.com/jonathankohen"
                    id="copyright"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Jonathan Kohen
                </a>
            </Navbar.Text>
        </Navbar>
    );
}
