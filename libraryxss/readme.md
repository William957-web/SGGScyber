# 圖書館查詢系統xss漏洞問題  
[<<回前頁>>](https://github.com/William957-web/SGGScyber)

## 詳情:  
觀察圖書館查詢系統網址: http://www.sggs.hc.edu.tw:8080/news2/admin.asp?post_group=&post_team=  
若將連結改為: [http://140.126.151.80/simdata.php?pageno=1&pagerows=15&orderby=BRN&ti=%3Cscript%3Ealert(1)%3C/script%3E](http://140.126.151.80/simdata.php?pageno=1&pagerows=15&orderby=BRN&ti=%3Cscript%3Ealert(1)%3C/script%3E)  
發現可以透過更改網址插入片段程式碼，雖然不危及整體系統安全問題，可是卻可能被插入導向惡意網站的指令並轉發而假借學校發送惡意連結，也不是件好事。  
## 解決方法:
在原始碼中建立白名單，抓出不該出現的字元並禁止它出現  
(because my dad pulled my keyboard cable out of my computer and I can't type anything, so I have to use screen keyboard to type this,and there's no Chinese input option.)