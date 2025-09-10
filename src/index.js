const tableBody = document.querySelector("tbody#contacts");

function createRow(contact) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><img src="${contact.pictureUrl}" alt="${contact.name}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-like">Like</button>
    </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
  `;
  tableBody.appendChild(row);

  // DELETE button
  const deleteBtn = row.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    row.remove();
  });

  // LIKE button
  const likeBtn = row.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    row.classList.toggle("liked");

    likeBtn.innerText = likeBtn.innerText === "Like" ? "Un-Like" : "Like";
  });

  return row;
}

const randomIndex = Math.floor(Math.random() * contacts.length);
const randomContact = contacts.splice(randomIndex, 1)[0];
createRow(randomContact);

const threeContacts = contacts.splice(0, 3);
threeContacts.forEach((contact) => createRow(contact));

const addRandomBtn = document.querySelector("#btn-add-random");

addRandomBtn.addEventListener("click", () => {
  if (contacts.length === 0) return;

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomActor = contacts.splice(randomIndex, 1)[0];

  createRow(randomActor);
  e;
});
