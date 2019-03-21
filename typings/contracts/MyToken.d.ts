/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class MyToken extends Contract {
  functions: {
    balanceOf(owner: string): Promise<BigNumber>;

    isMinter(account: string): Promise<boolean>;

    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(
      spender: string,
      value: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      value: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    mint(
      to: string,
      value: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addMinter(
      account: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    renounceMinter(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transfer(
      to: string,
      value: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    name(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    INITIAL_SUPPLY(): Promise<BigNumber>;
    decimals(): Promise<number>;
    _decimals(): Promise<number>;
    symbol(): Promise<string>;
    _symbol(): Promise<string>;
    _name(): Promise<string>;
  };
  filters: {
    MinterAdded(account: string | null): EventFilter;

    MinterRemoved(account: string | null): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;

    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;
  };
}
