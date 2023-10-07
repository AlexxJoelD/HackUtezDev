import { Request } from 'express';

export type Entity<Tidentifier extends number | string> = {
    id?: Tidentifier
}

export type ResponseApi<T> = {
    code: number,
    error?: boolean,
    message?: string,
    data?: T | T[],
    total?: number
    count?: number
    token?: string
}


export interface RequestTimePoa  extends Request {
    toTime?: boolean
}

export type ResponseEmail<T> = {
    email: string
    url?: string
    password?: string
    data?: T
    emails ?: string[]
}

export type PaginationDto = {
    valueName?: string;
    value?: string;
    pagination: {
        filter: string;
        page: number;
        order: string;
        sortBy: string;
        limit?: number;
        offset?: number;
    }
}



