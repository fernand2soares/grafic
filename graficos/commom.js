const getCSS = (variavel) => {
    return getComputedStyle(document.body)(variavel)
}

export {getCSS}