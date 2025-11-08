import { auth } from '@/utils/firebase'

const logout = () => {
    auth.signOut();
    setCurrentUser(null);
    localStorage.removeItem('token');
}