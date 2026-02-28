let grade = -1;

if (grade >= 0) {
    if (grade >= 90 && grade <= 100) {
        console.log("Grade is A");
    }
    else if (grade >= 80 && grade <= 89) {
        console.log("Grade is B");
    }
    else if (grade >= 70 && grade <= 79) {
        console.log("Grade is C");
    }
    else if (grade >= 60 && grade <= 69) {
        console.log("Grade is D");
    }
    else if (grade >= 0 && grade <= 59) {
        console.log("Grade is F");
    }
}
else {
    console.log("Invalid Grade");
}


