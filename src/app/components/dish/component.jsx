"use client"

import { useState } from "react";
import { Input } from "../input/component";
import { Checkbox } from "antd";
import style from './style/style.module.css'

export default function Dish({ data, title, description }) {
	// Убираю лишний пробел перед  получением данных с сервера если он есть
	const correctData = data.map((dish) => {
		if (dish.name.slice(0, 1) === ' ') {
			return (
				{ ...dish, name: dish.name.slice(1) }
			)
		} else {
			return dish
		}
	})

	// Сортирую по алфавиту
	const sortingData = correctData.sort((x, y) => x.name.localeCompare(y.name))

	const [foundItems, setFoundItems] = useState(sortingData);
	const [checkedPrice, setCheckedPrice] = useState(false)

	// Сортирую список по возрастанию цены
	const onChange = (e) => {
		setCheckedPrice(e.target.checked)
		conditionChecked(e.target.checked, foundItems)
	}

	const conditionChecked = (checked, items) => {
		if (checked) {
			setFoundItems(items.sort((a, b) => {
				return parseFloat(a.price) - parseFloat(b.price);
			}))
		} else {
			const sortName = items.sort((x, y) => x.name.localeCompare(y.name))
			setFoundItems(sortName)
		}
	}

	// Фильтрую список в зависимости от совпадения со строкой поиска
	const filter = (e) => {
		if (e !== '') {
			const results = sortingData.filter((item) => {
				return item.name.toLowerCase().startsWith(e.toLowerCase());
			});

			conditionChecked(checkedPrice, results)

		} else {
			setFoundItems(sortingData);
		}
	};

	return (
		<div className={style.container}>
			<h1 className={style.title}>{title}</h1>
			<div className={style.description}>
				{description}
			</div>

			<div className={style.filter_panel}>
				<Input filter={filter} />
				<Checkbox onChange={onChange}>Sort by price</Checkbox>
			</div>

			<div className={style.items}>
				{foundItems && foundItems.length > 0 ?
					foundItems.map((item) => (
						<div className={style.item} key={item.id}>
							<div className={style.name}>{item.name}</div>
							<div>{item.price} <span>$</span></div>
						</div>
					))
					: <div>No matches found 😔</div>
				}
			</div>
		</div>
	);
}
