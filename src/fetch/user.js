import instance from './main';

export const login = (params) => {
    return instance({
        url: "/auee/api/account/login",
        method: 'post',
        data: params
    });
};

export const register = (params) => {
    return instance({
        url: "/auee/api/account/register",
        method: 'post',
        data: params
    });
};

export const getUserById = (params) => {
    return instance({
        url: "/auee/api/account/getUserById",
        method: 'post',
        data: params
    });
};

// getUsers
export const getUsers = (params) => {
    return instance({
        url: "/auee/api/account/getUsers",
        method: 'post',
        data: params
    });
};

export const updateUser = (params) => {
    return instance({
        url: "/auee/api/account/updateUser",
        method: 'post',
        data: params
    });
};

export const deleteUser = () => {

};

export const getUserIdentity = (params) => {
    return instance({
        url: "/auee/api/account/getUserIdentity",
        method: 'post',
        data: params
    });
};
