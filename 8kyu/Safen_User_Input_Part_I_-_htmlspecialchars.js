function htmlspecialchars(formData) {
    const fixData = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    return formData.replace(/[<>"&]/g, char => fixData[char]);
}