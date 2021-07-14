import UserList from './user/UserList'
import useFetch from './user/useFetch'


const Home = () => {
    const { error, isLoading, data: userData } = useFetch('/users/all')

    return (
        <div >
            { error && <div>This is an ERROR {error}</div>}
            { isLoading && <div>Loading...</div>}
            { userData && <UserList userData={userData} />}
        </div>
    );
}

export default Home;