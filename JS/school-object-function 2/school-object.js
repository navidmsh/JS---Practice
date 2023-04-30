// Information of School (Classes & Students & Teacher & SubDetails)
let school = [
    // Class A
    {
        // class information
        classInfo: {
            className: 'Class A',
            capacity: 15
        },

        // teacher information
        teacherInfo: {
            teacherName: 'AmirHossein Khateri',
            phoneNumber: 09177299123
        },

        // students information
        students: [
            // student 1
            {
                studentName: 'Farhad',
                age: 20,
                lastScore: 18.5
            },
            // student 2
            {
                studentName: 'Mehrdad',
                age: 18,
                lastScore: 19
            },
            // student 3
            {
                studentName: 'Navid',
                age: 32,
                lastScore: 17
            }
        ]
    },
    // class B
    {
        // class information
        classInfo: {
            className: 'Class B',
            capacity: 20
        },

        // teacher information
        teacherInfo: {
            teacherName: 'AmirHossein Khateri',
            phoneNumber: 09177299123
        },

        // students information
        students: [
            // student 1
            {
                studentName: 'Majid',
                age: 27,
                lastScore: 20
            },
            // student 2
            {
                studentName: 'AmirHossein',
                age: 17,
                lastScore: 18.25
            },
            // student 3
            {
                studentName: 'Alireza',
                age: 17,
                lastScore: 19
            }
        ]
    },
    // class C
    {
        // class information
        classInfo: {
            className: 'Class C',
            capacity: 13
        },

        // teacher information
        teacherInfo: {
            teacherName: 'AmirHossein Khateri',
            phoneNumber: 09177299123
        },

        // students information
        students: [
            // student 1
            {
                studentName: 'Sara',
                age: 22,
                lastScore: 20
            },
            // student 2
            {
                studentName: 'Tara',
                age: 20,
                lastScore: 19.5
            },
            // student 3
            {
                studentName: 'Aye',
                age: 17,
                lastScore: 19
            }
        ]
    }
];
// ***********************************************************
// Calculate the number of the students:
function studentNum(institution = []){
    // input validation
    if (institution.length == []){
        console.log('please Enter a data');
    } else{
        // number Calculation
        let studentSum = 0;
        for (let i = 0; i < institution.length; i++) {
            studentSum += school[i].students.length;
        }
        // get output
        return studentSum
    }
}
// calling function
console.log("The student's number is: " + studentNum(school));
studentNum(school)
// ***********************************************************
// Calculate the average of scores
function studentsScoreAvg(institution = []) {
    // input validation
    if (institution.length == []){
        console.log('please Enter a data');
    } else{
        // number Calculation
        let studentsScoreSum = 0;
        let studentsAveScore = 0;
        for (let i = 0; i < institution.length; i++) {
            for (let j = 0; j < institution[i].students.length; j++) {
                studentsScoreSum += school[i].students[j].lastScore;
            }
        }
        studentsAveScore = studentsScoreSum / studentNum(school);
        // print output
        console.log("The student's Average score is: " + studentsAveScore);
    }
}
// calling function
studentsScoreAvg(school)

//*************************************************************************/
// Calculate min & max score
function MinMax (institution= [])  {
    // initial definition
    let min = institution[0].students[0].lastScore, max = institution[0].students[0].lastScore
        // loop for measurement
        for (let i = 0; i < institution.length; i++) {
            for (let j = 0; j < institution[i].students.length; j++) {
                let value = institution[i].students[j].lastScore
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
        }
    // print output
    console.log("The Min(Conditional) Score for this student is = ", min );
    console.log("The Max(Conditional) Score for this student is = ", max );
}
// calling function
MinMax(school)

/// ###(Analogical-Way)### Calculation of Max and Min Score for Students
// function MinMaxAnalogical (institution = [])  {
//     let min = institution[0].students[0].lastScore, max = institution[0].students[0].lastScore
//         for (let i = 0; i < institution.length; i++) {
//             for (let j = 0; j < institution[i].students.length; j++) {
//                 let value = institution[i].students[j].lastScore
//             min = (value < min) ? value : min
//             max = (value > max) ? value : max
//     }
//     console.log("The Min(Alalogical) score for this student is = ", min );
//     console.log("The Max(Alalogical) score for this student is = ", max );
// }
// MinMaxAnalogical(school);
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// ###(Conditional-Way: if)### Calculation of Max or Min Score for Students*******************************************************************************************************************************************************************/
// // Average Calculation Function for Student
// function avrageScoreStudent(score = []) {
// let sum = 0;
// for (let i = 0; i < score.length; i++) {
//      sum += score[i];
//     }
//     average = sum / score.length;
//     console.log("The Student Average score is = ", average);
// }
// avrageScoreStudent(school.class1.students[0].avrageScores.totAvrage.lasteExam);

// // Average Calculation Function for Class
// function avrageScoreClass(score = []) {
// let sum = 0;
// for (let i = 0; i < score.length; i++) {
//      sum += score[i];
//     }
//     average = sum / score.length;
//     console.log("The Class Average score is = ", average);
// }
// avrageScoreClass([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2]]);

// // Average Calculation Function for School
// function avrageScoreSchool(score = []) {
// let sum = 0;
// for (let i = 0; i < score.length; i++) {
//      sum += score[i];
//     }
//     Average = sum / score.length;
//     console.log("The school Average score is = ", Average);
// }
// avrageScoreSchool([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2],school.class2.students[0].avrageScores.totAvrage.lasteExam[0],school.class2.students[0].avrageScores.totAvrage.lasteExam[1],school.class2.students[0].avrageScores.totAvrage.lasteExam[2],school.class2.students[1].avrageScores.totAvrage.lasteExam[0],school.class2.students[1].avrageScores.totAvrage.lasteExam[1],school.class2.students[1].avrageScores.totAvrage.lasteExam[2]]);
// //*******************************************************************************************************************************************************************/
// // ###(First-Way)### count Number of Students 
// function stuNum(numStudent) { 
//     let num = numStudent.length;
//     console.log('The Number is (using for-loop) = ', num);
// }
// stuNum(school.class1.students)
// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// // ###(second-way)### count Number of Students
// console.log('The Number is (using simple addressing) = ',school.class1.students.length);
// //*******************************************************************************************************************************************************************/
// // ###(Analogical-Way)### Calculation of Max and Min Score for Students
// function MinMaxAnalogical (array= [])  {
// let min = array[0], max = array[0]
// for (let i = 0; i < array.length; i++) {
//   let value = array[i]
//   min = (value < min) ? value : min
//   max = (value > max) ? value : max
// }
// console.log("The Min(Alalogical) score for this student is = ", min );
// console.log("The Max(Alalogical) score for this student is = ", max );
// }
// MinMaxAnalogical(school.class1.students[0].avrageScores.totAvrage.lasteExam);
// //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// // ###(Conditional-Way: if)### Calculation of Max or Min Score for Students
// function MinMaxStuConditional (array= [])  {
// let min = array[0], max = array[0] 
// for (let i = 0; i < array.length; i++) {
//   let value = array[i]
//   if (value<min) {
//     min = value;
//   } 
//   else if (value>max){
//     max = value;
//   }
//   else{
//     min = min;
//     max = max;
//   }
// }
// console.log("The Min(Conditional) Score for this student is = ", min );
// console.log("The Max(Conditional) Score for this student is = ", max );
// }
// MinMaxStuConditional(school.class1.students[0].avrageScores.totAvrage.lasteExam);
// // ###(Conditional-Way: if)### Calculation of Max and Min Score for Class
// function MinMaxClassConditional (array= [])  {
// let min = array[0], max = array[0] 
// for (let i = 0; i < array.length; i++) {
//   let value = array[i]
//   if (value<min) {
//     min = value;
//   } 
//   else if (value>max){
//     max = value;
//   }
//   else{
//     min = min;
//     max = max;
//   }
// }
// console.log("The Min(Conditional) Score for this class is = ", min );
// console.log("The Max(Conditional) Score for this class is = ", max );
// }
// MinMaxClassConditional([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2]]);
// // ###(Conditional-Way: if)### Calculation of Max or Min SCore for School
// function MinMaxSchoolConditional (array= [])  {
// let min = array[0], max = array[0] 
// for (let i = 0; i < array.length; i++) {
//   let value = array[i]
//   if (value<min) {
//     min = value;
//   } 
//   else if (value>max){
//     max = value;
//   }
//   else{
//     min = min;
//     max = max;
//   }
// }
// console.log("The Min(Conditional) Score for this school is = ", min );
// console.log("The Max(Conditional) Score for this school is = ", max );
// }
// MinMaxSchoolConditional([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2],school.class2.students[0].avrageScores.totAvrage.lasteExam[0],school.class2.students[0].avrageScores.totAvrage.lasteExam[1],school.class2.students[0].avrageScores.totAvrage.lasteExam[2],school.class2.students[1].avrageScores.totAvrage.lasteExam[0],school.class2.students[1].avrageScores.totAvrage.lasteExam[1],school.class2.students[1].avrageScores.totAvrage.lasteExam[2]]);
// //*******************************************************************************************************************************************************************/