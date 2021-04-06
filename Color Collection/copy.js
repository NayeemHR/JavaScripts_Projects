
document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
//   let text = document.querySelector("#input").value;
  let text = document.querySelector(".color").textContent;
  text = text.replace(/\s+/g, '');
  console.log(text);
  await navigator.clipboard.writeText(text);
}