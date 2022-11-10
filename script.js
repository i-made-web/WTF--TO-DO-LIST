window.addEventListener('load', () => {

    const form = document.getElementById('new-task-form');
    const input = document.querySelector('.new-task-input');
    const newTask = document.getElementById('tasks');

	form.addEventListener('submit', (w) => {
		w.preventDefault();

		const task = input.value;
        

		const newTaskDiv = document.createElement('div');
		newTaskDiv.classList.add('newTaskDiv');

		const newTaskInput = document.createElement('input');
		newTaskInput.classList.add('newTaskInput');
		newTaskInput.type = 'text';
		newTaskInput.value = task;
		newTaskInput.setAttribute('title', 'Click When Done')
		newTaskInput.setAttribute('readonly', 'readonly');
        newTaskDiv.appendChild(newTaskInput);

		const newTaskButtonsDiv = document.createElement('div');
		newTaskButtonsDiv.classList.add('newTaskButtonsDiv');
		
		const newTaskEditButton = document.createElement('span');
        newTaskEditButton.classList.add('newTaskEditButton');
        newTaskEditButton.innerText = "EDIT";

		const  newTaskCheckButton = document.createElement('span');
		newTaskCheckButton.classList.add('newTaskCheckButton');
		newTaskCheckButton.innerHTML = '<i class="fa-solid fa-square-check fa-2x"></i>';

		const  newTaskDelButton = document.createElement('span');
		newTaskDelButton.classList.add('newTaskDelButton');
		newTaskDelButton.innerHTML = '<i class="fa-solid fa-trash fa-2x"></i>';



		newTaskButtonsDiv.appendChild( newTaskEditButton);
		newTaskButtonsDiv.appendChild(newTaskCheckButton);
		newTaskButtonsDiv.appendChild(newTaskDelButton);

		newTaskDiv.appendChild(newTaskButtonsDiv);

		newTask.appendChild(newTaskDiv);

		input.value = '';

        newTaskEditButton.addEventListener('click', (e) => {
			if ( newTaskEditButton.innerText == "EDIT") {
                newTaskEditButton.innerText = "SAVE";
				newTaskInput.removeAttribute("readonly");
				newTaskInput.removeAttribute("class","strike");
				newTaskInput.setAttribute('class', 'editing');
				newTaskInput.focus();
			} else {
                newTaskEditButton.innerText = "EDIT";
				newTaskInput.setAttribute("readonly", "readonly");
				newTaskInput.setAttribute('class', 'after-editing');
			}
		});

		newTaskDelButton.addEventListener('click', (e) => {
			newTask.removeChild(newTaskDiv);
		});

		newTaskCheckButton.addEventListener('click', (e) =>{
			newTaskInput.setAttribute('class', 'strike');
		
		})
	});
});