export class URL {

    /**
     * BASIC
     */
    static readonly SERVER = 'http://localhost:8080';
    static readonly API = `${URL.SERVER}/api`;

    /**
     * AUTH
     */
    static readonly AUTH = `${URL.API}/auth`;
    static readonly SIGNIN = `${URL.AUTH}/signin`;
    static readonly SIGNUP = `${URL.AUTH}/signup`;

    /**
     * BLOODPRESSURE
     */
    static readonly BLOODPRESSURE = `${URL.API}/bloodpressure`;
    static readonly BLOODPRESSURE_PAGE = `${URL.BLOODPRESSURE}/page`;
    static readonly BLOODPRESSURE_DATERANGE = `${URL.BLOODPRESSURE}/date-range`;

    /**
     * ALLERGIES
     */
    static readonly ALLERGIES = `${URL.API}/allergy`;
    static readonly ALLERGIES_PAGE = `${URL.ALLERGIES}/page`;
}