import { List } from "./list/list";
import Pizza from './../pizza.png';
import { Input } from "./input/input";

const itemsData = [
    'Никита',
    'Наташа',
    'Гриша',
    'Буреки с тыквой',
    'Асин невкусный корм',
    'Праздник к нам приходит',
    'Селёдка под шубой',
    '123 зелёных беса',
];

export const App = () => {
    const appContainer = document.createElement('div');
    appContainer.className = 'app';
    appContainer.innerHTML = '<h2>This is App component</h2>';

    const searchInput = Input({
        label: 'Search',
        onInput: e => {
            const filteredItems = itemsData
                .filter(item => (new RegExp(e.target.value, 'ig')).test(item))
            listWrapper.innerHTML = '';
            const list = List(filteredItems); 
            listWrapper.appendChild(list);
        }
    });
    appContainer.appendChild(searchInput);

    const listWrapper = document.createElement('div');
    listWrapper.className = 'list-wrapper';
    appContainer.appendChild(listWrapper);

    const list = List(itemsData);   
    listWrapper.appendChild(list);

    const myIcon = new Image();
    myIcon.src = Pizza;
    appContainer.appendChild(myIcon); 

    return appContainer;
}