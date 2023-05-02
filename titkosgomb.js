const checkInput = (e) => {
    if (e.target.value == "Kiss Gábor") {
        e.target.classList.remove('error')
        e.target.classList.add('success')
        submitBtn.removeAttribute('disabled')
        inputDisplay.textContent = args.success.value
    } else {
        e.target.classList.add('error')
        e.target.classList.remove('success')
        submitBtn.setAttribute('disabled', 'true')
        inputDisplay.textContent = args.error.value
    }
}

const args = {
    success: {
        value: ""
    },
    error: {
        value: ""
    }
}

const fname = document.getElementById('fname')
const submitBtn = document.getElementById('submit')
const inputDisplay = document.getElementById('input-display')
inputDisplay.textContent = args.error.value
submitBtn.disabled = 'true'
fname.addEventListener('input', checkInput)

submitBtn.addEventListener("click", () => {
    window.location.href = "sotetoldal.html";
});

