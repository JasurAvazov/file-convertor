export function init() {
	document.getElementById("imageForm").addEventListener("submit", function (e) {
		e.preventDefault();
		const imageInput = document.getElementById("imageInput");
		const outputFormat = document.getElementById("outputFormat").value;
		const outputDiv = document.getElementById("output");

		const file = imageInput.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function () {
				const img = new Image();
				img.src = reader.result;
				img.onload = function () {
					const canvas = document.createElement("canvas");
					const ctx = canvas.getContext("2d");
					canvas.width = img.width;
					canvas.height = img.height;
					ctx.drawImage(img, 0, 0, img.width, img.height);

					canvas.toBlob(function (blob) {
						const url = URL.createObjectURL(blob);
						const link = document.createElement("a");
						link.href = url;
						link.download = `converted.${outputFormat}`;
						link.textContent = "Download";
						outputDiv.innerHTML = "";
						outputDiv.appendChild(link);
					}, `image/${outputFormat}`);
				};
			};
			reader.readAsDataURL(file);
		}
	});
}
