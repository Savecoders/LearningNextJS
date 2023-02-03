import { AuthProvider } from '@hooks/useAuth';
import MainLayaout from '@layout/MainLayaout';
import '@styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <AuthProvider>
                <MainLayaout>
                    <Component {...pageProps} />
                </MainLayaout>
            </AuthProvider>
        </>
    );
}
