import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Koindx support token";
  export const SYMBOL: string = "KST";
  export const MINT_PRICE: u64 = 25000000000;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 400;
  export const URI: string = "https://nft.koindx.com/api/support";
  export const OWNER: Uint8Array = Base58.decode("18qdYiNmKojuxDnkGeyrhsA423ifxwiWNC");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("18qdYiNmKojuxDnkGeyrhsA423ifxwiWNC");
}