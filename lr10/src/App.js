import './App.css';
import Comp from './components/Comp';
import img1 from './images/f3.png';
import img2 from './images/f4.png';
import img3 from './images/f5.png';

function App() {
    return (
        <div className='myApp'>
            <h1>Что Вам необходимо?</h1>
            <div className='blocks'>
                <Comp
                    image={img1}
                    title={'Первый блок'}
                    text={'Очень много текста в блоке'}
                />
                <Comp
                    image={img2}
                    title={'Второй блок'}
                    text={'Очень много текста в блоке'}
                />
                <Comp
                    image={img3}
                    title={'Третий блок'}
                    text={'Очень много текста в блоке'}
                />
            </div>
        </div>
    );
}

export default App;