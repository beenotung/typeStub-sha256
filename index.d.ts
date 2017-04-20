type ByteArray = number[];
type Option = { asBytes: boolean } | { asString: boolean };
export interface sha256 {
  (data: string | ByteArray, option?: Option): string;
  x2(data: string | ByteArray, option?: Option): string;
}

