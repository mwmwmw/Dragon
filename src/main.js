import Memo from "memo";

const DRAG_OVER_CLASS = "dragover";
const DROPPED = "dropped";

export default class Dragon extends Memo {
	constructor({target = null}) {
		super();
		this.target = target;
		this.files = [];
		this.bind();
	}
	bind() {
		this.handleDropProxy = (e) => {
			this.handleDrop(e)
		};
		this.handleDragLeaveProxy = (e) => {
			this.handleDragLeave(e)
		};
		this.handleDragOverProxy = (e) => {
			this.handleDragOver(e)
		};
		this.target.addEventListener("dragover", this.handleDragOverProxy, false);
		this.target.addEventListener("dragleave", this.handleDragLeaveProxy, false);
		this.target.addEventListener("drop", this.handleDropProxy, false);
	}
	unbind() {
		this.target.removeEventListener("dragover", this.handleDragOverProxy);
		this.target.removeEventListener("dragleave", this.handleDragLeaveProxy);
		this.target.removeEventListener("drop", this.handleDropProxy);
	}
	handleDrop(e) {
		e.preventDefault();
		this.trigger("drop", e);
		if (e.dataTransfer.items) {
			this.files = Dragon.getItemList(e.dataTransfer.items)
		} else {
			this.files = e.dataTransfer.files;
		}
		this.trigger("filesReceived", this.files);
		this.target.classList.remove(DRAG_OVER_CLASS);
		this.target.classList.add(DROPPED);
	}
	handleDragOver(e) {
		e.preventDefault();
		this.trigger("dragover", e);
		this.target.classList.remove(DROPPED);
		this.target.classList.add(DRAG_OVER_CLASS);
	}
	handleDragLeave(e) {
		this.trigger("dragleave", e);
		this.target.classList.remove(DRAG_OVER_CLASS);
	}
	static getItemList(items) {
		let files = [];
		for (var i = 0; i < items.length; i++) {
			if (items[i].kind == "file") {
				files.push(items[i].getAsFile());
			}
		}
		return files
	}
	static removeDataTransferItems(items) {
		for (var i = 0; i < items.length; i++) {
			items.remove(i);
		}
	}
}