import axios from 'axios';
import useAuth from './useAuth';

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = () => {
        setAuth(null);
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        axios.patch(
            'http://localhost:5000/auth/logout',
        )
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return logout;
};

export default useLogout;
