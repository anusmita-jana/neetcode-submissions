class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for(const s of strs){
            encoded += `${s.length}#${s}`;
        }
        return encoded;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let i = 0;
        while(i<str.length){
            const delimiterPos = str.indexOf('#', i);
            const length = parseInt(str.substring(i, delimiterPos), 10);
            const start = delimiterPos + 1;
            const s = str.substring(start, start + length);
            decoded.push(s);
            i = start + length;
        }
        return decoded;
    }
}
