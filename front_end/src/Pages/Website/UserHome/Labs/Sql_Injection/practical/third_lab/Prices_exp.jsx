// import "./Prices_exp.css";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
export default function Prices_exp() {
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1.
  Use Burp Suite to intercept and modify the request that sets the product category filter.
      </li>\n
      <li>2.
      
Determine the number of columns that are being returned by the query and which columns contain text data. Verify that the query is returning two columns, both of which contain text, using a payload like the following in the category parameter:
\n
<mark><code>'+UNION+SELECT+'abc','def'+FROM+dual--</code></mark>
</li>\n


      <li>3. Use the following payload to display the database version:
\n <mark><code>
'+UNION+SELECT+BANNER,+NULL+FROM+v$version--</code></mark>
    </ul>
  `;
  return (
    <>
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
    </>
  );
}
