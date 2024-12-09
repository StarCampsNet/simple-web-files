document.getElementById('create-file').addEventListener('click', () => {
    // Get input from all segments
    const segment1 = document.getElementById('segment1').value.trim();
    const segment2 = document.getElementById('segment2').value.trim();
    const segment3 = document.getElementById('segment3').value.trim();
    const segment4 = document.getElementById('segment4').value.trim();
    const segment5 = document.getElementById('segment5').value.trim();
    const segment6 = document.getElementById('segment6').value.trim();
    const segment7 = document.getElementById('segment7').value.trim();

    // Validate that all segments are provided
    if (!segment1 || !segment2 || !segment3 || !segment4 || !segment5 || !segment6 || !segment7) {
        alert('Please fill in all file name segments.');
        return;
    }

    // Combine segments to create the full file name
    const fileName = `${segment1}.${segment2}.${segment3}.${segment4}.${segment5}.${segment6}.${segment7}`;

    // Get file content
    const fileContent = document.getElementById('file-content').value;

    // Create file blob and URL
    const fileBlob = new Blob([fileContent], { type: 'text/plain' });
    const fileURL = URL.createObjectURL(fileBlob);

    // Add the file to the list
    const fileList = document.getElementById('file-list');
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    fileItem.innerHTML = `
        <span>${fileName}</span>
        <div>
            <a href="${fileURL}" download="${fileName}">Download</a>
            <button class="delete-file">Delete</button>
        </div>
    `;

    fileList.appendChild(fileItem);

    // Clear input fields
    document.getElementById('segment1').value = '';
    document.getElementById('segment2').value = '';
    document.getElementById('segment3').value = '';
    document.getElementById('segment4').value = '';
    document.getElementById('segment5').value = '';
    document.getElementById('segment6').value = '';
    document.getElementById('segment7').value = '';
    document.getElementById('file-content').value = '';

    // Add delete functionality
    fileItem.querySelector('.delete-file').addEventListener('click', () => {
        fileList.removeChild(fileItem);
    });
});

