export const API_SERVICE_URLS = {
    prod: {
        users: 'https://api.github.com/users',
        user: 'https://api.github.com/users/{login}',
        search: 'https://api.github.com/search/users?q={search}',
    },
    dev: {
        users: 'http://localhost:3000/data/users.json',
        user: 'http://localhost:3000/data/user.json',
        search: 'http://localhost:3000/data/search/users.json',
    }
};
