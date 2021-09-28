# Spring Boot, Spring Security, PostgreSQL: JWT Authentication & Authorization example

## User Registration, User Login and Authorization process.
The diagram shows flow of how we implement User Registration, User Login and Authorization process.

![spring-boot-spring-security-postgresql-jwt-authentication-flow](spring-boot-spring-security-postgresql-jwt-authentication-flow.png)

## Spring Boot Server Architecture with Spring Security
You can have an overview of our Spring Boot Server with the diagram below:

![spring-boot-spring-security-postgresql-jwt-authentication-architecture](spring-boot-spring-security-postgresql-jwt-authentication-architecture.png)

For more detail, please visit:
> [Spring Boot, Spring Security, PostgreSQL: JWT Authentication & Authorization example](https://bezkoder.com/spring-boot-security-postgresql-jwt-authentication/)

## Refresh Token

![spring-boot-refresh-token-jwt-example-flow](spring-boot-refresh-token-jwt-example-flow.png)

For instruction: [Spring Boot Refresh Token with JWT example](https://bezkoder.com/spring-boot-refresh-token-jwt/)

## Fullstack Authentication

> [Spring Boot + React JWT Authentication](https://bezkoder.com/spring-boot-react-jwt-auth/)

## Fullstack CRUD App

> [React + Spring Boot + PostgreSQL example](https://bezkoder.com/spring-boot-react-postgresql/)

Run both Back-end & Front-end in one place:
> [Integrate React.js with Spring Boot Rest API](https://bezkoder.com/integrate-reactjs-spring-boot/)
]
More Practice:
> [Deploy Spring Boot App on AWS – Elastic Beanstalk](https://bezkoder.com/deploy-spring-boot-aws-eb/)

> [Secure Spring Boot App with Spring Security & JWT Authentication](https://bezkoder.com/spring-boot-jwt-authentication/)

## Dependency
```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
		
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-security</artifactId>
</dependency>
		
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
	<groupId>org.postgresql</groupId>
	<artifactId>postgresql</artifactId>
	<scope>runtime</scope>
</dependency>
		
<dependency>
	<groupId>io.jsonwebtoken</groupId>
	<artifactId>jjwt</artifactId>
	<version>0.9.1</version>
</dependency>
```

## Configure Spring Datasource, JPA, App properties
Open `src/main/resources/application.properties`

```
spring.datasource.url= jdbc:postgresql://localhost:5432/testdb
spring.datasource.username= postgres
spring.datasource.password= 123

spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true
spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect

# Hibernate ddl auto (create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto= update

# App Properties
bezkoder.app.jwtSecret= bezKoderSecretKey
bezkoder.app.jwtExpirationMs= 86400000
```

## Run Spring Boot application
```
mvn spring-boot:run
```

## Run following SQL insert statements
```
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
```
