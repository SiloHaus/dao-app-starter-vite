import { ValidNetwork } from "@daohaus/keychain-utils";

export const TARGET_DAO: {
  [key: string]: {
    ADDRESS: string;
    SAFE_ADDRESS: string;
    CHAIN_ID: ValidNetwork;
  };
} = {
  "0x7551eeb016d0c1c8315611053d30bd90d1a4b09b": {
    ADDRESS: "0x7551eeb016d0c1c8315611053d30bd90d1a4b09b",
    SAFE_ADDRESS: "0x6ee647cd1512e50cf2938c273657dee076286ec5",
    CHAIN_ID: "0xa",
  },
  "0xf844b98df9ccdfbe5d460d0d7bdca232cf9da923": {
    ADDRESS: "0xf844b98df9ccdfbe5d460d0d7bdca232cf9da923",
    SAFE_ADDRESS: "0xeb0dc703b854791914f30b5a73dd04d8d22a9aff",
    CHAIN_ID: "0x1",
  },
};
