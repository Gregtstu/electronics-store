import { getCategory } from './goodsService';

export const categoryInFooter = (footerListCatalog) => {
    getCategory().then(categoryList => {
        for (const categoryListKey in categoryList) {
            const li = document.createElement('li');
            li.className = 'footer__item';
            const a = document.createElement('a');
            a.className = 'footer__link';
            a.href = `./index.html?category=${categoryListKey}`;
            a.textContent = categoryList[categoryListKey];
            li.append(a);
            footerListCatalog.append(li);
        }
    });
};
