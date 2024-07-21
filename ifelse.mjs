let score = 80; // Ваш результат на курсах

let grade;

if (score >= 90) {
    grade = 'Оцінка А';
} else if (score >= 80) {
    grade = 'Оцінка Б';
} else if (score >= 60) {
    grade = 'Оцінка С';
} else {
    grade = 'Не здав';
}

console.log(grade); // Выводит: Оцінка Б