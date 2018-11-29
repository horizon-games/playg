pragma solidity ^0.4.24;


contract SimpleStore {

  event ValueChanged(string oldValue, string newValue);

  string _value;
  string _blah;

  function setValue(string memory value) public {
    emit ValueChanged(_value, value);
    _value = value;
    _blah = value;
  }

  function getValue() public view returns (string memory value) {
    return _value;
  }

}
