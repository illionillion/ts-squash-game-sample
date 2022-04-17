window.addEventListener('load', e =>{
    const box = document.getElementById('box') as HTMLElement
    let num : number = 0
    box.addEventListener('click', e => {
        num++
        (e.target as HTMLElement).innerHTML=`${num}`
    })
})