pragma solidity ^0.4.19;

contract SimpleStore {

  event ValueChanged(string oldValue, string newValue);

  string _value;
  string _blah;

  function setValue(string value) public {
    ValueChanged(_value, value);
    _value = value;
    _blah = value;
  }

  function getValue() constant public returns (string value) {
    return _value;
  }

}
