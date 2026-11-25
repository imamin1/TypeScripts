"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkGrade = (grade) => {
    if (grade > 100 || grade < 0) {
        return "Invalid Score";
    }
    else if (grade >= 90) {
        return "A";
    }
    else if (grade >= 80) {
        return "B";
    }
    else if (grade >= 70) {
        return "C";
    }
    else if (grade >= 60) {
        return "D";
    }
    else {
        return "F";
    }
};
checkGrade(85);
//# sourceMappingURL=index.js.map