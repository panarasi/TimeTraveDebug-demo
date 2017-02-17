const MAX = 20;
const recursiveFn = (val) => {
    console.log(val);
    setTimeout(() => {
        if (val < MAX) {
            recursiveFn(val + 1);
        }
    }, 100)
};
recursiveFn(0);
