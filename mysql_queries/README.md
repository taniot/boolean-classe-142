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