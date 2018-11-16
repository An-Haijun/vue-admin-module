import instance from './main';

export const createArticle = (params) => {
    return instance({
        url: "/auee/api/article/create",
        method: 'post',
        data: params
    });
};

export const deleteArticleById = (params) => {
    return instance({
        url: "/auee/api/article/deleteArticleById",
        method: 'post',
        data: params
    });
};

export const updateArticle = (params) => {
    return instance({
        url: "/auee/api/article/updateArticle",
        method: 'post',
        data: params
    });
};

export const getArticleById = (params) => {
    return instance({
        url: "/auee/api/article/getArticleById",
        method: 'post',
        data: params
    });
};

export const getArticleByParams = (params) => {
    return instance({
        url: "/auee/api/article/getArticleByParams",
        method: 'post',
        data: params
    });
};

export const createArticleType = (params) => {
    return instance({
        url: "/auee/api/article/createArticleType",
        method: 'post',
        data: params
    });
};

export const deleteArticleType = (params) => {
    return instance({
        url: "/auee/api/article/deleteArticleType",
        method: 'post',
        data: params
    });
};

export const updateArticleType = (params) => {
    return instance({
        url: "/auee/api/article/updateArticleType",
        method: 'post',
        data: params
    });
};

export const getArticleType = (params) => {
    return instance({
        url: "/auee/api/article/getArticleType",
        method: 'post',
        data: params
    });
};
export const createArticleClass = (params) => {
    return instance({
        url: "/auee/api/article/createArticleClass",
        method: 'post',
        data: params
    });
};

export const deleteArticleClass = (params) => {
    return instance({
        url: "/auee/api/article/deleteArticleClass",
        method: 'post',
        data: params
    });
};

export const updateArticleClass = (params) => {
    return instance({
        url: "/auee/api/article/updateArticleClass",
        method: 'post',
        data: params
    });
};

export const getArticleClass = (params) => {
    return instance({
        url: "/auee/api/article/getArticleClass",
        method: 'post',
        data: params
    });
};
