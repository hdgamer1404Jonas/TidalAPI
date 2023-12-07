import axios from 'axios';
import Tracks from './endpoints/tracks';

export class TidalAPI {
    private apiKey: string | null = null;

    public tracks: Tracks | null = null;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.tracks = new Tracks(apiKey);

        console.log('TidalAPI initialized.');
    }
}

export * from './enums/countryCodes';
export * from './errors/errors';