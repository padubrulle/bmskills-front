

export function setCookie(name: string, value: string, duration: number){
    const d = new Date();
    d.setTime(d.getTime() + duration * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = name + "=" + value + ';' + expires + ";path=/"
}