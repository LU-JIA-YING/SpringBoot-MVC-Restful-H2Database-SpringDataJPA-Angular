# SpringBoot-MVC-Restful-H2Database-SpringDataJPA-Angular

將 8/12 的課堂實作（user）串上前端

使用 HTML 5 + CSS + JS 撰寫前端畫面以及功能，呼叫後端 API 回傳資料  
可使用任意框架，例：Vue.js、React、Angular 或 CSS 框架，例：Bootstrap、Material-UI  
呼叫後端 API 回傳資料 -> 畫面輸入資料或點擊按鈕，觸發呼叫後端 API，後端回傳資料，前端顯示在畫面上  
以新增訂單的例子來說  
畫面上需顯示訂單的欄位（e.g. 餐點、服務生）  
使用者輸入資訊  
使用者點擊按鈕，將資料傳送給後端（發送 API）  
後端處理完成，回傳 response 給前端顯示結果  

#### H2-Database：http://localhost:8080/h2-console
* spring.datasource.url=jdbc:h2:mem:training
* spring.datasource.driverClassName=org.h2.Driver
* spring.datasource.username=sa
* spring.datasource.password=sa

#### spring-restcontroller-DemoUser:

* 取得所有使用者 http://localhost:8080/api/v1/user  
* 根據ID取得使用者 http://localhost:8080/api/v1/user/:id  
* 新增使用者 http://localhost:8080/api/v1/user  
* 修改使用者 http://localhost:8080/api/v1/user/:id  
* 刪除使用者 http://localhost:8080/api/v1/user/:id

# Angular

###### tags: `Angular`

## 安裝
1. 安裝 Node.js
驗證安裝結果的指令 `node -v`


2. 安裝 Angular CLI 工具
開啟「命令提示字元」 
    * `npm install -g @angular/cli`
    * 驗證安裝結果的指令 `ng version`
    * 使用 Angular CLI 創建一個新的建立Angular專案 `ng new Angular`
        * 下載時會詢問以下:
        ? Would you like to add Angular routing? Yes  
? Which stylesheet format would you like to use? CSS
    * 進入 Angular 目錄 `cd Angular`
    * 啟動 Angular 開發伺服器並自動開啟網頁 ( http://localhost:4200/ ) `ng serve --open`
    * 畫面上只要出現 Angular app is running! 字樣，就代表設定成功！👍
    ![](https://i.imgur.com/HOGgBXS.png)

---
1. 將您的項目目錄更改為 Angular\src\app 並運行以下命令：  
    `ng generate class user`  
    `ng generate user.service`  
    `ng generate component user-list`  
    `ng generate component user-form`  
    `ng generate component update-user`  
    `ng generate component user-details`  

2.  先啟動intelllij（User back）檔案，再打開vscode(User front-Angular)檔案，並在Angular 目錄下終端機打上 `ng serve --open` 以打開通道

    * User List(列出所有使用者、刪除使用者)
    ![](https://i.imgur.com/gVf1al4.png)

    * Add User(新增使用者資料)
    ![](https://i.imgur.com/BfTSqs9.png)

    * Update User(更新使用者資料)
    ![](https://i.imgur.com/srhE6sB.png)

    * View User Details
    ![](https://i.imgur.com/rAgyyfY.png)


---
### 參考資料
* https://www.baeldung.com/spring-boot-angular-web#1-angular-cli-installation
* https://www.javaguides.net/2021/08/angular-crud-example.html
