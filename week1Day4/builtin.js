class SortSet extends Set {
    sort(value) {
        let set = new Set(value);
        return Array.from(set).sort();
    }

    reverse(value) {
        let set = new Set(value);
        return Array.from(set).sort().reverse();
    }
}

let dishes = new Set();
dishes.add("vada").add("idly").add("dosa");
let sorting = new SortSet();
console.log(sorting.sort(dishes));
console.log(sorting.reverse(dishes));
