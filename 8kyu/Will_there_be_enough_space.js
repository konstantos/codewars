function enough(cap, on, wait) {
    let res = cap - on - wait;
    if (res >= 0) {
        return 0
    } else {
        return res * -1;
    }
}