"use strict";
//Build a constructor function for Linked Lists
function LinkedList(){
	this.head= null;
	this.tail= null;
}



//Build a Constucto function for Nodes.
function Node(value,nextNode,previousNode){
	this.value=value;
	this.next =nextNode;
	this.previous=previousNode;
}
LinkedList.prototype.addToHead=function(value){
	var newNode =new Node(value,this.head,null);
}