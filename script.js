function addItem() {
    let task = document.getElementById("task-input").value;

    if (task === '') {
        alert("Please enter a task!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = task;
        document.getElementById("tasks").appendChild(li);

        // შევქმნათ span ელემენტი
        let span = document.createElement('span');
        // &#x2715 - ამას ჩავწერთ სპანში
        span.innerHTML = '&#x2715';
        // li-ს მივაბამთ span-ს
        li.appendChild(span);

        document.getElementById("task-input").value = '';
    }
}

setTimeout(() => {
    document.getElementById("tasks").addEventListener('click', function (e) {
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
}, false);
}, 1000);
