pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";


contract MyToken is ERC20, ERC20Detailed, ERC20Mintable {

  string public _name = "MyToken";
  string public _symbol = "MYT";
  uint8 public _decimals = 18;
  uint256 public INITIAL_SUPPLY = 10000 * (10 ** uint256(_decimals));

  constructor() ERC20Detailed(_name, _symbol, _decimals) public {
    mint(msg.sender, INITIAL_SUPPLY);
  }

}