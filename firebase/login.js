import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/utils/firebase'

    const checkUserSession = async () => {
        try {
            const user = await api.get('/user');

            const unsubscribe = auth.onAuthStateChanged(() => {
                unsubscribe();
            });

            user && setCurrentUser(user);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

const onSubmit = async () => {
    try {
        setLoading(true);
        const { email, password } = values;
        const { user } = await signInWithEmailAndPassword(auth, email, password);

        localStorage.setItem('token', user.accessToken);

        await checkUserSession(user.accessToken);
        router.push('/');

        setValues({ email: '', password: '' });
        setLoading(false);
    } catch (error) {
        setError(error?.message);
        setLoading(false);
    }
}