

listStudents = [
{name: 'Joao',
testGradeOne: 6,
testGradeTwo: 5
},
{name: 'Maria',
testGradeOne: 10,
testGradeTwo: 8
},
{name: 'Pedro',
testGradeOne: 8,
testGradeTwo: 6
},
{name: 'Rosa',
testGradeOne: 10,
testGradeTwo: 10
}
];

function average(gradeOne, gradeTwo) {
    return ((gradeOne+gradeTwo)/2).toFixed(1)
}

for (const student of listStudents) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average(student.testGradeOne, student.testGradeTwo)}
    ${average(student.testGradeOne, student.testGradeTwo) >= 7 ? 'Parabéns, ' + student.name + '! Você foi aprovado(a) no concurso!': 'Não foi dessa vez, ' + student.name+ '! Tente novamente!'}`);
    
}
