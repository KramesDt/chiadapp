// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 < 0.9.0;

contract Chia {

    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    
    address payable owner;

    constructor (){
        owner = payable(msg.sender);
    }

    function buyChia(string calldata name, string calldata message) external payable {
        require( msg.value > 0, "Please pay more than 0 Ether");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getChia() public view returns (Memo[] memory) {
        return memos;
    }

}


