const toastTemplate = `<div style="opacity:0" class="flex bg-TYPE_COLOR-100 duration-200 justify-between m-8 me-4 p-4 rounded-lg transition sm:w-96 w-auto"><div class="flex items-center justify-center">TYPE_ICON</div><div class="ml-4 mr-2 w-full"><h1 class="font-semibold text-xl">TOAST_TITLE</h1><p>TOAST_DESCRIPTION</p></div><div class="flex items-center justify-center cursor-pointer"><svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="translate(5 5)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 10.5-10-10z"/><path d="m10.5.5-10 10"/></g></svg></div></div>`;

const toastStyles = {
	info: {
		color: "sky",
		icon: `<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="translate(2 2)"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.5" cy="8.5" r="8"/><path d="m8.5 12.5v-4h-1"/><path d="m7.5 12.5h2"/></g><circle cx="8.5" cy="5.5" r="1" fill="currentColor"/></g></svg>`,
	},
	warn: {
		color: "orange",
		icon: `<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="10.5" cy="10.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="m10.5 11.5v-5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10.5" cy="14.5" r="1" fill="currentColor"/></g></svg>`,
	},
	error: {
		color: "rose",
		icon: `<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="10.5" cy="10.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="m10.5 11.5v-5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10.5" cy="14.5" r="1" fill="currentColor"/></g></svg>`,
	},
	success: {
		color: "emerald",
		icon: `<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8"/><path d="m5.5 9.5 2 2 5-5"/></g></svg>`,
	},
};

function toastInit() {
	var body = document.querySelector("body");
	var alertBox = document.createElement("div");
	alertBox.id = "alertBox";
	alertBox.classList = "fixed bottom-0 right-0 z-[9999]";
	body.append(alertBox);
}

function toast(title, message, style, closeAfter = 7.5) {
	var body = document.getElementById("alertBox");
	var alert = document.createElement("div");
	let template = toastTemplate.replace("TYPE_COLOR", style.color);
	template = template.replace("TYPE_ICON", style.icon);
	alert.innerHTML = template.replace("TOAST_TITLE", title);
	alert.innerHTML = alert.innerHTML.replace("TOAST_DESCRIPTION", message);
	alert.querySelectorAll("div")[3].onclick = () => {
		alert.querySelectorAll("div")[0].style.opacity = 0;
		setTimeout(() => {
			alert.remove();
		}, 250);
	};
	setTimeout(() => {
		alert.querySelectorAll("div")[0].style.opacity = 0;
		setTimeout(() => {
			alert.remove();
		}, 250);
	}, closeAfter * 1000);
	body.append(alert);
	setTimeout(() => {
		alert.querySelectorAll("div")[0].style.opacity = 1;
	}, 200);
}
