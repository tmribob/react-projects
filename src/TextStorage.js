import StartTexts from "./StartTexts";


const TextStorage = {
    getAll: () => {
        try {
            const texts = localStorage.getItem('texts');
            if(!texts){
                TextStorage.save(StartTexts);
                return StartTexts;
            }
            return texts ? JSON.parse(texts) : [];
        } catch (error) {
            console.error('Ошибка чтения из localStorage:', error);
            return [];
        }
    },
    save: (texts) => {
        try {
            localStorage.setItem('texts', JSON.stringify(texts));
        } catch (error) {
            console.error('Ошибка записи в localStorage:', error);
        }
    },
    add: (newText) => {
        const texts = TextStorage.getAll();
        texts.push(newText);
        TextStorage.save(texts);
        return texts;
    },
    remove: (index) => {
        const texts = TextStorage.getAll();
        TextStorage.save(texts.filter((text, i) => i !== index));
        return texts;
    }
};

export default TextStorage;