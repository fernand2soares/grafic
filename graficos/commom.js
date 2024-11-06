const getCSS = (variavel) => {
    return getComputedStyle(document.body)(variavel)
}

const tickConfig = {
   
        color: getCSS('--primary-color'),
        size: 16,
        family: getCSS('--font')
    
}
export {getCSS, tickConfig}