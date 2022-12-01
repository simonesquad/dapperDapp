// import Image from 'next/image';
import { signOut } from 'next-auth/react';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-xl bg-info">
                <div class="d-flex justify-content-between">
                        <a class="navbar-brand" href="/">
                        <span class="navbar-text">
                            Dappy!
                        </span>
                        </a> 
                        <button 
                            class="btn btn-sm btn-outline-secondary"
                            type="button"
                            onClick={() => signOut({ redirect: '/signin' })}>
                                Logout
                        </button>
                </div>
            </nav> 
        </>
    )
}

export default Navbar;