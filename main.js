const inputs = document.querySelectorAll('.controls input');

let handleUpdate = () => {
    console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))