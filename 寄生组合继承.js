function Parent(value) {
	this.val = value
}
Parent.prototype.getValue = function () {
	cosnole.log(this.val)
}

function Child(value) {
	Parent.call(this, value)
}

Child.prototype = Object.create(Parent.prototype, {
	constructor: {
		value: Child
	}
})

const child = new Child(1)
child.getValue()
child instanceof Parent