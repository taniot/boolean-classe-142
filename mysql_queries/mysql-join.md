# Query SELECT


## 1. Selezionare tutti gli studenti iscritti al Corso di Laurea in Economia

```
SELECT `degrees`.`name`, CONCAT(`students`.`name`, " ", `students`.`surname`) AS `fullname`
FROM `students`
JOIN `degrees` ON `students`.`degree_id` = `degrees`.`id`
WHERE `degrees`.`name` = "Corso di Laurea in Economia"
```

## 2. Selezionare tutti i Corsi di Laurea Magistrale del Dipartimento di Neuroscienze

```
SELECT `departments`.`name` AS `department_name`, `degrees`.`name` AS `degree_name`
FROM `departments`
JOIN `degrees` ON `departments`.`id` = `degrees`.`department_id`
WHERE `departments`.`name` = "Dipartimento di Neuroscienze"
AND `degrees`.`level` = "magistrale"
```

## 3. Selezionare tutti i corsi in cui insegna Fulvio Amato (id=44)

```
SELECT *
FROM `courses`
JOIN `course_teacher` ON `courses`.`id` = `course_teacher`.`course_id`
JOIN `teachers`ON `teachers`.`id` = `course_teacher`.`teacher_id`
#WHERE `teachers`.`id` = 44
WHERE `teachers`.`name` = "Fulvio" AND `teachers`.`surname` = "Amato"
```

## 4. Selezionare tutti gli studenti con i dati relativi al corso di laurea a cui
sono iscritti e il relativo dipartimento, in ordine alfabetico per cognome e
nome

```
SELECT 
    `students`.`name` AS `student_name`,
    `students`.`surname` AS `student_surname`,
    `departments`.`name` AS `department_name`,
    `degrees`.`name` AS `degree_name`
FROM
    `students`
        JOIN
    `degrees` ON `degrees`.`id` = `students`.`degree_id`
        JOIN
    `departments` ON `departments`.`id` = `degrees`.`department_id`
ORDER BY `student_surname`, `student_name`
```

## 5. Selezionare tutti i corsi di laurea con i relativi corsi e insegnanti

```
SELECT degrees.name AS nome_corso_laurea, courses.name AS nome_corso, teachers.name AS nome_insegnante, teachers.surname AS cognome_insegnante 
FROM degrees
JOIN courses ON degrees.id = courses.degree_id
JOIN course_teacher ON courses.id = course_teacher.course_id
JOIN teachers ON teachers.id = course_teacher.teacher_id
```

## 6. Selezionare tutti i docenti che insegnano nel Dipartimento di Matematica (54)

```
SELECT DISTINCT
	teachers.name AS nome_insegnante, 
	teachers.surname AS cognome_insegnante, 
	departments.name AS nome_dipartimento
FROM teachers
JOIN course_teacher ON teachers.id = course_teacher.teacher_id
JOIN courses ON courses.id = course_teacher.course_id
JOIN degrees ON courses.degree_id = degrees.id
JOIN departments ON departments.id = degrees.department_id
WHERE departments.name = "Dipartimento di Matematica"
ORDER BY nome_insegnante, cognome_insegnante
```

## 7. BONUS: 


Selezionare per ogni studente il numero di tentativi sostenuti
per ogni esame, 
stampando anche il voto massimo. 
Successivamente,
filtrare i tentativi con voto minimo 18.

```
SELECT 
    COUNT(`exam_student`.`vote`) AS `numero_tentativi`,
    `students`.`name`,
    `students`.`surname`,
    `exams`.`course_id`,
    MAX(`exam_student`.`vote`) AS `voto_massimo`,
    MIN(`exam_student`.`vote`) AS `voto_minimo`
FROM
    `students`
        JOIN
    `exam_student` ON `students`.`id` = `exam_student`.`student_id`
        JOIN
    `exams` ON `exams`.`id` = `exam_student`.`exam_id`
GROUP BY `students`.`id` , `exams`.`course_id`
HAVING  `voto_massimo` >= 18
```