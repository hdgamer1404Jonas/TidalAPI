import axios from 'axios';
import { CountryCodes } from '../enums/countryCodes';

class Tracks {
    private apiKey: string | null = null;
    private baseURL: string = 'https://openapi.tidal.com';
    private controlAcceptHeader: string = 'application/vnd.tidal.v1+json';

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    } 

    async getTrackInfo(trackID: string, countryCode: CountryCodes = CountryCodes.US) {
        
    }
}