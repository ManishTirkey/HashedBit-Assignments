{
  /* <tr>
  <td>1</td>
  <td>Gujarat Titans</td>
  <td>14</td>
  <td>10</td>
  <td>4</td>
  <td>0</td>
  <td>0.316</td>
  <td>20</td>
</tr>; */
}

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("tbody");

  fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
    .then((response) => response.json())
    .then((data) => {
      // Sort the data by NRR in ascending order
      data.sort((a, b) => a.NRR - b.NRR);

      // Generate table rows
      data.forEach((team, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${team.No}</td>
          <td>${team.Team}</td>
          <td>${team.Matches}</td>
          <td>${team.Won}</td>
          <td>${team.Lost}</td>
          <td>${team.Tied}</td>
          <td>${team.NRR}</td>
          <td>${team.Points}</td>
        `;

        tbody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching the data:", error));
});
