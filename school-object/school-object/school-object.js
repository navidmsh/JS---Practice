//*************************************************************************** */
// Details of School (Classes-Students-Teacher-Other Informations)
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
                            chemistry: 16,
                        },
                    totAvrage: {
                        lasteExam: [16, 14, 12],
                        lastAvrage: [14],
                        },
                    },
                    number: {
                        ownNumber: 09013455645,
                        parentNumber: 091773664576,
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
                            chemistry: 10,
                        },
                        totAvrage: {
                            lasteExam: [11, 14, 10],
                            lastAvrage: [11.66],
                        },
                    }
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
            infomation: {
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
                    }
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
                    }
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
            infomation: {
                lastSession: [14020110, 14020113, 14020116]
            }
        },
    };

//*************************************************************************** */

// Average Calculation Function for student
function avrageScoreStudent(Average = []) {
    let sum = 0;
    for (let i = 0; i < Average.length; i++) {
         sum += Average[i];
        }
        score = sum / Average.length;
        console.log("The Student Average score is = ",score);
    }
avrageScoreStudent(school.class1.students[0].avrageScores.totAvrage.lasteExam);

// Average Calculation Function for class
function avrageScoreClass(Average = []) {
    let sum = 0;
    for (let i = 0; i < Average.length; i++) {
         sum += Average[i];
        }
        score = sum / Average.length;
        console.log("The Class Average score is = ",score);
    }
avrageScoreClass([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2]]);

// Average Calculation Function for school
function avrageScoreSchool(Average = []) {
    let sum = 0;
    for (let i = 0; i < Average.length; i++) {
         sum += Average[i];
        }
        score = sum / Average.length;
        console.log("The school Average score is = ",score);
    }
avrageScoreSchool([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2],school.class2.students[0].avrageScores.totAvrage.lasteExam[0],school.class2.students[0].avrageScores.totAvrage.lasteExam[1],school.class2.students[0].avrageScores.totAvrage.lasteExam[2],school.class2.students[1].avrageScores.totAvrage.lasteExam[0],school.class2.students[1].avrageScores.totAvrage.lasteExam[1],school.class2.students[1].avrageScores.totAvrage.lasteExam[2]]);

//*************************************************************************** */

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// (First-Way) Number of Students CAlculation
function stuNum(numStudent) { 
        let num = numStudent.length;
        console.log('The Number is = ',num);
    }
// (First-Way) Number of Students CAlculation Output
stuNum(school.class1.students)

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// (second-way) Number of Students CAlculation
console.log('The Number is = ',school.class1.students.length);

//*************************************************************************** */

// First-Way of Max and Min Calculation
function forLoopMinMax1  (array= [])  {
    let min = array[0], max = array[0]

    for (let i = 0; i < array.length; i++) {
      let value = array[i]
      min = (value < min) ? value : min
      max = (value > max) ? value : max
    }

    console.log("min = ",min );
    console.log("max = ",max );
  }

// Output First-Way of Max and Min Calculation
// forLoopMinMax1(school.class1.students[0].avrageScores.totAvrage.lasteExam);

//Second-Way of Max and Min Calculation
function forLoopMinMax2  (array= [])  {
    let min = array[0], max = array[0] 

    for (let i = 0; i < array.length; i++) {
      let value = array[i]
      if (value<min) {
        min = value;
      } 
      else{
        min = min;
      }
      if (value>max) {
        max = value;
      } 
      else{
        max = max;
      }
    }

    console.log("min = ",min );
    console.log("max = ",max );
  }

// Min-Max Student
forLoopMinMax2(school.class1.students[0].avrageScores.totAvrage.lasteExam);
// Min-Max Class
forLoopMinMax2([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2]]);
// Min-Max School
forLoopMinMax2([school.class1.students[0].avrageScores.totAvrage.lasteExam[0],school.class1.students[0].avrageScores.totAvrage.lasteExam[1],school.class1.students[0].avrageScores.totAvrage.lasteExam[2],school.class1.students[1].avrageScores.totAvrage.lasteExam[0],school.class1.students[1].avrageScores.totAvrage.lasteExam[1],school.class1.students[1].avrageScores.totAvrage.lasteExam[2],school.class2.students[0].avrageScores.totAvrage.lasteExam[0],school.class2.students[0].avrageScores.totAvrage.lasteExam[1],school.class2.students[0].avrageScores.totAvrage.lasteExam[2],school.class2.students[1].avrageScores.totAvrage.lasteExam[0],school.class2.students[1].avrageScores.totAvrage.lasteExam[1],school.class2.students[1].avrageScores.totAvrage.lasteExam[2]]);
//*************************************************************************** */