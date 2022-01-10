/***** Display dropdown *****/

export function displayDropbtn(){
	const dropbtn = [...document.getElementsByClassName("dropbtn")]
	const arrow = document.getElementById("arrow")

	arrow.addEventListener("click", function(){
		if(arrow.classList.contains('fa-angle-up')){
			dropbtn.map(drop => drop.style.display = "none");
			arrow.removeAttribute('class', 'fa fa-angle-up');
			arrow.setAttribute('class', 'fa fa-angle-down');
		}else{
			dropbtn.map(drop => drop.style.display = "block");
			arrow.removeAttribute('class', 'fa fa-angle-down');
			arrow.setAttribute('class', 'fa fa-angle-up');
		}
	})
}