# 資料庫位置外洩  
[<<回前頁>>](https://github.com/William957-web/SGGScyber)

## 詳情:  
觀察  
```
http://www.sggs.hc.edu.tw/news/view.asp

http://www.sggs.hc.edu.tw/news/index.asp

http://www.sggs.hc.edu.tw/news2/admin.asp

http://www.sggs.hc.edu.tw/news2/board.asp
```
四個網址的原始碼，發現當中洩漏資料庫位置，使資料庫能被存取  
(即:http://www.sggs.hc.edu.tw/news/database/board.mdb)
![示範](https://raw.githubusercontent.com/William957-web/SGGScyber/main/images/dbs%E5%A4%96%E6%BC%8F.png)  
接著打開後即看到資料庫內容  
![內容](https://raw.githubusercontent.com/William957-web/SGGScyber/main/images/dbs%E8%A9%B3%E7%B4%B0.png)   
## 解決方法: 
最簡單的方法是在後端對每筆表單輸入的內容進行加密後，在將資料庫所有內容更改為加密後的狀況  
不然就是在原始碼中隱藏資料庫位置  
但由於不熟悉學校後端系統，無法確定隱藏方式
  
