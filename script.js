const form = document.getElementById("adoptionForm");
const table = document.getElementById("adoptionTable");
const tableBody = table.querySelector("tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name_container").value;
  const email = document.getElementById("email_container").value;
  const phone = document.getElementById("phone_container").value;
  const age = document.getElementById("age_container").value;
  const size = document.getElementById("size_container").value;
  const agePref = document.getElementById("agep_container").value;
  const note = document.getElementById("note_container").value;

  if (!name || !email || !phone || !age || !size || !agePref) {
    alert("❗ Please fill in all required fields.");
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="border border-black px-2 py-1">${name}</td>
    <td class="border border-black px-2 py-1">${email}</td>
    <td class="border border-black px-2 py-1">${phone}</td>
    <td class="border border-black px-2 py-1">${age}</td>
    <td class="border border-black px-2 py-1">${size}</td>
    <td class="border border-black px-2 py-1">${agePref}</td>
    <td class="border border-black px-2 py-1">${note}</td>
    <td class="border border-black px-2 py-1">
      <button class="delete-btn text-red-500">Delete</button>
    </td>
  `;

  tableBody.appendChild(row);
  table.classList.remove("hidden");
  form.reset();

  row.querySelector(".delete-btn").addEventListener("click", function () {
    row.remove();
    if (tableBody.children.length === 0) {
      table.classList.add("hidden");
    }
  });
});





