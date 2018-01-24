# laravel5.5 + react 实现简单的CURD

# Requirements
* PHP >=7.0
* Laravel >= 5.5

# Screenshots
![图1](https://github.com/pandoraxm/laravel-react-curd/blob/master/Screenshots.gif)

![图2](https://github.com/pandoraxm/laravel-react-curd/blob/master/Screenshots2.gif)

# Installation

## 1. 下载
```
git clone https://github.com/pandoraxm/laravel-react-curd.git
```


## 2. composer安装

```
cd laravel-react-curd

composer install
```

## 3. 修改env以及数据库配置

```
cp .env.example .env

vim .env
```

## 4. 生成key

```
php artisan key:generate

```

## 5. 迁移

```
php artisan migrate
```



## 6. npm安装

```
npm install

npm run dev
```

# Usage
执行`artisan`命令运行

```
php artisan serve
```