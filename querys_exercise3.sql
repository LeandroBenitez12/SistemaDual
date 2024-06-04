/* 1. ¿Cuántos registros tiene la tabla obra? */
SELECT COUNT(*)
from obra;
/* 2. Realizar una consulta que devuelva el título propio (alias: titulo), el año de una obra, el
nombre de la serie (alias: serie), el nombre de la editoriales que editan la obra (alias:
editorial_principal y editorial_secundaria) y el país de las mismas (alias:
pais_editorial_principal y pais_editorial_secundaria), el nombre de la colección (alias:
coleccion) y su issn (alias: issn_coleccion), el nombre de la sub colección (alias:
sub_coleccion) y su issn (alias: issn_sub_coleccion) y por último el estado de la obra
(alias: estado).
*/

SELECT o.titulo_propio as titulo,
    o.anio,
    s.id as serie,
    e_p.nombre AS Editorial_principal, e_p.pais,
    e_s.nombre AS Editorial_secundaria, e_s.pais AS pais_secundario,
    c.nombre AS coleccion , c.issn AS issn_coleccion,
    c_s.nombre AS coleccion_secundaria ,
    c_s.issn AS issn_coleccion_secundaria,
    e_o.nombre AS estado
FROM obra o
    INNER JOIN serie s ON s.id = o.serie_id
    INNER JOIN editorial e_p ON e_p.id = o.editorial_id
    INNER JOIN editorial e_s ON e_s.id = o.otra_editorial_id
    INNER JOIN coleccion c ON c.id = o.coleccion_id
    INNER JOIN coleccion c_s ON c_s.id = o.sub_coleccion_id
    INNER JOIN estado_obra e_o ON e_o.id = o.estado_obra_id;
/* TRAE POCO POR QUE ES INNER JOIN Y SON MUCHAS TABLAS)*/
/*3. ¿Cuántos registros devuelve la consulta?*/

/* 1 PROBLEMAS TECNICOS*/
SELECT COUNT(*)
FROM (
SELECT o.titulo_propio as titulo,
        o.anio,
        s.id as serie,
        e_p.nombre AS Editorial_principal, e_p.pais,
        e_s.nombre AS Editorial_secundaria, e_s.pais AS pais_secundario,
        c.nombre AS coleccion , c.issn AS issn_coleccion,
        c_s.nombre AS coleccion_secundaria ,
        c_s.issn AS issn_coleccion_secundaria,
        e_o.nombre AS estado
    FROM obra o
        INNER JOIN serie s ON s.id = o.serie_id
        INNER JOIN editorial e_p ON e_p.id = o.editorial_id
        INNER JOIN editorial e_s ON e_s.id = o.otra_editorial_id
        INNER JOIN coleccion c ON c.id = o.coleccion_id
        INNER JOIN coleccion c_s ON c_s.id = o.sub_coleccion_id
        INNER JOIN estado_obra e_o ON e_o.id = o.estado_obra_id
) AS OBRAAAA;

/* 4. Modificar la consulta del punto 2 para que traiga todos los registros de la tabla obra
sin importar si no cuenta con algunos de los datos pedidos.*/
SELECT o.titulo_propio as titulo,
    o.anio,
    s.id as serie,
    e_p.nombre AS Editorial_principal, e_p.pais,
    e_s.nombre AS Editorial_secundaria, e_s.pais AS pais_secundario,
    c.nombre AS coleccion , c.issn AS issn_coleccion,
    c_s.nombre AS coleccion_secundaria ,
    c_s.issn AS issn_coleccion_secundaria,
    e_o.nombre AS estado
FROM obra o
    LEFT JOIN serie s ON s.id = o.serie_id
    LEFT JOIN editorial e_p ON e_p.id = o.editorial_id
    LEFT JOIN editorial e_s ON e_s.id = o.otra_editorial_id
    LEFT JOIN coleccion c ON c.id = o.coleccion_id
    LEFT JOIN coleccion c_s ON c_s.id = o.sub_coleccion_id
    LEFT JOIN estado_obra e_o ON e_o.id = o.estado_obra_id;

/*5. Crear una vista con la consulta realizada en el punto anterior.*/

/*MOSTRAR CAMPOS QUE PUEDE VER EL USUARIO Y PARA GUARDAR CONSULTAS COMPLEJAS QUE ES MAS RAPIDO QUE SI LAS HAGO DE CERO */
CREATE VIEW QUERY_OBRA
AS
    SELECT o.titulo_propio as titulo,
        o.anio,
        s.id as serie,
        e_p.nombre AS Editorial_principal, e_p.pais,
        e_s.nombre AS Editorial_secundaria, e_s.pais AS pais_secundario,
        c.nombre AS coleccion , c.issn AS issn_coleccion,
        c_s.nombre AS coleccion_secundaria ,
        c_s.issn AS issn_coleccion_secundaria,
        e_o.nombre AS estado
    FROM obra o
        LEFT JOIN serie s ON s.id = o.serie_id
        LEFT JOIN editorial e_p ON e_p.id = o.editorial_id
        LEFT JOIN editorial e_s ON e_s.id = o.otra_editorial_id
        LEFT JOIN coleccion c ON c.id = o.coleccion_id
        LEFT JOIN coleccion c_s ON c_s.id = o.sub_coleccion_id
        LEFT JOIN estado_obra e_o ON e_o.id = o.estado_obra_id;
/*6. Consultar todos los datos de la vista.*/
SELECT *
FROM query_obra;

/* 7. Modificar la consulta del punto 4 para que traiga todos los estados de obras. ¿Qué
cambió? ¿Están presentes todos los registros de la tabla obra? */

SELECT o.titulo_propio as titulo,
    o.anio,
    s.id as serie,
    e_p.nombre AS Editorial_principal, e_p.pais,
    e_s.nombre AS Editorial_secundaria, e_s.pais AS pais_secundario,
    c.nombre AS coleccion , c.issn AS issn_coleccion,
    c_s.nombre AS coleccion_secundaria ,
    c_s.issn AS issn_coleccion_secundaria,
    e_o.nombre AS estado
FROM obra o
    LEFT JOIN serie s ON s.id = o.serie_id
    LEFT JOIN editorial e_p ON e_p.id = o.editorial_id
    LEFT JOIN editorial e_s ON e_s.id = o.otra_editorial_id
    LEFT JOIN coleccion c ON c.id = o.coleccion_id
    LEFT JOIN coleccion c_s ON c_s.id = o.sub_coleccion_id
    RIGHT JOIN estado_obra e_o ON e_o.id = o.estado_obra_id;

/* devuelve 4 registros de estado que no tienen obra y 3 registros menos de obra que no tienen estado asignado */
SELECT *
FROM obra
WHERE estado_obra_id IS NULL;
/* 8. Modificar la consulta del punto 7 para que traiga todos los estados posibles de las
obras sin dejar de traer todos los registros de la tabla obra. Pista: Unir todos los
registros que devuelve la consulta que me asegura contar con todos los registros de la
tabla obra con aquellos registros que me devuelve la consulta que me asegura contar
con todos los estados posibles de las obras.
*/
    SELECT o.titulo_propio as titulo,
        o.anio,
        s.id as serie,
        e_p.nombre AS Editorial_principal, e_p.pais,
        e_s.nombre AS Editorial_secundaria, e_s.pais AS pais_secundario,
        c.nombre AS coleccion , c.issn AS issn_coleccion,
        c_s.nombre AS coleccion_secundaria ,
        c_s.issn AS issn_coleccion_secundaria,
        e_o.nombre AS estado
    FROM obra o
        LEFT JOIN serie s ON s.id = o.serie_id
        LEFT JOIN editorial e_p ON e_p.id = o.editorial_id
        LEFT JOIN editorial e_s ON e_s.id = o.otra_editorial_id
        LEFT JOIN coleccion c ON c.id = o.coleccion_id
        LEFT JOIN coleccion c_s ON c_s.id = o.sub_coleccion_id
        RIGHT JOIN estado_obra e_o ON e_o.id = o.estado_obra_id
UNION
    SELECT o.titulo_propio as titulo,
        o.anio,
        s.id as serie,
        e_p.nombre AS Editorial_principal, e_p.pais,
        e_s.nombre AS Editorial_secundaria, e_s.pais AS pais_secundario,
        c.nombre AS coleccion , c.issn AS issn_coleccion,
        c_s.nombre AS coleccion_secundaria ,
        c_s.issn AS issn_coleccion_secundaria,
        e_o.nombre AS estado
    FROM obra o
        LEFT JOIN serie s ON s.id = o.serie_id
        LEFT JOIN editorial e_p ON e_p.id = o.editorial_id
        LEFT JOIN editorial e_s ON e_s.id = o.otra_editorial_id
        LEFT JOIN coleccion c ON c.id = o.coleccion_id
        LEFT JOIN coleccion c_s ON c_s.id = o.sub_coleccion_id
        LEFT JOIN estado_obra e_o ON e_o.id = o.estado_obra_id

/* union filtra todo repetidos , FORMA DE HACER UN FULL JOIN EN MYSQL*/
    SELECT o.obra_id, o.titulo_propio as titulo,
        o.anio,
        s.id as serie,
        e_p.nombre AS Editorial_principal, e_p.pais,
        e_s.nombre AS Editorial_secundaria, e_s.pais AS pais_secundario,
        c.nombre AS coleccion , c.issn AS issn_coleccion,
        c_s.nombre AS coleccion_secundaria ,
        c_s.issn AS issn_coleccion_secundaria,
        e_o.nombre AS estado
    FROM obra o
        LEFT JOIN serie s ON s.id = o.serie_id
        LEFT JOIN editorial e_p ON e_p.id = o.editorial_id
        LEFT JOIN editorial e_s ON e_s.id = o.otra_editorial_id
        LEFT JOIN coleccion c ON c.id = o.coleccion_id
        LEFT JOIN coleccion c_s ON c_s.id = o.sub_coleccion_id
        RIGHT JOIN estado_obra e_o ON e_o.id = o.estado_obra_id
UNION
    SELECT o.obra_id, o.titulo_propio as titulo,
        o.anio,
        s.id as serie,
        e_p.nombre AS Editorial_principal, e_p.pais,
        e_s.nombre AS Editorial_secundaria, e_s.pais AS pais_secundario,
        c.nombre AS coleccion , c.issn AS issn_coleccion,
        c_s.nombre AS coleccion_secundaria ,
        c_s.issn AS issn_coleccion_secundaria,
        e_o.nombre AS estado
    FROM obra o
        LEFT JOIN serie s ON s.id = o.serie_id
        LEFT JOIN editorial e_p ON e_p.id = o.editorial_id
        LEFT JOIN editorial e_s ON e_s.id = o.otra_editorial_id
        LEFT JOIN coleccion c ON c.id = o.coleccion_id
        LEFT JOIN coleccion c_s ON c_s.id = o.sub_coleccion_id
        LEFT JOIN estado_obra e_o ON e_o.id = o.estado_obra_id

/* union all trae todo repetidos entre 2 consultas */
    SELECT o.obra_id, o.titulo_propio as titulo,
        o.anio,
        s.id as serie,
        e_p.nombre AS Editorial_principal, e_p.pais,
        e_s.nombre AS Editorial_secundaria, e_s.pais AS pais_secundario,
        c.nombre AS coleccion , c.issn AS issn_coleccion,
        c_s.nombre AS coleccion_secundaria ,
        c_s.issn AS issn_coleccion_secundaria,
        e_o.nombre AS estado
    FROM obra o
        LEFT JOIN serie s ON s.id = o.serie_id
        LEFT JOIN editorial e_p ON e_p.id = o.editorial_id
        LEFT JOIN editorial e_s ON e_s.id = o.otra_editorial_id
        LEFT JOIN coleccion c ON c.id = o.coleccion_id
        LEFT JOIN coleccion c_s ON c_s.id = o.sub_coleccion_id
        RIGHT JOIN estado_obra e_o ON e_o.id = o.estado_obra_id
UNION ALL
    SELECT o.obra_id, o.titulo_propio as titulo,
        o.anio,
        s.id as serie,
        e_p.nombre AS Editorial_principal, e_p.pais,
        e_s.nombre AS Editorial_secundaria, e_s.pais AS pais_secundario,
        c.nombre AS coleccion , c.issn AS issn_coleccion,
        c_s.nombre AS coleccion_secundaria ,
        c_s.issn AS issn_coleccion_secundaria,
        e_o.nombre AS estado
    FROM obra o
        LEFT JOIN serie s ON s.id = o.serie_id
        LEFT JOIN editorial e_p ON e_p.id = o.editorial_id
        LEFT JOIN editorial e_s ON e_s.id = o.otra_editorial_id
        LEFT JOIN coleccion c ON c.id = o.coleccion_id
        LEFT JOIN coleccion c_s ON c_s.id = o.sub_coleccion_id
        LEFT JOIN estado_obra e_o ON e_o.id = o.estado_obra_id
/*9. ¿Cuántos registros me devuelve la consulta del punto 8? Explicar este resultado.
9158 porque son los 9154 del left join + 4 del right join */

/*
Apuntes : 
INNER JOIN IMPORTANTE USAR, ANALIZAR RESULTADOS, PREGUNTARSE EL PORQUE 
LUEGO SIGUE EL LEFT JOIN, RIGHT, EL FULL NUNCA SE USA, 
*/