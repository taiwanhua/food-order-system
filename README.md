# Getting Started

## just view in browser :

```
    npm install
    npm run start
```

## both desktop app and web app
```
    npm install
    npm run electron:start
```

# Publish 

## Web app
```
    npm run build
```

## Desktop app (windows : --x64 --ia32, mac, linux )

```
    npm run electron:build-windows // 手邊沒有mac，所以僅windows的有安裝開啟來看看
    npm run electron:build-mac
    npm run electron:build-linux
```

# Task
- [x] This task is to develop a solution for the below mentioned problem. You are excepted to build a web (or electron, see additional task) application.

- [x] The key focus area will be the design of the solution and the structure of the code. Weightage will be given to clear design, extensibility of code to allow easy addition of features, modularity to ensure clear separation of concerns.

- [x] You are expected to provide a zip file of the entire source tree, also including the git history. You need to provide a README.md to describe the prerequisites that build/run your application, include the platform, programming language version

# Environment
The application must use the following library/framework to build:
- [x] React
- [x] React-redux
- [x] Webpack
- [x] Typescript (Optional)

# Problem description
This task to create a food order system client with the following functions:

## Menu
- [x] shows all foods places in different catagory
- [x] at least 3 kinds of catagory and 3 kinds of food in each catagory
- [x] user can add food to cart

## Cart
- [x] shows all foods in cart
- [x] user can change amount of food or remove it
- [x] submit the order

## History
- [x] must in different page or popup window
- [x] shows all order details
- [x] user can clear history
- [x] Other necesseary parts can be mocked, the history and other states doesnât need to save after the application closed.
- [x] Unit tests must be preform to your code.

# Additional Task
This part is the additional feature, you donât have to accomplish the following features. But you can challenge yourself if you want and you have free time.

- [x] Wrap the application with electron
- [ ] store the history in a backend server (此部分與其多開一包後端的code與DB，更期待未來能與團隊直接合作)

# 心得
感謝本次面試題目，讓我有機會能接觸到React生態系中有關於桌面應用的開發(electron)，過程中學習了很多相關知識，亦啟發了我很多想法與探索慾望，最後由衷感謝提供本次面試題目與機會，謝謝。