window.onload=function(){
	/*generator函数
	function * gen(){
		let val =  yield 'itstrive';
		yield axios.get(`http://api.github.com/users/${val}`);

	}

	let g1 = gen();
	let username = g1.next().value;
	g1.next(username).value.then(res=>{
		console.log(res.data);
	})*/



	/*数据类型symbol
	let symb=Symbol('slina');

	let json ={
		a:'apple',
		b:'banana',
		[symb]:'aaa'
	}

	console.log(json[symb]);*/

	/*类
	class Person{
			constructor(name,age){
				this.name=name;
				this.age=age;
			}
			static aaa(){
				return `这是静态方法`
			}
			showName(){
				return `名字为：${this.name}`;
			}
			showAge(){
				return `年龄为：${this.age}`;
			}
	}
	class Student extends Person{
		 constructor(name,skill){
			super(name);
			this.skill=skill;
		}
		showSkill(){
			return `技能为：${this.skill}`;
		}
	
	}

	let stu = new Student('slianjary','上学');
	console.log(stu.showName());
	console.log(stu.showSkill());

	let p1 = new Person("slina",20);
	console.log(p1.showName());
	console.log(p1.showAge());  
	console.log(Person.aaa());

	function Person(name,age){
		this.name=name;
		this.age=age;
	}

	Object.assign(Person.prototype,{
		showName(){
			return `名字为：${this.name}`;
		},
		showAge(){
			return `年龄为：${this.age}`;
		}
	});

	let p1 = new Person("Slina",19);
	console.log(p1.showName());
	console.log(p1.showAge());*/
}