# Inveni Web
## _Base proyect_

![GitHub Logo](/app/assets/dist/img/logo.png)

## Dependencias

1. Mysql 5.7.x  
2. Node.js ^8.16.1 
3. Redis ^5.0.7
4. pm2
5. npm ^6.4.1
6. nginx 

## Configuracion inicial del server

```
adduser nodejs
usermod -aG sudo nodejs
```

## Instalacion

### pm2
```sh
npm install pm2 -g
```

- [Mysql tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04-es)

```sh
$ sudo apt update
$ sudo apt install mysql-server
$ sudo mysql_secure_installation
```

- [MySql access denied error](https://stackoverflow.com/questions/41645309/mysql-error-access-denied-for-user-rootlocalhost)

- [Redis tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-redis-on-ubuntu-16-04)

- [Nginx tutorial](https://www.digitalocean.com/community/tutorials/como-instalar-nginx-en-ubuntu-16-04-es)

## Configuracion Inicial

1. Importar database.sql _(Crear la base de datos)._
2. Ejecutar database_changes.sql _(Cargar los catalogos iniciales)._
3. Importar el codigo al servidor

```sh
$ git clone https://github.com/dotmaik/base.git
$ git pull
$ [username]
$ [password]
```
Notas: ``` git clone ``` solo se tiene que utilizar la primera vez, posterior solo utilizar ``` git pull ``` para actualizar los cambios en el repo

4. Iniciar el proceso de pm2 

```sh
$ pm2 list
$ pm2 restart [pm2 id] --log-date-format 'DD-MM HH:mm:ss.SSS'
pm2 start /home/nodejs/actions-runner/_work/web-inveni/web-inveni/app/config/app_config.js --log-date-format 'DD-MM HH:mm:ss.SSS' --name inveni-dev
```

## Roles

SUPER USER

## Github actions

https://medium.com/@g.c.dassanayake/deploying-a-nodejs-application-using-github-actions-e5f4bde7b21b

## Parametros

```sql
mysql> SELECT @@global.group_concat_max_len;
+-------------------------------+
| @@global.group_concat_max_len |
+-------------------------------+
|                      1024     |
+-------------------------------+
```

```sql
mysql> SHOW VARIABLES LIKE '%max_connections%';
+------------------------+-------+
| Variable_name          | Value |
+------------------------+-------+
| max_connections        | 151   |
| mysqlx_max_connections | 100   |
+------------------------+-------+
```

```sql
mysql> SHOW VARIABLES LIKE '%buffer%';
+-------------------------------------+----------------+
| Variable_name                       | Value          |
+-------------------------------------+----------------+
| bulk_insert_buffer_size             | 8388608        |
| innodb_buffer_pool_chunk_size       | 134217728      |
| innodb_buffer_pool_dump_at_shutdown | ON             |
| innodb_buffer_pool_dump_now         | OFF            |
| innodb_buffer_pool_dump_pct         | 25             |
| innodb_buffer_pool_filename         | ib_buffer_pool |
| innodb_buffer_pool_in_core_file     | ON             |
| innodb_buffer_pool_instances        | 1              |
| innodb_buffer_pool_load_abort       | OFF            |
| innodb_buffer_pool_load_at_startup  | ON             |
| innodb_buffer_pool_load_now         | OFF            |
| innodb_buffer_pool_size             | 134217728      |
| innodb_change_buffer_max_size       | 25             |
| innodb_change_buffering             | all            |
| innodb_ddl_buffer_size              | 1048576        |
| innodb_log_buffer_size              | 16777216       |
| innodb_sort_buffer_size             | 1048576        |
| join_buffer_size                    | 262144         |
| key_buffer_size                     | 16777216       |
| myisam_sort_buffer_size             | 8388608        |
| net_buffer_length                   | 16384          |
| preload_buffer_size                 | 32768          |
| read_buffer_size                    | 131072         |
| read_rnd_buffer_size                | 262144         |
| select_into_buffer_size             | 131072         |
| sort_buffer_size                    | 262144         |
| sql_buffer_result                   | OFF            |
+-------------------------------------+----------------+
```

sort_buffer_size 262144 bytes 256KB 0.25 MB
join_buffer_size 262144 bytes 256KB 0.25 MB
read_buffer_size 131072 byets 128kb 0.125 BM
innodb_buffer_pool_size  134217728 bytes 134217728 KB 128MB

```bash
[mysqld]
group_concat_max_len = 18446744073709551615
local_infile=1
secure_file_priv = ""


sort_buffer_size = 1M
join_buffer_size = 1M
read_buffer_size = 1M
max_connections = 100
innodb_buffer_pool_size=256M
group_concat_max_len=102400;
```

```sql
SET sort_buffer_size = 1*1024*1024;
SET read_buffer_size = 1*1024*1024;
SET join_buffer_size = 1*1024*1024;
```
```bash
### Archivo de configuracion
/etc/mysql/mysql.conf.d/mysqld.cnf
```

### max_connections
```sql
mysql> show variables like 'max_connections';
mysql> SET global max_connections = 45;
```

```sql
mysql> SHOW GLOBAL VARIABLES LIKE 'group_concat_max_len';
+----------------------+--------+
| Variable_name        | Value  |
+----------------------+--------+
| group_concat_max_len | 102400 |
+----------------------+--------+
```
MAX GROUP CONCAT 64 Bits 18446744073709551615
```sql
SET group_concat_max_len=4294967295;
```

````bash
sudo service mysql restart
```

```sql
SHOW GLOBAL VARIABLES LIKE 'sort_buffer_size';
+------------------+--------+
| Variable_name    | Value  |
+------------------+--------+
| sort_buffer_size | 262144 |
+------------------+--------+
```

sets the global value of sort_buffer_size to 50000 and also the session value is set to 1000000:
SET @@global.sort_buffer_size = 50000, sort_buffer_size = 1000000;


### Recomendaciones
Many patterns says that you must or may give innodb buffer pool 70-80% of your server's total memory.

Total buffers: 176.0M global + 65.9M per thread (40 max threads)

65.9M = read_buffer_size + sort_buffer_size + join_buffer_size

```sql
select 65.9 * 1024 * 1024 * 40 / power(1024,3);
+-----------------------------------------+
| 65.9 * 1024 * 1024 * 25 / power(1024,3) |
+-----------------------------------------+
|                           1.60888671875 |
+-----------------------------------------+
```

```sql
mysql> SHOW VARIABLES LIKE "secure_file_priv";
+------------------+-----------------------+
| Variable_name    | Value                 |
+------------------+-----------------------+
| secure_file_priv | /var/lib/mysql-files/ |
+------------------+-----------------------+
```

## Carga masiva sin logs

```sql
LOAD DATA INFILE '/var/lib/mysql-files/AUT.csv' INTO TABLE inveni.AUTOS
FIELDS terminated by ','
ENCLOSED BY '"'
LINES TERMINATED by'\r\n'
IGNORE 1 ROWS;
```

```sql
mysql> SHOW GLOBAL VARIABLES LIKE 'local_infile';
mysql> SET GLOBAL local_infile = 'ON';
mysql> SET GLOBAL local_infile = 1;
mysql> SET GLOBAL local_infile = true;
mysql> SHOW GLOBAL VARIABLES LIKE 'local_infile';
mysql> FLUSH PRIVILEGES;
```

### errores comunes al cargar LOCAL DATA INFILE

1.A misplaced, missing, or unnecessary symbol like !@#$%^&*()-_=+[]{}\|;:'",.<>/?.
2.A misplaced, missing or unnecessary keyword like select, into, or any of the thousands of others.
3.You have unicode characters in your query.
4.Too little or too much whitespace between keywords.
5.Unmatched single quotes, double quotes, parenthesis or braces.

## Columnas machotes 
"NOMBRE,DOMICILIO,COLONIA,CP,TELEFONO,COMPANIA,RFC,CURP,FECHA_NACIMIENTO,PLACA,NUM_SERIE,MODELO,MARCA,LINEA,SALARIO,EMPRESA,ANO,GIRO,NUM_PATRON,NUM_AFILIACION,CONYUGUE,ESTADO,MUNICIPIO"

## Consultas normales y de mercadotecnia
```sql
select NOMBRE, 
  group_concat(DISTINCT `DOMICILIO` SEPARATOR ",") `DOMICILIO`, 
  group_concat(DISTINCT `COLONIA` SEPARATOR ",") `COLONIA`, 
  group_concat(DISTINCT `CP` SEPARATOR ",") `CP`, 
  group_concat(DISTINCT `TELEFONO` SEPARATOR ",") `TELEFONO`, 
  group_concat(DISTINCT `COMPANIA` SEPARATOR ",") `COMPANIA`, 
  group_concat(DISTINCT `RFC` SEPARATOR ",") `RFC`, 
  group_concat(DISTINCT `CURP` SEPARATOR ",") `CURP`,
  group_concat(DISTINCT `FECHA_NACIMIENTO` SEPARATOR ",") `FECHA_NACIMIENTO`, 
  group_concat(DISTINCT `PLACA` SEPARATOR ",") `PLACA`, 
  group_concat(DISTINCT `NUM_SERIE` SEPARATOR ",") `NUM_SERIE`, 
  group_concat(DISTINCT `MODELO` SEPARATOR ",") `MODELO`, 
  group_concat(DISTINCT `MARCA` SEPARATOR ",") `MARCA`, 
  group_concat(DISTINCT `LINEA` SEPARATOR ",") `LINEA`, 
  group_concat(DISTINCT `SALARIO` SEPARATOR ",") `SALARIO`, 
  group_concat(DISTINCT `EMPRESA` SEPARATOR ",") `EMPRESA`, 
  group_concat(DISTINCT `ANO` SEPARATOR ",") `ANO`, 
  group_concat(DISTINCT `GIRO` SEPARATOR ",") `GIRO`, 
  group_concat(DISTINCT `NUM_PATRON` SEPARATOR ",") `NUM_PATRON`, 
  group_concat(DISTINCT `NUM_AFILIACION` SEPARATOR ",") `NUM_AFILIACION`, 
  group_concat(DISTINCT `CONYUGUE` SEPARATOR ",") `CONYUGUE`, 
  group_concat(DISTINCT `ESTADO` SEPARATOR ",") `ESTADO`,
  group_concat(DISTINCT `MUNICIPIO` SEPARATOR ",") `MUNICIPIO`
  from (select * from `AUTOS`
  union select * from `SEGURO`
  union select * from `PATRONAL`
  union select * from `MATRIMONIOS`
  union select * from `IFE`
  union select * from `TELEFONICA`) alias
  GROUP BY `NOMBRE`;
```

```sql
select *
  from (select "AUTOS" as `BASE DE DATOS`, * from `AUTOS`
  union select "SEGURO" as `BASE DE DATOS`, * from `SEGURO`
  union select "PATRONAL" as `BASE DE DATOS`, * from `PATRONAL`
  union select "MATRIMONIOS" as `BASE DE DATOS`, * from `MATRIMONIOS`
  union select "IFE" as `BASE DE DATOS`, * from `IFE`
  union select "TELEFONICA" as `BASE DE DATOS`, * from `TELEFONICA`) alias;
```

## MySql Tuner

wget http://mysqltuner.pl/ -O mysqltuner.pl
perl mysqltuner.pl

## Respaldo con mysqldump utility
mysqldump --user root --password  inveni > inveni_server.sql



```sql
mysql> SHOW GLOBAL VARIABLES LIKE  "max_heap_table_size";
+------------------+-----------------------+
| Variable_name    | Value                 |
+------------------+-----------------------+
| secure_file_priv | /var/lib/mysql-files/ |
+------------------+-----------------------+
```

```sql
mysql> SHOW GLOBAL VARIABLES LIKE  "tmp_table_size";
+------------------+-----------------------+
| Variable_name    | Value                 |
+------------------+-----------------------+
| secure_file_priv | /var/lib/mysql-files/ |
+------------------+-----------------------+
```


