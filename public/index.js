async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    async function fetchfunction(){
        console.log("Here")
        return await fetch("http://localhost:9001/counter")
    }

    let response = await fetchfunction()
    //let response = await fetch("http://localhost:9001/counter") can also work instead of just using a function returning fetch()
    console.log(fetchfunction)
    let obj = await response.json()
    console.log(response)
    console.log(obj)
    let countValue = obj.value

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()