
-- +migrate Up
create table if not exists users (
    id int auto_increment,
    name varchar(10) not null,
    password varchar(255) not null,
    primary key(id)
) default charset=utf8;

-- +migrate Down
drop table if exists users;