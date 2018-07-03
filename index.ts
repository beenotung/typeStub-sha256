import * as sha256_ from "sha256";

export type ByteArray = number[];
export type Sha256Option = { asBytes: boolean } | { asString: boolean };

export interface sha256 {
    /**
     * return Array{number} of length 32
     * */
    (data: string | ByteArray, option: { asBytes: true }): number[];

    /**
     * return Binary String
     * */
    (data: string | ByteArray, option: { asString: true }): string;

    /**
     * return string in hex of 64 chars
     * */
    (data: string | ByteArray, option?: Sha256Option): string;


    /**
     * return Array{number} of length 32
     * */
    x2(data: string | ByteArray, option: { asBytes: true }): number[];

    /**
     * return Binary String
     * */
    x2(data: string | ByteArray, option: { asString: true }): string;

    x2(data: string | ByteArray, option?: Sha256Option): string;
}

export const sha256: sha256 = sha256_;
