const studnetDetails = [
    {name: "Samuel", age: 23, department: "Mathematics", StateOfOrigin: "Abia State"},
    {name: "John", age: 25, department: "Computer Science", stateOfOrigin: "Anambra"},
    {name: "Jude", age: 27, department: "Physics", stateOfOrigin: "Delta"},
    {name: "Mary", age: 29, department: "Chemistry", stateOfOrigin: "Lagos"},
    {name: "Hannah", age: 20, department: "Biology", stateOfOrigin: "Zamfara"},
    {name: "Luke", age: 21, department: "Botany", stateOfOrigin: "Bauchi"},
    {name: "Joseph", age: 22, department: "Dentistry", stateOfOrigin: "Bayelsa"},
    {name: "David", age: 26, department: "Geology", stateOfOrigin: "Borno"},
    {name: "Rebecca", age: 28, department: "Pharmacy", stateOfOrigin: "Rivers"},
    {name: "Lot", age: 25, department:"Geophysics", stateOfOrigin:"Edo"}
]

console.log(studnetDetails)

const containerForList = document.querySelector(".studnetList")

studnetDetails.forEach(student => {
    const listDetails = document.createElement("li");
     listDetails.textContent = `Name: ${student.name} | Age: ${student.age} | Course: ${student.department} | State: ${student.stateOfOrigin}`;
  
  containerForList.appendChild(listDetails);
})