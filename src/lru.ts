class LRUCache {
    private capacity: number;
    private map: Map<number, number>;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    put(key: number, value: number): number {
        if(this.map.has(key)) {
            this.map.delete(key);
        } 
        this.map.set(key, value);
        if(this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value);
        }
        return value;
    }

    get(key: number): number {
        if(this.map.has(key)) {
            return this.put(key, this.map.get(key) as number);
        } else {
            return -1;
        }
    }
}

const originalCache = new LRUCache(2);
const cache = new Proxy<LRUCache>(originalCache, {
    get: function(target, propKey: keyof LRUCache) {
        return (...args: any) => {
            const method = Reflect.get(target, propKey);
            const result = method.apply(target, args)
            console.log(`${propKey}(${args}): ${result}`);
            return result;
        };
    }
})
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4