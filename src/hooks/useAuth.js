import { useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import endPoints from '@/services/api';
// This is a custom hook that allows you to create a reference to a DOM element.
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signIn = async (email, password) => {
        const options = {
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
        };
        // axios is a library that allows you to make HTTP requests to external resources.
        const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
        if (access_token) {
            const token = access_token.access_token;
            Cookies.set('token', token, { expires: 5 });
            axios.defaults.headers.Authorization = `Bearer ${token}`;
            // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // axios defaults are the default values for the axios request.
            const { data: user } = await axios.get(endPoints.auth.profile);
            // user is the user object that is returned from the API.
            setUser(user);
        }
    };

    return {
        user,
        signIn,
    };
}
