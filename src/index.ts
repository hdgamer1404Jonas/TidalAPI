import axios from 'axios';

class TidalAPI {
    private apiKey: string | null = null;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }
}

export default TidalAPI;