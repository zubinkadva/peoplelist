pragma solidity ^0.4.19;
contract Test {
   
    struct Person {
        bytes32 firstName;
        bytes32 lastName;
        uint256 age;
    }
	
	Person[] public people;
	
    function getA() public constant returns (bool success) {
		Person memory newPerson;
        newPerson.firstName = "jghjg";
        newPerson.lastName = "jjhgjghjgh";
        newPerson.age = 10;
        people.push(newPerson);		
        return true;
    }
	
	function getPeople() public constant returns(bytes32, bytes32, uint256) {
        return (people[0].firstName, people[0].lastName, people[0].age);
    }
}