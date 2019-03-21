pragma solidity ^0.5.2;


contract SimpleStore {

  event ValueChanged(string oldValue, string newValue);

  string _value;

  constructor() public {
    _value = ".";
  }

  function setValue(string memory value) public {
    emit ValueChanged(_value, value);
    _value = value;
  }

  function getValue() public view returns (string memory value) {
    return _value;
  }

}
