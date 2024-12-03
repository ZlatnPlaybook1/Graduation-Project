import React from "react";
import "../Lab_Style.css";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Go2Top_Btn/Go2Top_Btn";

export default function First_Lab() {
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1.
        Open the lab then go to the "Target" > "Site map" tab in Burp. Right
click on the lab domain and select "Engagement tools" > "Discover 
content" to open the content discovery tool. 
      </li>
      \n
      <li>2. 
        Click "Session is not running" to start the content discovery. After a 
short while, look at the "Site map" tab in the dialog. Notice that it 
discovered the path <code>/admin</code>. 
      </li>\n
      <li>3.
        Try and browse to <code>/admin</code>. Although you don't have access, the error 
message indicates that <code> DontWannaCry</code> users do.
      </li>\n
      <li>4.
       Go to the account registration page. Notice the message 
telling <code>DontWannaCry</code> employees to use their company email address. 
Register with an arbitrary email address in the format: 
<code>anything@your-email-id.web-security-academy.net</code>. 
You can find your email domain name by clicking the "Email client" 
button. 
      </li>\n
      <li>5.
        Go to the email client and click the link in the confirmation email to 
complete the registration. 

      </li>\n
      <li>6.
       Log in using your new account and go to the "My account" page. Notice 
that you have the option to change your email address. Change your 
email address to an arbitrary <code>@dontwannacry.com</code> address. 

      </li>\n
      <li>7.
       Notice that you now have access to the admin panel, where you can 
delete <code>carlos</code> to solve the lab
      </li>
    </ul>
  `;

  return (
    <>
      <GoBack_Btn />
      <ShowHint_Btn hintText={hintMessage} />
      <div className="container">
        <h2 className="lab2-header">Lab1</h2>
        <Go2TopBtn />
      </div>
    </>
  );
}
