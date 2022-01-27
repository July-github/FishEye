/***** Display dropdown *****/
//Display dropdown

export function displayDropbtn(){
	const arrow = document.getElementById("arrow")

	arrow.addEventListener("click", function(){
		displayDropbtnOnFocus()
	})

	listenToDropdown();
}

//Navigate in the dropdown with arrows

function displayDropbtnOnFocus(){
	const dropbtn = [...document.getElementsByClassName("dropbtn")]
	const arrow = document.getElementById("arrow")
	const listBox = document.querySelector('#sort_options');

	if(arrow.classList.contains('fa-angle-up')){
		dropbtn.map(drop => drop.style.display = "none");
		arrow.removeAttribute('class', 'fa fa-angle-up');
		arrow.setAttribute('class', 'fa fa-angle-down');
		listBox.setAttribute('aria-expanded', 'false')	;
	}else{
		dropbtn.map(drop => drop.style.display = "block");
		arrow.removeAttribute('class', 'fa fa-angle-down');
		arrow.setAttribute('class', 'fa fa-angle-up');
		listBox.setAttribute('aria-expanded', 'true');
	}

}

function closeDropbtnOnBlur(){
	const dropbtn = [...document.getElementsByClassName("dropbtn")]
	const arrow = document.getElementById("arrow")
	const listBox = document.querySelector('#sort_options');

	dropbtn.map(drop => drop.style.display = "none");
	arrow.removeAttribute('class', 'fa fa-angle-up');
	arrow.setAttribute('class', 'fa fa-angle-down');
	listBox.setAttribute('aria-expanded', 'false');
}

export function listenToDropdown(){

	const buttonList = document.querySelector('#pictures-sort')
	const listLikes = document.querySelector('#Likes');
	const listDate = document.querySelector('#Date');
	const listTitle = document.querySelector('#Title');
	const pictureGrid = document.querySelector('.picture-card-grid');
	const header = document.querySelector('.photograph-header');

	buttonList.addEventListener('focusin', () => {
		displayDropbtnOnFocus()
	})
	listLikes.addEventListener('focusin', () => {
		displayDropbtnOnFocus()
	})
	listDate.addEventListener('focusin', () => {
		displayDropbtnOnFocus()
	})
	listTitle.addEventListener('focusin', () => {
		displayDropbtnOnFocus()
	})

	pictureGrid.addEventListener('focusin', () => {
		closeDropbtnOnBlur()
	})
	header.addEventListener('focusin', () => {
		closeDropbtnOnBlur()
	})

}