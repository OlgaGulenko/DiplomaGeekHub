import config from './config';

class users{

    static get(){
        return fetch(config.host + 'api/users', {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + config.getToken(),
                'Cache-Control': 'no-cache'
            }
        });
    }

    static post(user){
        let body = JSON.stringify(user);

        //delete user.id;
        //delete user.active;

        //return console.log(user, body);

        return fetch(config.host + 'api/users', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + config.getToken(),
                'Content-Length': body.length
            },
            body
        });
    }

    static put(user){
        let body = JSON.stringify(user);

        return fetch(config.host + 'api/users/'+user.id, {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + config.getToken(),
                'Content-Length': body.length
            },
            body
        });
    }

    static getUserinfo(access_token){
        return fetch(config.host + 'api/users/getuserinfo', {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Cache-Control': 'no-cache'
            }
        });
    }
}

export default users;