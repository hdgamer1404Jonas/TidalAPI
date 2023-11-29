import axios, { Axios } from 'axios';
import { CountryCodes } from '../enums/countryCodes';
import * as errors from '../errors/errors';

export default class Tracks {
    private apiKey: string | null = null;
    private baseURL: string = 'https://openapi.tidal.com';
    private controlAcceptHeader: string = 'application/vnd.tidal.v1+json';

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    } 

    /**
     * Get the info of a track by its ID.
     * @param trackID 
     * @param countryCode
     */
    async getTrackInfo(trackID: string, countryCode: CountryCodes = CountryCodes.US) {
        // id needs to be in path, country code in query
        const url = `${this.baseURL}/tracks/${trackID}?countryCode=${countryCode}`;
        const headers = {
            'X-Tidal-Token': this.apiKey,
            'Accept': this.controlAcceptHeader
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error: any) {
            return await errors.handle(error);
        }
    }

    /**
     * Get the info of multiple tracks by their IDs.
     * @param trackIDs 
     * @param countryCode
     */
    async getTrackInfoMultiple(trackIDs: string[], countryCode: CountryCodes = CountryCodes.US) {
        // trackids needs to be in query, country code in query
        const url = `${this.baseURL}/tracks?trackIds=${trackIDs.join(',')}&countryCode=${countryCode}`;
        const headers = {
            'X-Tidal-Token': this.apiKey,
            'Accept': this.controlAcceptHeader
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error: any) {
            return await errors.handle(error);
        }
    }

    /**
     * Get the info of multiple tracks by their ISRCs.
     * @param isrc
     * @param countryCode
     */
    async getTracksByISRC(isrc: string, countryCode: CountryCodes = CountryCodes.US) {
        // isrc needs to be in query, country code in query
        const url = `${this.baseURL}/tracks/isrc/${isrc}?countryCode=${countryCode}`;
        const headers = {
            'X-Tidal-Token': this.apiKey,
            'Accept': this.controlAcceptHeader
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error: any) {
            return await errors.handle(error);
        }
    }

    async getSimilarTracks(trackID: string, countryCode: CountryCodes = CountryCodes.US, offset: number = 0, limit: number = 50) {
        // trackid needs to be in path, country code in query, offset in query, limit in query
        const url = `${this.baseURL}/tracks/${trackID}/similar?countryCode=${countryCode}&offset=${offset}&limit=${limit}`;
        const headers = {
            'X-Tidal-Token': this.apiKey,
            'Accept': this.controlAcceptHeader
        };

        try {
            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error: any) {
            return await errors.handle(error);
        }
    }
}