document.getElementById('create-file').addEventListener('click', () => {

	const segment1 = document.getElementById().value.trim();
	
	if (!segment1 || !segment2 || !segment3 || !segment4 || !segment5 || !segment6 || !segment7) {
		alert('Please fill in all file name segments.');
		return;
	}

	const fileName = `${segment1}.${segment2}`;

	const fileContent = document.getElementById('file-content').value;

	const fileBlob = new Blob([fileContent], { type: 'text/plain' });
	const fileURL = URL.createObjectURL(fileBlob);

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

	document.getElementById('segment1').value = '';
	document.getElementById('segment2').value = '';

	fileItem.querySelector().addEventListener('click', () => {
		fileList.removeChild(fileItem);
	});
});
