pragma solidity ^0.4.19;
contract People {
    
    Person[] public people;
    
    struct Person {
        bytes32 firstName;
        bytes32 lastName;
        uint age;
    }
    
    function addPerson(bytes32 _firstName, bytes32 _lastName, uint256 _age) returns (bool success) {
        Person memory newPerson;
        newPerson.firstName = _firstName;
        newPerson.lastName = _lastName;
        newPerson.age = _age;
        people.push(newPerson);
		return true;
    }
    
    function getPeople() public view returns(bytes32[], bytes32[], uint256[]) {
        bytes32[] memory firstNames = new bytes32[](people.length);
        bytes32[] memory lastNames = new bytes32[](people.length);
        uint[] memory ages = new uint[](people.length);
        
        for(uint256 i = 0; i < people.length; i++) {
            Person memory currentPerson;
            currentPerson = people[i];
            firstNames[i] = currentPerson.firstName;
            lastNames[i] = currentPerson.lastName;
            ages[i] = currentPerson.age;
        }
        return(firstNames, lastNames, ages);
    }
  
}
