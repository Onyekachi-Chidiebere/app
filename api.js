const url = 'http://localhost:2001/add-user';
const handleSubmit = (e)=>{
    const Email = document.querySelector('input').value;

try {
  const response = await fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(Email), // data can be `string` or {object}!
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  });
  const json = await response.json();
  console.log('Success:', JSON.stringify(json));
} catch (error) {
  console.error('Error:', error);
}}
document.querySelector('button').addEventListener('click',handleSubmit);