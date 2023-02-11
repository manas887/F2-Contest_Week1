/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log

    // let maparr = arr.map(mapped);
    // function mapped(value){
    //   if(value.marks > 50){
    //     return value;
    //   }
    // }
    // console.log(maparr);

    let maparr = arr.map(function(value) {
      if(value.marks>50){
        return value;
      }
    }
  )
    console.log(maparr);

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log

  arr.forEach(infunction);

  function infunction(value){
    if(value.marks>50){
      console.log(value);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  let arr2 = { id: 4, name: "manash", age: "21", marks: 75 };
  arr.push(arr2);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log

  for(let i=0;i<arr.length;i++){

    if(arr[i].marks<50){
      arr.splice(i,1);
      i--;
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "Rohit", age: "19", marks: 89 },
    { id: 6, name: "Michael", age: "24", marks: 45 },
    { id: 7, name: "Obama", age: "20", marks: 65 },
  ];

  arr = arr.concat(arr2);
  console.log(arr);

}
