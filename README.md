#  مشروع الموقع القادم (مازال قيد التطوير)

تم بناء هذا الموقع بي إطار عمل [Docusaurus 2](https://docusaurus.io/), الذي يسهل إنشاء الموقع والتوثيقات بي كلا من الرياكت وملفات المارك دون

المستودع يتضمن (تجريبية) :
 - [الموقع الاساسي](https://alifcommunity.github.io/)
 - [التوثيق](https://alifcommunity.github.io/docs/intro/)
 - [مدونة](https://alifcommunity.github.io/blog/)


### متطلبات المشروع :

```
 * node.js
 * git
 * yarn او npm
```

### لتثبيت المشروع

لتحميل المستودع :

```
$ git clone https://github.com/waseeld/alifcommunity.github.io.git
```

لتثبيت التبعيات :
```
$ cd alifcommunity.github.io/

$ npm install
```

لتثبيت التبعيات بستخدام يارن (موصى به):
```
$ yarn
```

### لتشغيل الموقع محلياً

```
$ yarn start
```

عند تنفيذك هذا الامر في الطرفية سيقوم بتشغيل المشروع مبدئيا على `http://localhost:3000/`.

### بناء الموقع

```
$ yarn build
```

سيقوم هذا الأمر بإنشاء ملفات الموقع الثابته على المسار `build`.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
