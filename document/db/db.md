# Tổng quan

- [làm theo link](https://wanago.io/2020/05/18/api-nestjs-postgresql-typeorm/)

## 1 Cài đặt nestjs config

- Cài `nestjs/config`

```
npm install @nestjs/config
```

## 2 Tạo file .env

## 3 Cài joi để validate

```
npm install @hapi/joi @types/hapi__joi
```

## 4 Cài typeorm, pg để kết nối db

```
npm install @nestjs/typeorm typeorm pg
```

## 5 Thêm config module vào trong file app.module.ts
## 6 Tạo module database để kết nối db
- Thêm `autoLoadEntities: true,` để tự động load các entity vào trong db

## 7 Thêm repository 
- Ta sẽ import TypeOrmModule vào trong file `posts.module.ts` để có thể sử dụng được repository
- Muốn dùng ở bảng nào thì import vào module của bảng đó. Sau đó inject vào trong service của bảng đó
- `Repository` là nơi chứa các method để thao tác với db
```ts
private postsRepository: Repository<PostEntity>,
```
- repository có sẵn các method như `find, findOne, save, delete, update, ...` (query builder)