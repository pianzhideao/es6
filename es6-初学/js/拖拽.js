window.onload=function(){
	class Drag{
		constructor(id){
			this.oDiv = document.querySelector(id);
			this.disx = 0;
			this.disy = 0;
			this.init();
		}
		init(){
			this.oDiv.onmousedown = function(ev){
				this.disx  = ev.clientX - this.oDiv.offsetLeft;
				this.disy  = ev.clientY - this.oDiv.offsetTop;

				document.onmousemove = this.fnMove.bind(this);
				document.onmouseup = this.fnUp.bind(this);
			}.bind(this);

			};
			fnMove(ev){
				
				this.oDiv.style.left = ev.clientX - this.disx + 'px';
				this.oDiv.style.top = ev.clientY - this.disy + 'px';
			};

			fnUp(){
				document.onmousemove = null;
				document.onmouseup = null;
			}
	}
	class Drag2 extends Drag{
		fnMove(ev){
			super.fnMove(ev);

			if(this.oDiv.offsetLeft<=0){
				this.oDiv.style.left=0;
			}
		}
	}
	new Drag('#div1');
	new Drag2('#div2');
}