/*1. Listar de la tabla “obra” el título propio y el año de publicación.*/
SELECT titulo_propio, anio  FROM obra;
/*2. ¿Cuántas obras hay en la tabla “obra”?*/
SELECT COUNT(*) FROM obra;

/*3. Listar cuántas obras hay por editorial en la tabla “obra” en orden descendente por*/
/*cantidad. Utilizar para el listado, los alias “Editorial” y “Cantidad de Obras”.*/
SELECT editorial_id AS editorial, COUNT(editorial_id) AS ObraAmount FROM obra GROUP BY editorial_id ORDER BY Cantidad DESC;

/*4. ¿Cuántos estudiantes distintos realizaron un “prestamo_sala”?*/
SELECT COUNT(DISTINCT USUARIO_ALUMNO_LEGAJO) FROM prestamo_sala;

/*5. Listar los nombres de la tabla “colección” que empiezan con “manu”.*/
SELECT nombre from COLECCION WHERE nombre LIKE 'manu%';

/*6. Listar los nombres de la tabla “colección” que contienen la palabra “sist”.*/
SELECT nombre from COLECCION WHERE nombre LIKE '%sist%';
/*7. ¿Cuál es el bibliotecario que más devoluciones recibió? Utilizar la tabla “devolucion”.*/
/*Devolver solo un registro.*/
SELECT usuario_bibliotecario_id, COUNT(*) as cantidad FROM devolucion GROUP BY(usuario_bibliotecario_id) ORDER BY cantidad DESC LIMIT 1;

/*8. Listar el nombre y ciudad de las editoriales que se encuentran en Argentina. Utilizar la*/
/*tabla “editorial”.*/

SELECT nombre, ciudad from editorial where pais = 'argentina'; 

/*9. ¿Cuál/cuáles son las obras que tienen menos ejemplares? Utilizar la tabla “ejemplar”.*/
SELECT obra_id AS 'obra' , COUNT(obra_id) AS Amount FROM ejemplar GROUP BY obra_id ORDER BY Amount ASC;

/*10. ¿Cuál/cuáles fueron los prestamos más largos en días? Utilizar la tabla “préstamo”.*/
/* diferencia de fechas*/
/*11. Insertar el idioma chino en la tabla “idioma”.*/
INSERT INTO idioma(codigo,nombre) VALUES ("CH","chino");
/* 12. Borrar el idioma chino en la tabla “idioma”.*/
DELETE FROM idioma WHERE nombre="chino";
/* 13. Se quiere crear una tabla para realizar pruebas que tenga la misma estructura que la*/
/* tabla “prestamo” pero solo con los siguientes campos: id, usuario_bibliotecario_id,*/
/* ejemplar_id, fecha, fecha_fin_prestamo. A la tabla se la llamará “prestamo_prueba” y*/
/* se la llenará con los datos de la tabla “prestamo”.*/
CREATE TABLE Test_prestamo(
    id INT,
    FOREIGN KEY (usuario_bibliotecario_id) REFERENCES usuario_bibliotecario
)
/* 14. Truncar la tabla “préstamo_prueba”.*/
TRUNCATE TABLE prestamo_prueba;
/* 15. Eliminar la tabla “préstamo_prueba”.*/
DROP TABLE prestamo_prueba;
/* 16. Listar los siguientes campos de la tabla “préstamo”: id, usuario_bibliotecario_id,*/
/* ejemplar_id, fecha, fecha_fin_prestamo y tipo de préstamo. El tipo de préstamo lo*/
/* sacamos con el valor de tipo_prestamo_id:*/

/* a. 1: ‘Circulación sin reserva’*/

/* b. 2: ‘Circulación con reserva’*/

/* c. 3: ‘Consulta en sala’*/

/* d. 4: ‘Diccionario’*/

/* 17. Listar todas las filas de la tabla “prestamo” cuyo campo fecha_inicio_primer_prestamo*/
/* no sea null.*/

/* 18. Crear una tabla que se llame “libreria” y contenga los siguientes campos: id (primary*/
/* key autoincremental), descripcion (no puede ser null), cant_libros (no puede ser null),*/
/* cant_secciones (en caso de no poner ningún valor el default es 5).*/

/* 19. Insertar un registro para los siguientes campos de la tabla “librería”. ¿Qué pasa si no*/
/* insertamos un valor para cant_secciones?*/

/* 20. Agregar la columna dirección (no puede ser null) a la tabla “libreria”.*/

/* 21. Agregar la dirección al registro previamente ingresado en la tabla “libreria”.*/

/* 22. Eliminar la columna dirección de la tabla “libreria”.*/

/* 23. Eliminar la tabla “libreria”.*/

/* 24. Listar el contenido de la tabla “usuario_externo”.*/

/* 25. Actualizar el apellido y dni de Mayra en la tabla “usuario_externo”. */
