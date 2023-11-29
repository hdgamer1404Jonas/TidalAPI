// 400 Bad Request
export class BadRequestClientError extends Error {
    /**
     * Return on 400 Bad Request error.
     * @param {string} message - The error message.
    */
    constructor(message: string) {
        super(message);
        this.name = 'BadRequestClientError';
    }
}

// 401 Unauthorized
export class UnauthorizedClientError extends Error {
    /**
     * Return on 401 Unauthorized error.
     * @param {string} message - The error message.
    */
    constructor(message: string) {
        super(message);
        this.name = 'UnauthorizedClientError';
    }
}

// 404 Not Found
export class NotFoundError extends Error {
    /**
     * Return on 404 Not Found error.
     * @param {string} message - The error message.
    */
    constructor(message: string) {
        super(message);
        this.name = 'NotFoundError';
    }
}

// 405 Method Not Supported
export class MethodNotSupportedError extends Error {
    /**
     * Return on 405 Method Not Supported error.
     * @param {string} message - The error message.
    */
    constructor(message: string) {
        super(message);
        this.name = 'MethodNotSupportedError';
    }
}

// 406 Not Acceptable
export class NotAcceptableError extends Error {
    /**
     * Return on 406 Not Acceptable error.
     * @param {string} message - The error message.
    */
    constructor(message: string) {
        super(message);
        this.name = 'NotAcceptableError';
    }
}

// 415 Unsupported Media Type
export class UnsupportedMediaTypeError extends Error {
    /**
     * Return on 415 Unsupported Media Type error.
     * @param {string} message - The error message.
    */
    constructor(message: string) {
        super(message);
        this.name = 'UnsupportedMediaTypeError';
    }
}

// 451
export class UnavailableForLegalReasonsError extends Error {
    /**
     * Return on 451 error.
     * @param {string} message - The error message.
    */
    constructor(message: string) {
        super(message);
        this.name = 'UnavailableForLegalReasonsError';
    }
}

// 500 Internal Server Error
export class InternalServerError extends Error {
    /**
     * Return on 500 Internal Server Error.
     * @param {string} message - The error message.
    */
    constructor(message: string) {
        super(message);
        this.name = 'InternalServerError';
    }
}


export async function handle(error: any) {
    if (error.response.status === 400) {
        throw new BadRequestClientError(error.response.data);
    } else if (error.response.status === 401) {
        throw new UnauthorizedClientError(error.response.data);
    } else if (error.response.status === 404) {
        throw new NotFoundError(error.response.data);
    } else if (error.response.status === 405) {
        throw new MethodNotSupportedError(error.response.data);
    } else if (error.response.status === 406) {
        throw new NotAcceptableError(error.response.data);
    } else if (error.response.status === 415) {
        throw new UnsupportedMediaTypeError(error.response.data);
    } else if (error.response.status === 451) {
        throw new UnavailableForLegalReasonsError(error.response.data);
    } else {
        throw new Error(error.response.data);
    }
}