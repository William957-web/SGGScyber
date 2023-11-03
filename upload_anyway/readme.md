# 任意檔案上傳
[<<回前頁>>](https://github.com/William957-web/SGGScyber)   
[網站連結:http://www.sggs.hc.edu.tw:8080/board/Board.asp](http://www.sggs.hc.edu.tw:8080/board/Board.asp)  
## 詳情
利用[SQLI](https://github.com/William957-web/SGGScyber/tree/main/sqlinjection)取得的密碼登入後，可上傳PHP檔案，並且可在網站上執行WEB shell等
## 聲明:
本人載入的檔案僅為測試用(看ip和systeminfo)，並無任何惡意。
## 解決方法:
SQLI先修好，然後把上傳的檔案過濾  
然後記得把已經被植入的後門移除btw  
![螢幕擷取畫面 2022-10-05 010327](https://user-images.githubusercontent.com/76271912/193882064-ca7cb414-fb19-446c-8cb3-130ee15b5279.png)
