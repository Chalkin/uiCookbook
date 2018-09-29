import style from '../sass/style.scss'
import Sidebar from './sidebar'

new Sidebar({
    name: 'sidebar-1',
    input: '#sidebar-1-toggle',
    breakpoint: '1024px',
    exclude: []
});

new Sidebar({
    name: 'sidebar-2',
    input: '#sidebar-2-toggle',
    breakpoint: '801px',
    exclude: []
});
