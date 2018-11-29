pragma solidity ^0.4.24;

import "openzeppelin-eth/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-eth/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-eth/contracts/token/ERC20/ERC20Mintable.sol";


contract MyToken is ERC20, ERC20Detailed, ERC20Mintable {

  string public name = "MyToken";
  string public symbol = "MYT";
  uint8 public decimals = 18;
  uint256 public INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

  constructor() public {
    ERC20Detailed.initialize(name, symbol, decimals);
    ERC20Mintable.initialize(msg.sender);
    mint(msg.sender, INITIAL_SUPPLY);
  }

}
