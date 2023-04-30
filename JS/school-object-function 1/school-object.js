//*******************************************************************************************************************************************************************/
// Information of School (Classes & Students & Teacher & SubDetails)
let school = {
    class1: {
        students: [
            student01 = {
                personal: {
                    firstName: 'Akbar',
                    lastName: 'Akbari',
                    age: 17
                },
                avrageScores: {
                    lesson: {
                        math: 14,
                        physics: 12,
                        chemistry: 16
                    },
                    totAvrage: {
                        lasteExam: [16, 14, 12],
                        lastAvrage: [14]
                    },
                },
                callNumber: {
                    ownNumber: 09013455645,
                    parentNumber: 091773664576
                },
            },
            student02 = {
                personal: {
                    firstName: 'mammad',
                    lastName: 'mammadian',
                    age: 18
                },
                avrageScores: {
                    lesson: {
                        math: 14,
                        physics: 11,
                        chemistry: 10
                    },
                    totAvrage: {
                        lasteExam: [11, 14, 10],
                        lastAvrage: [11.66]
                    },
                },
                callNumber: {
                    ownNumber: 09125462123,
                    parentNumber: 09158885191
                },
            }
        ],
        teacher: {
            personal: {
                firstName: 'radmehr',
                lastName: 'radmehri',
                age: 38
            },
            addres: {
                country: 'iran',
                city: 'bushehr',
                street: 'sangy',
                phone: 09173457788
            }
        },
        entryDate: {
            lastSession: [14020110, 14020113, 14020116]
        }
    },
    class2: {
        students: [
            student01 = {
                personal: {
                    firstName: 'farzad',
                    lastName: 'farzadi',
                    age: 18
                },
                avrageScores: {
                    lesson: {
                        math: 17,
                        physics: 15,
                        chemistry: 18,
                    },
                    totAvrage: {
                        lasteExam: [15, 17, 18],
                        lastAvrage: [16.66],
                    },
                },
                callNumber: {
                    ownNumber: 09174587324,
                    parentNumber: 09051245869
                },
            },
            student02 = {
                personal: {
                    firstName: 'faramarz',
                    lastName: 'ahmadnia',
                    age: 18
                },
                avrageScores: {
                    lesson: {
                        math: 13.75,
                        physics: 10,
                        chemistry: 10,
                    },
                    totAvrage: {
                        lasteExam: [10, 13.74, 10],
                        lastAvrage: [11.25],
                    },
                },
                callNumber: {
                    ownNumber: 09168527436,
                    parentNumber: 09184578624
                },
            }
        ],
        teacher: {
            personal: {
                firstName: 'kian',
                lastName: 'kiany',
                age: 40
            },
            addres: {
                country: 'iran',
                city: 'bushehr',
                street: 'ashori',
                phone: 09171230101
            }
        },
        entryDate: {
            lastSession: [14020110, 14020113, 14020116]
        }
    },
};
//*******************************************************************************************************************************************************************/
// Average Calculation Function for Student
function avrageScoreStudent(score = []) {
let sum = 0;
for (let i = 0; i < score.length; i++) {
     sum += score[i];
    }
    average = sum / score.length;
    console.log("The Student Average score is = ", average);
}
avrageScoreStudent(school.class1.students[0].avrageScores.totAvrage.lasteExam);

// Average Calculation Function for Class
function avrageScoreClass(score = []) {
let sum = 0;
for (let i = 0; i < score.length; i++) {
     sum += score[i];
    }
    average = sum / score.length;
    console.log("The Class Average score is = ", average);
}
avrageScoreClass([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2]]);

// Average Calculation Function for School
function avrageScoreSchool(score = []) {
let sum = 0;
for (let i = 0; i < score.length; i++) {
     sum += score[i];
    }
    Average = sum / score.length;
    console.log("The school Average score is = ", Average);
}
avrageScoreSchool([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2],school.class2.students[0].avrageScores.totAvrage.lasteExam[0],school.class2.students[0].avrageScores.totAvrage.lasteExam[1],school.class2.students[0].avrageScores.totAvrage.lasteExam[2],school.class2.students[1].avrageScores.totAvrage.lasteExam[0],school.class2.students[1].avrageScores.totAvrage.lasteExam[1],school.class2.students[1].avrageScores.totAvrage.lasteExam[2]]);
//*******************************************************************************************************************************************************************/
// ###(First-Way)### count Number of Students 
function stuNum(numStudent) { 
    let num = numStudent.length;
    console.log('The Number is (using for-loop) = ', num);
}
stuNum(school.class1.students)
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// ###(second-way)### count Number of Students
console.log('The Number is (using simple addressing) = ',school.class1.students.length);
//*******************************************************************************************************************************************************************/
// ###(Analogical-Way)### Calculation of Max and Min Score for Students
function MinMaxAnalogical (array= [])  {
let min = array[0], max = array[0]
for (let i = 0; i < array.length; i++) {
  let value = array[i]
  min = (value < min) ? value : min
  max = (value > max) ? value : max
}
console.log("The Min(Alalogical) score for this student is = ", min );
console.log("The Max(Alalogical) score for this student is = ", max );
}
MinMaxAnalogical(school.class1.students[0].avrageScores.totAvrage.lasteExam);
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// ###(Conditional-Way: if)### Calculation of Max or Min Score for Students
function MinMaxStuConditional (array= [])  {
let min = array[0], max = array[0] 
for (let i = 0; i < array.length; i++) {
  let value = array[i]
  if (value<min) {
    min = value;
  } 
  else if (value>max){
    max = value;
  }
  else{
    min = min;
    max = max;
  }
}
console.log("The Min(Conditional) Score for this student is = ", min );
console.log("The Max(Conditional) Score for this student is = ", max );
}
MinMaxStuConditional(school.class1.students[0].avrageScores.totAvrage.lasteExam);
// ###(Conditional-Way: if)### Calculation of Max and Min Score for Class
function MinMaxClassConditional (array= [])  {
let min = array[0], max = array[0] 
for (let i = 0; i < array.length; i++) {
  let value = array[i]
  if (value<min) {
    min = value;
  } 
  else if (value>max){
    max = value;
  }
  else{
    min = min;
    max = max;
  }
}
console.log("The Min(Conditional) Score for this class is = ", min );
console.log("The Max(Conditional) Score for this class is = ", max );
}
MinMaxClassConditional([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2]]);
// ###(Conditional-Way: if)### Calculation of Max or Min SCore for School
function MinMaxSchoolConditional (array= [])  {
let min = array[0], max = array[0] 
for (let i = 0; i < array.length; i++) {
  let value = array[i]
  if (value<min) {
    min = value;
  } 
  else if (value>max){
    max = value;
  }
  else{
    min = min;
    max = max;
  }
}
console.log("The Min(Conditional) Score for this school is = ", min );
console.log("The Max(Conditional) Score for this school is = ", max );
}
MinMaxSchoolConditional([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2],school.class2.students[0].avrageScores.totAvrage.lasteExam[0],school.class2.students[0].avrageScores.totAvrage.lasteExam[1],school.class2.students[0].avrageScores.totAvrage.lasteExam[2],school.class2.students[1].avrageScores.totAvrage.lasteExam[0],school.class2.students[1].avrageScores.totAvrage.lasteExam[1],school.class2.students[1].avrageScores.totAvrage.lasteExam[2]]);
//*******************************************************************************************************************************************************************/