# Query SELECT


## 1. Selezionare tutti gli insegnanti

```
SELECT *
FROM `teachers`
```

## 2. Selezionare tutti i referenti per ogni dipartimento

```
SELECT `head_of_department`, `name`
FROM `departments`;
```

## 3. Selezionare tutti gli studenti il cui nome inizia per "E" (373)

```
SELECT * 
FROM `students`
WHERE `name` LIKE "E%"
```

## 4. Selezionare tutti gli studenti che si sono iscritti nel 2021 (734)

```
SELECT *
FROM `students`
WHERE YEAR(`enrolment_date`) = 2021

SELECT *
FROM `students`
WHERE `enrolment_date` BETWEEN "2020-01-01" AND "2021-12-31"
```

## 5. Selezionare tutti i corsi che non hanno un sito web (676)

```
SELECT 
    *
FROM
    `db_university`.`courses`
WHERE `website` IS NULL
```

## 6. Selezionare tutti gli insegnanti che hanno un numero di telefono (50)

```
SELECT 
    *
FROM
    `db_university`.`teachers`
WHERE `phone` IS NOT NULL
```

## 7. Selezionare tutti gli appelli d'esame dei mesi di giugno e luglio 2020 (2634)

```
SELECT 
    *
FROM
    `db_university`.`exams`
WHERE `date` BETWEEN "2020-06-01" AND "2020-07-31"
ORDER BY `date`
```

## 8. Qual è il numero totale degli studenti iscritti? (5000)

```
SELECT COUNT(*) AS `totale_iscritti`
FROM `students`
```


## GROUP BY

## 1.Contare i corsi raggruppati per cfu

SELECT 
    COUNT(cfu) AS `numero_corsi`, `cfu`
FROM
    db_university.courses
GROUP BY `cfu`
ORDER BY `cfu` DESC

## 2. Contare gli studenti raggruppati per anno di nascita

SELECT 
    COUNT(*) AS `numero_studenti`, YEAR(`date_of_birth`) AS `anno_nascita`
FROM
    db_university.students
GROUP BY `anno_nascita`
ORDER BY `anno_nascita`

## 3. Selezionare il voto più basso dato ad ogni appello d'esame

## 4. Contare gli appelli d'esame del mese di luglio raggruppati per giorno





## GROUP BY

## 1. Selezionare tutti i corsi del Corso di Laurea in Informatica (22)

SELECT `courses`.*, `degrees`.`name`, `degrees`.`level`
FROM `courses`
INNER JOIN `degrees` ON `degrees`.`id` = `courses`.`degree_id`
WHERE `degrees`.`name` = "Corso di Laurea in Informatica";

## 2. Selezionare le informazioni sul corso con id = 144, con tutti i relativi appelli d’esame

SELECT `courses`.`name`, `exams`.*
FROM `courses`
JOIN `exams` ON `courses`.`id` = `exams`.`course_id`
WHERE `courses`.`id` = 144

3. Selezionare a quale dipartimento appartiene il Corso di Laurea in Diritto
dell'Economia (Dipartimento di Scienze politiche, giuridiche e studi internazionali)

4. Selezionare tutti gli appelli d'esame del Corso di Laurea Magistrale in Fisica del
primo anno

SELECT `degrees`.`name`, `courses`.`year`, `exams`.*
FROM `degrees`
INNER JOIN `courses` ON `degrees`.`id` = `courses`.`degree_id`
INNER JOIN `exams` ON `courses`.`id` = `exams`.`course_id`
WHERE `degrees`.`name` = "Corso di Laurea Magistrale in Fisica"
AND `courses`.`year` = 1
ORDER BY `exams`.`date`, `exams`.`hour`

5. Selezionare tutti i docenti che insegnano nel Corso di Laurea in Lettere (21)


6. Selezionare il libretto universitario di Mirco Messina (matricola n. 620320)

7. Selezionare il voto medio di superamento d'esame per ogni corso, con anche i dati
del corso di laurea associato, ordinati per media voto decrescente