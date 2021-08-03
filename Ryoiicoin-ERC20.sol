pragma solidity ^0.8.2;

contract RyoiiCoin {

    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowance;

    uint public totalCoin = 100000000;
    string public name = "Ryoii Coin";
    string public symbol = "RYC";
    uint public decimal = 18;

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);

    constructor(){
        balances[msg.sender] = totalCoin;
    }

    function balanceOf(address owner) public view returns(uint){
        return balances[owner];
    }

    function transfer(address to, uint value) public returns(bool){

        require(balanceOf(msg.sender) >= value ,'balance not match for this transection');

        balances[to] += value;
        balances[msg.sender] -= value;
        emit Transfer(msg.sender,to,value);
        return true;
    }

    function transferFrom(address from, address to, uint value) public returns(bool){

        require(balanceOf(from) >= value,'balance not match for this transection');
        require(allowance[from][msg.sender] >= value,'balance not match for this transection');

        balances[to] += value;
        balances[from] -= value;
        emit Transfer(from,to,value);
        return true;
    }

    function approve(address spender, uint value) public returns(bool){
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender,spender,value);
        return true;
    }
}
