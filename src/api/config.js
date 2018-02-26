import { store } from '../PersonalAccounting';

const config = {
    host: 'http://gh-wallet.herokuapp.com/api/v1/',
    getToken: () => {
        return store.getState().user.access_token;
    }
}

export default config;
