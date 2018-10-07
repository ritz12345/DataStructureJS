"use strict";
//Build a constructor function for Linked Lists
function LinkedList(){
	this.head= null;
	this.tail= null;
}



//Build a Constucto function for Nodes.
function Node(value,next,previous){
	this.value=value;
	this.next =next;
	this.previous=previous;
}
LinkedList.prototype.addToHead=function(value){
	var newNode =new Node(value,this.head,null);
}