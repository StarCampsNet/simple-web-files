document.getElementById('create-file').addEventListener('click', () => {
    const fileName = document.getElementById('file-name').value.trim();
    const fileContent = document.getElementById('file-content').value;

    if (!fileName) {
        alert('Please provide a file name.');
        return;
    }

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
    document.getElementById('file-name').value = '';
    document.getElementById('file-content').value = '';

    // Add delete functionality
    fileItem.querySelector('.delete-file').addEventListener('click', () => {
        fileList.removeChild(fileItem);
    });
});

