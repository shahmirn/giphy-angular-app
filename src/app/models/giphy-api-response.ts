interface Datum {
    images: {
        downsized: {
            url: string;
        }
    }
}

export interface GiphyApiResponse {
    data: Datum[];
}
