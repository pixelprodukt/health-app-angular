export class URL {

    static readonly SERVER = 'http://localhost:8080';
    static readonly API = `${URL.SERVER}/api`;
    static readonly AUTH = `${URL.API}/auth`;
    static readonly SIGNIN = `${URL.AUTH}/signin`;
    static readonly SIGNUP = `${URL.AUTH}/signup`;
    static readonly BLOODPRESSURE = `${URL.API}/bloodpressure`
    static readonly BLOODPRESSURE_PAGE = `${URL.BLOODPRESSURE}/page`
    static readonly BLOODPRESSURE_DATERANGE = `${URL.BLOODPRESSURE}/date-range`
}