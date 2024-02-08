var crudList = [
	{
		name: 'Faizan Ansari',
		email: 'faizanrednwhite@gmail.com',
		phone: '790*****81',
		corse: 'Full Stak'
	},
	{
		name: 'Sufiyan Ansari',
		email: 'sufiyan@gmail.com',
		phone: '790*****81',
		corse: 'Full Stak'
	},
	{
		name: 'Jaymin Bhavasr',
		email: 'faizanrednwhite@gmail.com',
		phone: '790*****81',
		corse: 'Full Stak'
	}
]
let showdata = document.getElementById('showdata')
let Name = document.getElementById('name')
let email = document.getElementById('email')
let number = document.getElementById('number')
let corse = document.getElementById('corse')
let editBtn = document.getElementById('edit')
let addBtn = document.getElementById('add')
let editId,model
class Crud {
	print() {
		showdata.innerHTML = ""
		crudList.forEach((data, i) => {
			showdata.innerHTML += `<tr>
			<td class="p-2 border-2">${data.name}</td>
			<td class="p-2 border-2">${data.email}</td>
			<td class="p-2 border-2">${data.phone}</td>
			<td class="p-2 border-2">${data.corse}</td>
			<td class="p-2 border-2"><button class="btn btn-outline-primary mx-1 border-0" onclick="crudData.editData(${i})"><i class="bi bi-pencil-fill"></i></button>
			<button class="btn btn-outline-danger mx-1 border-0" onclick="crudData.delet(${i})"><i class="bi bi-trash3-fill"></i></button></td>
		</tr>`
		});
	}
	add() {
		var crudAdd = {
			name: Name.value,
			email: email.value,
			phone: number.value,
			corse: corse.value
		}
		crudList.push(crudAdd)
		this.print()
		this.modalToggle(addBtn)
	}
	edit(id) {
		crudList[id].name = Name.value
		crudList[id].email = email.value
		crudList[id].phone = number.value
		crudList[id].corse = corse.value
		this.modalToggle(editBtn)
		this.print()
		Name.value=email.value=number.value=corse.value=null
	}
	delet(id) {
		crudList.splice(id, 1)
		this.print()
	}
	editData(id) {
		editId = id
		this.modalToggle(editBtn)
		Name.value = crudList[id].name;
		email.value = crudList[id].email;
		number.value = crudList[id].phone;
		corse.value = crudList[id].corse;
	}
	modalToggle(btn) {
		model = document.getElementById('modal');
		model.classList.toggle("d-none");
		btn.classList.toggle("d-none")
	}
	close(){
		model.classList.add("d-none");
		addBtn.classList.add("d-none")
		editBtn.classList.add("d-none")
		Name.value=email.value=number.value=corse.value=null
	}
}
var crudData = new Crud
crudData.print()
addBtn.addEventListener("click", function (e) {
	e.preventDefault()
	crudData.add()
})
editBtn.addEventListener("click", function (e) {
	e.preventDefault()
	id = this.index
	crudData.edit(editId)
})

