// const selectAllCheckbox = document.getElementById('selectAll');
// const tableBody = document.getElementById('tableBody');

// // Function to create table rows from JSON data
// function populateTable(data) {
//     tableBody.innerHTML = ''; // Clear existing rows
//     data.forEach(item => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td><input type="checkbox" class="selectRow"></td>
//             <td>${item.Number}</td>
//             <td>${item['Asset Criticality']}</td>
//             <td><img src="${item.image}" alt="Asset" width="40"></td>
//             <td>${item['Serial Number']}</td>
//             <td>${item['Model Number']}</td>
//             <td>${item.Building}</td>
//             <td>${item.Manufacturer}</td>
//             <td>${item['Available For Service'] ? 'Yes' : 'No'}</td>
//             <td>${item.Department}</td>
//             <td>${item['Parent Asset']}</td>
//             <td>${item['Available status'] ? 'Available' : 'Not Available'}</td>
//             <td>${item['Asset ID']}</td>
//             <td>${item['Location Category']}</td>
//             <td>${item['Failure Class']}</td>
//             <td>${item['ABC Indicator']}</td>
//             <td>${item['Safety Critical Equipment'] ? 'Yes' : 'No'}</td>
//             <td>${item['EX/ATEX'] ? 'Yes' : 'No'}</td>
//             <td>${item['Business Criticality']}</td>
//             <td>${item['Environmental Criticality']}</td>
//             <td>${item['Safety Criticality']}</td>
//             <td>${item['Production Criticality']}</td>
//             <td>${item['Planer Group']}</td>
//             <td>${item['Cost Center']}</td>
//             <td>${item['SRD flag'] ? 'Yes' : 'No'}</td>
//         `;
//         tableBody.appendChild(row);
//     });
// }

// // Fetch data from assets.json
// fetch('./data/assets.json')
//     .then(response => response.json())
//     .then(data => {
//         populateTable(data);

//         // Add event listener for "Select All" checkbox
//         selectAllCheckbox.addEventListener('change', () => {
//             const selectRowCheckboxes = document.querySelectorAll('.selectRow');
//             selectRowCheckboxes.forEach(checkbox => {
//                 checkbox.checked = selectAllCheckbox.checked;
//             });
//         });
//     })
//     .catch(error => console.error('Error fetching data:', error));



