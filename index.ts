import * as sha256_ from "sha256";

export type ByteArray = number[];
export type Sha256Option = { asBytes: boolean } | { asString: boolean };

export interface sha256 {
    (data: string | ByteArray, option?: Sha256Option): string;

    x2(data: string | ByteArray, option?: Sha256Option): string;
}

export const sha256: sha256 = sha256_;
