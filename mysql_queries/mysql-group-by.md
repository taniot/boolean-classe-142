# Query SELECT


## Contare quanti iscritti ci sono stati ogni anno 

```
SELECT COUNT(*) AS `quanti_iscritti`, YEAR(`enrolment_date`) AS `anno_iscrizione`
FROM `students`
GROUP BY `anno_iscrizione`

```

## Contare gli insegnanti che hanno l'ufficio nello stesso edificio
```
SELECT COUNT(*) AS `numero_insegnanti`, `office_address`
FROM `teachers`
GROUP BY `office_address`;
```

## Calcolare la media dei voti di ogni appello d'esame

```
SELECT AVG(`vote`) AS `media_voto`, `exam_id`
FROM `exam_student`
GROUP BY `exam_id`
ORDER BY `exam_id`
```


## Contare quanti corsi di laurea ci sono per ogni dipartimento

```
SELECT COUNT(*) AS `corsi_laurea`, `department_id`
FROM `degrees`
GROUP BY `department_id`
```


