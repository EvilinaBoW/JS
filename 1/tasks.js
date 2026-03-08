// ── Block 1 (1–10) ──
// Задача 1: Привет, мир!
function t1() {
    alert("Привет, мир!");
}

// Задача 2: Вывести имя
function t2() {
    alert("Иван");
}

// Задача 3: Переменная и alert
function t3() {
    let city = "Москва";
    alert(city);
}

// Задача 4: Полное имя
function t4() {
    let firstName = "Анна";
    let lastName = "Иванова";
    alert(firstName + " " + lastName);
}

// Задача 5: Год в сообщении
function t5() {
    let year = 2026;
    alert("Сейчас " + year + " год");
}

// Задача 6: Шаблонная строка
function t6() {
    let country = "Россия";
    alert(`Я живу в ${country}`);
}

// Задача 7: Сложение в alert
function t7() {
    alert(5 + 3);
}

// Задача 8: Арифметика
function t8() {
    let a = 10, b = 4;
    alert(a + b); // 14
    alert(a - b); // 6
    alert(a * b); // 40
    alert(a / b); // 2.5
}

// Задача 9: Остаток от деления
function t9() {
    alert(17 % 5); // 2
}

// Задача 10: Итоговая стоимость
function t10() {
    let price = 199, count = 3;
    alert("Итого: " + price * count + " руб.");
}

// ── Block 2 (11–20) ──
// Задача 11: Приветствие
function t11() {
    let name = prompt("Как тебя зовут?");
    alert("Привет, " + name + "!");
}

// Задача 12: Любимый цвет
function t12() {
    let color = prompt("Любимый цвет?");
    alert("Твой любимый цвет — " + color);
}

// Задача 13: Сумма двух чисел
function t13() {
    let a = Number(prompt("Первое число:"));
    let b = Number(prompt("Второе число:"));
    alert("Сумма: " + (a + b));
}

// Задача 14: Имя и фамилия
function t14() {
    let first = prompt("Имя:");
    let last  = prompt("Фамилия:");
    alert("Полное имя: " + first + " " + last);
}

// Задача 15: Возраст через 10 лет
function t15() {
    let age = Number(prompt("Сколько тебе лет?"));
    alert("Через 10 лет: " + (age + 10) + " лет");
}

// Задача 16: °C → °F
function t16() {
    let c = Number(prompt("Температура °C:"));
    let f = c * 1.8 + 32;
    alert(c + "°C = " + f + "°F");
}

// Задача 17: Площадь и периметр
function t17() {
    let w = Number(prompt("Ширина:"));
    let h = Number(prompt("Высота:"));
    alert("Площадь: " + w * h);
    alert("Периметр: " + 2 * (w + h));
}

// Задача 18: Минуты → Ч:М
function t18() {
    let mins = Number(prompt("Минуты:"));
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    alert(mins + " мин = " + h + " ч. " + m + " мин.");
}

// Задача 19: Проверка на null
function t19() {
    let name = prompt("Твоё имя:");
    if (name === null) {
        alert("Имя не введено");
    } else {
        alert("Привет, " + name + "!");
    }
}

// Задача 20: Квадрат числа
function t20() {
    let num = Number(prompt("Введи число:"));
    alert("Квадрат: " + num * num);
}

// ── Block 3 (21–28) ──
// Задача 21: Ты программист?
function t21() {
    let res = confirm("Ты программист?");
    if (res) {
        alert("Добро пожаловать в мир кода!");
    } else {
        alert("Всё ещё впереди!");
    }
}

// Задача 22: Выход из системы
function t22() {
    let exit = confirm("Ты уверен, что хочешь выйти?");
    if (exit) {
        alert("До свидания!");
    } else {
        alert("Остаёмся!");
    }
}

// Задача 23: Проверка возраста
function t23() {
    let adult = confirm("Тебе больше 18 лет?");
    if (adult) {
        alert("Доступ разрешён");
    } else {
        alert("Доступ запрещён");
    }
}

// Задача 24: Подтверждение имени
function t24() {
    let name = prompt("Как тебя зовут?");
    let sure = confirm("Ты точно " + name + "?");
    if (sure) {
        alert("Приятно познакомиться, " + name + "!");
    } else {
        alert("Хм, странно...");
    }
}

// Задача 25: Секрет
function t25() {
    let want = confirm("Хочешь узнать секрет?");
    if (want) {
        alert("JavaScript — это весело!");
    } else {
        alert("Ладно, как хочешь.");
    }
}

// Задача 26: Показать квадрат?
function t26() {
    let num = Number(prompt("Число:"));
    let show = confirm("Показать квадрат " + num + "?");
    if (show) {
        alert(num + "² = " + num * num);
    }
}

// Задача 27: Сменить имя
function t27() {
    let name = prompt("Как тебя зовут?");
    let ch = confirm("Хочешь другое имя?");
    if (ch) {
        name = prompt("Новое имя:");
    }
    alert("Привет, " + name + "!");
}

// Задача 28: Счётчик энтузиазма
function t28() {
    let score = 0;
    if (confirm("Любишь JavaScript?")) score++;
    if (confirm("Любишь программировать?")) score++;
    if (confirm("Учишься каждый день?")) score++;
    alert("Энтузиазм: " + score + " из 3");
}

// ── Block 4 (29–40) ──
// Задача 29: Мини-анкета
function t29() {
    let name = prompt("Имя:");
    let age  = prompt("Возраст:");
    let city = prompt("Город:");
    alert("Имя: "    + name +
          "\nВозраст: " + age +
          "\nГород: "   + city);
}

// Задача 30: Скидка 10%
function t30() {
    let price = Number(prompt("Цена:"));
    let count = Number(prompt("Количество:"));
    let total = price * count;
    alert("Итого: " + total + " руб." +
          "\nСо скидкой: " + total * 0.9 + " руб.");
}

// Задача 31: Среднее трёх чисел
function t31() {
    let a = Number(prompt("Число 1:"));
    let b = Number(prompt("Число 2:"));
    let c = Number(prompt("Число 3:"));
    alert("Среднее: " + (a + b + c) / 3);
}

// Задача 32: Расстояние
function t32() {
    let speed = Number(prompt("Скорость (км/ч):"));
    let time  = Number(prompt("Время (ч):"));
    alert("Расстояние: " + speed * time + " км");
}

// Задача 33: Площадь круга
function t33() {
    let r  = Number(prompt("Радиус:"));
    let pi = 3.14159;
    alert("Площадь: " + (pi * r * r).toFixed(2));
    alert("Длина:   " + (2 * pi * r).toFixed(2));
}

// Задача 34: Секунды → Ч:М:С
function t34() {
    let total = Number(prompt("Секунды:"));
    let h = Math.floor(total / 3600);
    let m = Math.floor((total % 3600) / 60);
    let s = total % 60;
    alert(h + ":" + m + ":" + s);
}

// Задача 35: Новые сообщения
function t35() {
    let name = prompt("Имя:");
    let msgs = Number(prompt("Сообщений:"));
    if (msgs > 0) {
        alert(name + ", у тебя " + msgs + " сообщений!");
    } else {
        alert("Новых сообщений нет.");
    }
}

// Задача 36: Пароль
function t36() {
    let pass = prompt("Введи пароль:");
    if (pass === "1234") {
        alert("Добро пожаловать!");
    } else {
        alert("Неверный пароль.");
    }
}

// Задача 37: Чётное / нечётное
function t37() {
    let num = Number(prompt("Число:"));
    if (num % 2 === 0) {
        alert(num + " — чётное");
    } else {
        alert(num + " — нечётное");
    }
}

// Задача 38: Возрастная группа
function t38() {
    let age = Number(prompt("Возраст:"));
    if (age < 18) {
        alert("Ребёнок / подросток");
    } else if (age <= 60) {
        alert("Взрослый");
    } else {
        alert("Пожилой");
    }
}

// Задача 39: Время года
function t39() {
    let m = Number(prompt("Месяц (1-12):"));
    if      (m >= 3 && m <= 5)  alert("Весна");
    else if (m >= 6 && m <= 8)  alert("Лето");
    else if (m >= 9 && m <= 11) alert("Осень");
    else                         alert("Зима");
}

// Задача 40: Финальная анкета
function t40() {
    let name    = prompt("Имя:");
    let age     = Number(prompt("Возраст:"));
    let student = confirm("Ты студент?");
    let lang    = prompt("Любимый язык программирования:");
    let status  = student ? "Студент" : "Не студент";
    alert(
      "=== АНКЕТА ===\n" +
      "Имя: "     + name    + "\n" +
      "Возраст: " + age     + "\n" +
      "Статус: "  + status  + "\n" +
      "Язык: "    + lang
    );
}
