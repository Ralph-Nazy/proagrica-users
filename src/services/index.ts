export const getUsers = async (page: number) => {

    const response = await fetch(`https://dummyjson.com/users?limit=20&skip=${(page - 1) * 20}`);
    const userList = await response.json();
    return userList;

}