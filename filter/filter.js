async function fil() {
    console.log("Fetching data...");

    try {
        let response = await fetch('https://p35data.vercel.app/data.json');

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        let res = await response.json();
        console.log("Fetched Data:", res);  // Verify the JSON structure

        // Access the 'data' property from the JSON response
        let dataArray = res.data || [];
        console.log("Data Array:", dataArray);  // Check the array structure

        if (!Array.isArray(dataArray)) {
            console.error("Data inside 'data' property is not an array.");
            alert("डेटा लोड करने में समस्या है।");
            return;
        }

        let selectopt = document.querySelector('#filvalue').value;
        let selectsearchbox = document.querySelector('#searchbox').value.toLowerCase();
        let selecttable = document.querySelector('#tabledata tbody');

        let filterdata = [];

        if (selectopt === 'pname') {
            filterdata = dataArray.filter(item => item.pname.toLowerCase() === selectsearchbox);
        } else if (selectopt === 'bname') {
            filterdata = dataArray.filter(item => item.bname.toLowerCase() === selectsearchbox);
        } else if (selectopt === 'pprice') {
            let price = parseInt(selectsearchbox);
            filterdata = dataArray.filter(item => item.pprice <= price);
        }

        console.log("Filtered Data:", filterdata);

        if (filterdata.length === 0) {
            selecttable.innerHTML = "<tr><td colspan='7'>No data found</td></tr>";
            return;
        }

        // Debugging: check what will be rendered
        const tableDataHTML = filterdata.map(item => `
            <tr>
                <td>${item.id}</td>
                <td><img width="100px" src="${item.imageurl}" alt="${item.pname}" /></td>
                <td>${item.pname}</td>
                <td>${item.pprice}</td>
                <td>${item.bname}</td>
                <td><button onclick="del(${item.id})">Delete</button></td>
                <td><button onclick="updateform(${item.id})">Update</button></td>
            </tr>
        `).join("");
        
        console.log("Table Data HTML:", tableDataHTML);  // Check the HTML that will be added
        selecttable.innerHTML = tableDataHTML;
    } catch (error) {
        console.error("Error:", error);
        alert("डेटा लोड करने में समस्या है। कृपया पुनः प्रयास करें।");
    }
}
