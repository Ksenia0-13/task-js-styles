export function hasClass(elem, elemClass) {
    return new RegExp(`(^|\\s)${elemClass}(\\s|$)`).test(elem.className);
}

export function addClass(elem, elemClass) {
    if (!hasClass(elem, elemClass)) {
        elem.className = (elem.className + ' ' + elemClass).trim();
    }
}

export function removeClass(elem, elemClass) {
    elem.className = elem.className
        .split(/\s+/)
        .filter((cls) => cls !== elemClass)
        .join(' ')
        .trim();
}

export function toggleClass(elem, elemClass) {
    if (hasClass(elem, elemClass)) {
        removeClass(elem, elemClass);
    } else {
        addClass(elem, elemClass);
    }
}
