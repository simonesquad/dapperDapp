// import Image from 'next/image';
import { signOut } from 'next-auth/react';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-xl bg-info">
                <div class="d-flex mb-2">
                    <div class="me-auto p-2">
                        <a class="navbar-brand" href="/">
                        {/* <Image src="/demo-logo.png" alt="Logo" width="30" height="24" /> */}
                        <span class="navbar-text">
                            Dappy!
                        </span>
                        </a> 
                    </div>
                    <div class="p-2">
                        <button 
                            class="btn btn-sm btn-outline-secondary"
                            type="button"
                            onClick={() => signOut({ redirect: '/signin' })}>
                                Logout
                        </button>
                    </div>
                </div>
            </nav> 
        </>
    )
}

export default Navbar;