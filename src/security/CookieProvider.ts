export function setCookie(name, value, duration){
    const d = new Date();
    d.setTime(d.getTime() + duration * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = name + "=" + value + ';' + expires + ";path=/"
}

export function getCookie(name) {
    
}