// Get all table rows
const rows = document.querySelectorAll("#league-body tr");

rows.forEach(row => {
  const cells = row.querySelectorAll("td");
  const teamData = {
    name: cells[1].innerText,
    mp: Number(cells[2].innerText),
    l: Number(cells[3].innerText),
    w: Number(cells[4].innerText),
    d: Number(cells[5].innerText),
    pts: Number(cells[6].innerText),
    gd: Number(cells[7].innerText),
    stars: Number(cells[8].innerText),
    rank: Number(cells[9].innerText)
  };

  // Add to Firestore
  db.collection("standings").doc(teamData.name).set(teamData)
    .then(() => console.log(`Added ${teamData.name}`))
    .catch(err => console.error(err));
});
