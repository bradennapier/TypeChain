/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface DataTypesPureInterface extends Interface {
  functions: {
    pure_address: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_bool: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_bytes: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_bytes1: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_enum: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_int256: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_int8: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_named: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_stat_array: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_string: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_struct: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_tuple: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_uint256: TypedFunctionDescription<{ encode([]: []): string }>;

    pure_uint8: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {};
}

export class DataTypesPure extends Contract {
  connect(signerOrProvider: Signer | Provider | string): DataTypesPure;
  attach(addressOrName: string): DataTypesPure;
  deployed(): Promise<DataTypesPure>;

  on(event: EventFilter | string, listener: Listener): DataTypesPure;
  once(event: EventFilter | string, listener: Listener): DataTypesPure;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): DataTypesPure;
  removeAllListeners(eventName: EventFilter | string): DataTypesPure;
  removeListener(eventName: any, listener: Listener): DataTypesPure;

  interface: DataTypesPureInterface;

  functions: {
    pure_address(): Promise<string>;

    pure_bool(): Promise<boolean>;

    pure_bytes(): Promise<string>;

    pure_bytes1(): Promise<string>;

    pure_enum(): Promise<number>;

    pure_int256(): Promise<BigNumber>;

    pure_int8(): Promise<number>;

    pure_named(): Promise<{
      uint256_1: BigNumber;
      uint256_2: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    pure_stat_array(): Promise<number[]>;

    pure_string(): Promise<string>;

    pure_struct(): Promise<{
      uint256_0: BigNumber;
      uint256_1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    pure_tuple(): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    pure_uint256(): Promise<BigNumber>;

    pure_uint8(): Promise<number>;
  };

  pure_address(): Promise<string>;

  pure_bool(): Promise<boolean>;

  pure_bytes(): Promise<string>;

  pure_bytes1(): Promise<string>;

  pure_enum(): Promise<number>;

  pure_int256(): Promise<BigNumber>;

  pure_int8(): Promise<number>;

  pure_named(): Promise<{
    uint256_1: BigNumber;
    uint256_2: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  pure_stat_array(): Promise<number[]>;

  pure_string(): Promise<string>;

  pure_struct(): Promise<{
    uint256_0: BigNumber;
    uint256_1: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  pure_tuple(): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  pure_uint256(): Promise<BigNumber>;

  pure_uint8(): Promise<number>;

  filters: {};

  estimate: {
    pure_address(): Promise<BigNumber>;

    pure_bool(): Promise<BigNumber>;

    pure_bytes(): Promise<BigNumber>;

    pure_bytes1(): Promise<BigNumber>;

    pure_enum(): Promise<BigNumber>;

    pure_int256(): Promise<BigNumber>;

    pure_int8(): Promise<BigNumber>;

    pure_named(): Promise<BigNumber>;

    pure_stat_array(): Promise<BigNumber>;

    pure_string(): Promise<BigNumber>;

    pure_struct(): Promise<BigNumber>;

    pure_tuple(): Promise<BigNumber>;

    pure_uint256(): Promise<BigNumber>;

    pure_uint8(): Promise<BigNumber>;
  };
}
