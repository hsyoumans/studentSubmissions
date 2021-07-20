const submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
        address: {
            street: "1025 W. Branch St.",
            street: "",
            city: "Grand Rapids",
            state: "MI",
            zip: "46461"
        },
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
        address: {
            street: "2382 Bach Dr.",
            street: "",
            city: "Davison",
            state: "MD",
            zip: "63845"
        },
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
        address: {
            street: "86724 Highland Ave.",
            street: "APT 105",
            city: "Detroit",
            state: "MI",
            zip: "45632"
        },
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
        address: {
            street: "4523 Travel Lodge Ln.",
            street: "",
            city: "Trails End",
            state: "CA",
            zip: "95412"
        },
    }        
];

var newPass = false;
function setPassed(newScore) {
    if (newScore >= 60) {
        newPass = true;
    }
    return newPass;
}

function findSubmissionsByState(array, state) {
    const states = array.filter(item => item.address.state === state);
    return states;
}

function addSubmission(array, newName, newScore, newDate) {
    let newPass = setPassed(newScore);    
    newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newPass
    };
    array.push(newSubmission);
    return array;
}

function deleteSubmissionByIndex(array, index) {
    let deleted = array.splice(index, 1);
    return deleted;
}

function deleteSubmissionByName(array, name) {
    let nindex = 0;
    nindex = array.findIndex(array => array == name);
    let deleted = array.splice(nindex - 1, 1);
    return deleted;
}

function editSubmission(array, index, score) {
    const item = array[index];
    item.passed = setPassed(score);
    item.score = score;
    return array;
}

function findSumbissionByName(array, name) {
    let newName = name;
    let found = array.find(({name}) => `${name}` == newName);
    return found;
}

function findLowestScore(array) {
    let lowest = array[0];
    array.forEach(array.score => {
        if (array.score < lowest.score) {
            lowest = array.score;
        }
    });
    return lowest;
}

function findAverageScore(array) {
    let average = 0;
    for (let item of array) {
        average += item.score;

    }
    var avg = average/item.length;
    return avg;
}

function filterPassing(array) {
    const passing = array.filter(item => item.passed === true);
    return passing;
}

function filter90AndAbove(array) {
    const greater = array.filter(item => item.score >= 90);
    return greater;
}

//console.log(submissions);
console.log(findSubmissionsByState(submissions, "MI"));
console.log(setPassed(85));
console.log(addSubmission(submissions, "Chance", 89, "2021-06-06"));
console.log(deleteSubmissionByIndex(submissions, 1));
console.log(deleteSubmissionByName(submissions, "Jill"));
console.log(editSubmission(submissions, 2, 78));
console.log(findSumbissionByName(submissions, "Jack"));
console.log(findLowestScore(submissions));
console.log(findAverageScore(submissions));




