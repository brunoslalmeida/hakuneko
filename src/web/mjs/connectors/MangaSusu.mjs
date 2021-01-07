import MangaReaderCMS from './templates/MangaReaderCMS.mjs';

export default class MangaSusu extends MangaReaderCMS {

    constructor() {
        super();
        super.id = 'mangasusu';
        super.label = 'MangaSusu';
        this.tags = [ 'webtoon', 'hentai', 'indonesian' ];
        this.url = 'https://m.mangasusu.co';

        this.language = 'id';
    }
}