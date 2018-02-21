pragma solidity ^0.4.19;

import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

contract SimpleStore is Ownable {

  event ValueChanged(string oldValue, string newValue);

  string _value;

  function setValue(string value) public onlyOwner {
    ValueChanged(_value, value);
    _value = value;
  }

  function getValue() constant public returns (string value) {
    return _value;
  }

}
