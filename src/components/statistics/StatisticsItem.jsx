import css from './Statistics.module.css';
import { getRandomColor } from './getRandomColor';
export const StatisticsItem = ({key, label, percentage})=>{return(
	<li className={css.item} key ={key} style={{
        backgroundColor: getRandomColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
)}

