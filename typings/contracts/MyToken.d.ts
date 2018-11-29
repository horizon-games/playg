/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";

export class MyToken extends Contract {
  functions: {
    balanceOf(owner: string): Promise<BigNumber>;

    isMinter(account: string): Promise<boolean>;

    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(
      spender: string,
      value: number | string
    ): Promise<ContractTransaction>;

    initialize(
      name: string,
      symbol: string,
      decimals: number | string
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      value: number | string
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: number | string
    ): Promise<ContractTransaction>;

    mint(to: string, amount: number | string): Promise<ContractTransaction>;

    addMinter(account: string): Promise<ContractTransaction>;

    renounceMinter(): Promise<ContractTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string
    ): Promise<ContractTransaction>;

    transfer(to: string, value: number | string): Promise<ContractTransaction>;

    name(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    INITIAL_SUPPLY(): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    symbol(): Promise<string>;
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