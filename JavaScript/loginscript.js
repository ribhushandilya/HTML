
const users = [
    { workerId: '12345', password: 'password1' },
    { workerId: '202006', password: 'kksharma' },
    { workerId: '202029', password: 'rksharma' },
    { workerId: '797620', password: 'jituraika' }
];

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerBtn = document.getElementById('registerBtn');
    const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
    const passwordInput = document.getElementById('password');
    const viewPasswordCheckbox = document.getElementById('viewPassword');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const workerIdInput = document.getElementById('workerId');

        const workerId = workerIdInput.value;
        const password = passwordInput.value;

        const user = users.find(user => user.workerId === workerId && user.password === password);

        if (user) {
            alert('Login successful!');
            window.location.href = 'home.html';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

    viewPasswordCheckbox.addEventListener('change', () => {
        const passwordFieldType = viewPasswordCheckbox.checked ? 'text' : 'password';
        passwordInput.setAttribute('type', passwordFieldType);
    });

    registerBtn.addEventListener('click', () => {
        alert('Registration functionality needs to be implemented on the server side.');
    });

    forgotPasswordBtn.addEventListener('click', () => {
        alert('Forgot password functionality needs to be implemented on the server side.');
    });
});
