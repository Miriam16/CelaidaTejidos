function abriryoutube(){
    window.parent.document.location.href = ''
}
window.onload = async function () {
    document.getElementById('canalyoutube').addEventListener('click', abriryoutube)
}