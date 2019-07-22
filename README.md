# chef-portfolio-BE

##### Backend URL : https://chef-portfolio-webtp6.herokuapp.com/



## Table of Contents
 - [Summary Table of API Endpoints](#summary-table-of-api-endpoints)
   - [Register-user](#register-user)
   - [Offers](#offers)
   - [Ads](#ads)
   - [Analytics](#analytics)
   - [Checkout Payments](#checkout-payments)
   - [Agreements](#agreements)
   



### Summary Table of API Endpoints
| Type | Endpoints          | Description   |
| ---- | ------------------ | ------------- |
| POST | /api/auth/register | Register User |


#### Register and Login Options
![](assets/loginoptions.png)



#### Register-user

`GET, PUT, DELETE 200 success ✅ Private`
```
{
    "id": 4,
    "name": "John Benedict Miranda",
    "email": "jbmiranda22796@gmail.com",
    "image_url": "https://media.licdn.com/dms/image/C4E03AQHWn1xyl8YaSA/profile-displayphoto-shrink_100_100/0?e=1560384000&v=beta&t=rSgo6M7-lDWtq772krO-EBB8gskFCGRlecEbVqQEJDU",
    "nickname": "jbmiranda22796",
    "sub": "linkedin|5gWW_xGV9g",
    "acct_type": "affiliate",
    "phone": null,
    "amount": 0,
    "show_tour": true,
    "stripe_cust_id": null,
    "stripe_payout_id": null,
    "stripe_balance": 0,
    "offers": 0,
    "ads": 0,
    "agreements": 1
}
```
