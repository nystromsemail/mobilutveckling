export default class Song {
    constructor(id, title, tones, altTitle='') {
        this.id = id;
        this.title = title;
        this.tones = tones;
        this.altTitle = altTitle;
    }
}