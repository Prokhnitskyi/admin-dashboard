const URL = 'https://github.com/Prokhnitskyi';
const buttons = document.querySelectorAll('button');
const links = document.querySelectorAll('a');

buttons.forEach(btn=> btn.addEventListener('click', redirectToGitHub));
links.forEach(link=> link.addEventListener('click', redirectToGitHub));


function redirectToGitHub(event) {
    event.preventDefault();
    window.location.href = URL;
}