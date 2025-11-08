import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/utils/firebase'

const onSubmit = async () => {
    try {
        setLoading(true);
       
        const { email, password } = values;
        const { user } = await createUserWithEmailAndPassword(auth, email, password);

        const createdUser = await api.post('/user', { 
            firebaseID: user.uid, 
            email 
        });

        localStorage.setItem('token', user.accessToken);

        setValues({ email: '', password: '' });
        setLoading(false);
    } catch (error) {
        setError(error?.message);
        setLoading(false);
    }
}