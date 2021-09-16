import routes from '../constants/routes';
import env from '../constants/env';

export const Ajax = {
    post: (url:string, data: object): Promise<any> => {
        return fetch(env.WebserviceURL + url, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}

export function routeTo(name: string): string {
    if (routes.hasOwnProperty(name))
        return routes[name].path;

    return '/';
}

export function leadingZero(number: number | string): string {
     return ((number + '').length < 2 ? '0' : '') + number;
}