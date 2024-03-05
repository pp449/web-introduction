const submitButton = document.getElementById('submitResult');
let isLoading = false;

const haedarrLoading = async () => {
	const haeDarrList = document.getElementsByClassName('haeDarr');
	const interval = 500;

	for (let i = 0; i < haeDarrList.length; i++) {
		setTimeout(() => {
			haeDarrList[i].style.visibility = 'visible';
		}, i * interval);
	}
};

const checkResult = () => {
	if (isLoading) return;
	const userName = document.getElementById('name');
	if (userName.length === 0) {
		alert('이름을 입력해주세요!');
		return;
	}
	isLoading = true;
	haedarrLoading();

	const checkedBoxes = document.querySelectorAll('input[name="movie"]:checked');

	let alertMessage = `${userName.value}님 환영합니다! \n취향이 같은 갯수 - ${checkedBoxes.length}개\n`;
	let darrCount;

	if (checkedBoxes.length === 5) {
		darrCount = '🦦🦦🦦';
	} else if (checkedBoxes.length > 2) {
		darrCount = '🦦🦦';
	} else {
		darrCount = '🦦';
	}

	alertMessage += '총점 : ' + darrCount;

	setTimeout(() => {
		alert(alertMessage);
		const haeDarrList = document.getElementsByClassName('haeDarr');
		Array.from(haeDarrList).map((haeDarr) => (haeDarr.style.visibility = 'hidden'));
		isLoading = false;
		checkedBoxes.forEach((box) => (box.checked = false));
		userName.value = '';
	}, 2500);
};

submitButton.addEventListener('click', checkResult);
