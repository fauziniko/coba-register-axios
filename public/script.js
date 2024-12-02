document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');
    const repeatPasswordInput = document.getElementById('repeatPassword');
    const toggleRepeatPasswordButton = document.getElementById('toggleRepeatPassword');

    // Toggle password visibility
    togglePasswordButton.addEventListener('click', () => {
        const isPasswordVisible = passwordInput.type === 'text';
        passwordInput.type = isPasswordVisible ? 'password' : 'text';
        togglePasswordButton.textContent = isPasswordVisible ? '👁' : '🙈';
    });

    // Toggle repeat password visibility
    toggleRepeatPasswordButton.addEventListener('click', () => {
        const isRepeatPasswordVisible = repeatPasswordInput.type === 'text';
        repeatPasswordInput.type = isRepeatPasswordVisible ? 'password' : 'text';
        toggleRepeatPasswordButton.textContent = isRepeatPasswordVisible ? '👁' : '🙈';
    });
});
