truffle compile 
truffle migrate 
truffle console
wait 20
People.deployed().then(function(instance) {return instance.addPerson("Taylor", "Smith", 48)})
People.deployed().then(function(instance) {return instance.addPerson("Kenneth", "Williams", 76)})
People.deployed().then(function(instance) {return instance.addPerson("Charles", "Hawtrey", 35)})
