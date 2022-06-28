import Card from '../UI/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DummyMeals=[
    {
        id:'m1',
        name:'Sushi',
        description:'Finest fish and veggies',
        price:22.99,
    },
    {
        id:'m2',
        name:'Schnitzl',
        description:'A german speciality',
        price:16.5,
    },
    {
        id:'m3',
        name:'Barbecue Burger',
        description:'American , raw ,meaty',
        price:12.99
    },
    {
        id:'m4',
        name:'Green Bowl',
        description:'Healthy...and green...',
        price:18.99
    }
];

const AvailableMeals=()=>{
const mealsList=DummyMeals.map(meals=><MealItem 
    key={meals.id}
    name={meals.name}
    description={meals.description}
    price={meals.price}
     />);

return (
    <section className={styles.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
)
};

export default AvailableMeals;