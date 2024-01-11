# Tổng quan
- [link](https://wanago.io/2020/06/01/api-nestjs-error-handling-validation/)

## 1 Tạo folder utils
- Có thể tạo class **exception-logger** để log lỗi
- import vào trong `main.ts`
- sau đó import vào trong provide của `app.module.ts` để có thể sử dụng được
- Như vậy mỗi khi muốn sử dụng thì ta sẽ sử dụng `@UseFilters(ExceptionLogger)` để bắt lỗi, import vào trong controller muốn sử dụng

## 2 Cài đặt class-validator để validate input
```
npm install class-validator class-transformer
```
- ở trong các file trong `dto` ta sẽ sử dụng class-validator để validate input
- Khai báo **ValidatePipe** ở trong `main.ts` để có thể sử dụng được