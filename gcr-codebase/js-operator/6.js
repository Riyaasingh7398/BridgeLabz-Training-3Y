let count = 0;

function increment() {
    function updateCount() {
        count++;
        console.log("Count:", count);
    }

    updateCount();
}

function decrement() {
    function updateCount() {
        count--;
        console.log("Count:", count);
    }

    updateCount();
}

increment();
increment();
increment();
decrement();
decrement();
