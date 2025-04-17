import React, { useState, useEffect, useRef } from "react";
import Eye from "./components/eye";
import Ball from "./components/ball";

function App() {
	const interv = 1000;

	const [currPage, setCurrPage] = useState<number>(0);
	const [eyeStyles, setEyeStyles] = useState<object>({
		top: "0px",
		left: "50%",
	});
	const [ballStyles, setBallStyles] = useState<object>({});

	const [count, setCount] = useState(20);

	function main(nextPage = currPage + 1) {
		setCurrPage(nextPage);
		setCount(20);
		const interval = setInterval(() => {
			setCount((prev) => prev - 1);
		}, interv);

		setTimeout(() => {
			clearInterval(interval);

			if (nextPage < 12) {
				main(nextPage + 1);
			} else {
				setCurrPage(0);
				setEyeStyles(() => {
					return { top: "0px", left: "50%" };
				});
				setBallStyles({});
				setCount(20);
			}
		}, 20 * interv);
	}

	useEffect(() => {
		switch (currPage) {
			case 1: {
				console.log("THIS IS FIRST PAGE");
				break;
			}
			case 2: {
				setBallStyles(() => {
					return {
						top: "calc(50% - 15px)",
						left: "calc(50% - 15px)",
						animation: "pulse 1.5s ease-in-out infinite ",
						display: "block",
						transform: "translate(-50%, -50%)",
					};
				});
				break;
			}
			case 3: {
				setBallStyles(() => {
					return {
						animation: "top-bottom 1.5s infinite alternate-reverse ease-in-out",
						display: "block",
						transform: "translate(0%)",
						top: "calc(50% - 15px)",
						left: "calc(50% - 15px)",
					};
				});
				break;
			}
			case 4: {
				setBallStyles(() => {
					return {
						display: "none",
					};
				});
				break;
			}
			case 5: {
				setBallStyles(() => {
					return {
						animation: "left-right 1.5s infinite alternate-reverse ease-in-out",
						display: "block",
						transform: "translate(0%)",
						top: "calc(50% - 15px)",
						left: "calc(50% - 15px)",
					};
				});
				break;
			}
			case 6: {
				setBallStyles(() => {
					return {
						animation: "diagonal 1.5s infinite alternate-reverse ease-in-out",
						display: "block",
						transform: "translate(0%)",
						top: "calc(50% - 15px)",
						left: "calc(50% - 15px)",
					};
				});
				break;
			}
			case 7: {
				setBallStyles(() => {
					return {
						display: "none",
					};
				});
				break;
			}
			case 8: {
				setBallStyles(() => {
					return {
						animation: "clockwise 1.5s infinite alternate-reverse ease-in-out",
						display: "block",
						transform: "translate(0%)",
						top: "calc(50% - 15px)",
						left: "calc(50% - 15px)",
					};
				});
				break;
			}
			case 9: {
				setBallStyles(() => {
					return {
						animation: "spyral 1.5s infinite alternate-reverse ease-in-out",
						display: "block",
						transform: "translate(0%)",
						top: "calc(50% - 15px)",
						left: "calc(50% - 15px)",
					};
				});
				break;
			}

			case 10: {
				setBallStyles(() => {
					return {
						display: "none",
					};
				});
				break;
			}

			case 11: {
				setBallStyles(() => {
					return {
						display: "none",
					};
				});
				break;
			}

			case 12: {
				setBallStyles(() => {
					return {
						display: "none",
					};
				});
				break;
			}

			case 13: {
				setBallStyles(() => {
					return {
						display: "none",
					};
				});
				break;
			}

			default:
				break;
		}
	}, [currPage]);

	const pages = [
		<>
			<button
				type="button"
				className="starting-button"
				onClick={function () {
					setCurrPage((prev) => {
						return prev + 1;
					});
					setEyeStyles(() => {
						return {
							top: "0px",
							left: "100px",
							width: "90px",
							opacity: "0.5",
						};
					});
				}}
			>
				Розпочати заняття
			</button>
		</>,

		<div id="big-block">
			<div className="title">Рекомендації</div>
			<div className="info">
				<p>В комплексі набір вправ, під час яких потрібно дивитися у напрямку, який показує кружечок.</p>
				<p>Білий кружечок вказує тільки напрямок - погляд відводьте максимально, але щоб не було напруги в очах.</p>
				<p>У крайніх точках затримуйте погляд на секунду.</p>
				<p>Після виконання кожної вправи, за бажанням, легко замружитись або покліпати декілька секунд - це допоможе розслабити очі.</p>
				<p>Тривалість одного заняття: 3 хвилини 25 секунд.</p>
			</div>
			<div className="get-info">
				<input type="checkbox" name="check-me" className="do-not-show" />
				<label htmlFor="check-me">Більше не показувати</label>
				<button type="button" className="start-button" onClick={() => main()}>
					Почати
				</button>
			</div>
		</div>,

		<>
			<div id="field">
				<Ball styles={ballStyles} />
			</div>
			<div id="big-block" style={{ position: "absolute" }}>
				<div className="header">Розслабтеся</div>
				<div className="counter">{count < 10 ? "0" + count : count}</div>
				<div className="text-container">Заплющіть очі і не відкривайте до того, як почуєте звуковий сигнал</div>
			</div>
		</>,

		<>
			<div id="field">
				<Ball styles={ballStyles} />
			</div>
			<div id="big-block" style={{ position: "absolute" }}>
				<div className="header">Вгору-вниз</div>
				<div className="counter">{count < 10 ? "0" + count : count}</div>
				<div className="text-container">На секунду затримайте погляд у верхній і нижній точках</div>
			</div>
		</>,

		<>
			<div id="field">
				<Ball styles={ballStyles} />
			</div>
			<div id="big-block" style={{ position: "absolute" }}>
				<div className="header">Покліпайте очима</div>
				<div className="counter">{count < 10 ? "0" + count : count}</div>
				<div className="text-container">Покліпайте очима або закрийте очі до сигналу</div>
			</div>
		</>,

		<>
			<div id="field">
				<Ball styles={ballStyles} />
			</div>
			<div id="big-block" style={{ position: "absolute" }}>
				<div className="header">Вліво-вправо</div>
				<div className="counter">{count < 10 ? "0" + count : count}</div>
				<div className="text-container">Погляд відводьте максимально, але щоб не було напруги в очах</div>
			</div>
		</>,

		<>
			<div id="field">
				<Ball styles={ballStyles} />
			</div>
			<div id="big-block" style={{ position: "absolute" }}>
				<div className="header">По діагоналі</div>
				<div className="counter">{count < 10 ? "0" + count : count}</div>
				<div className="text-container">Дивіться по кутах, курсор покаже, як</div>
			</div>
		</>,

		<>
			<div id="field">
				<Ball styles={ballStyles} />
			</div>
			<div id="big-block" style={{ position: "absolute" }}>
				<div className="header">Покліпайте очима</div>
				<div className="counter">{count < 10 ? "0" + count : count}</div>
				<div className="text-container">Покліпайте очима або закрийте очі до сигналу</div>
			</div>
		</>,

		<>
			<div id="field">
				<Ball styles={ballStyles} />
			</div>
			<div id="big-block" style={{ position: "absolute" }}>
				<div className="header">За годинниковою стрілкою</div>
				<div className="counter">{count < 10 ? "0" + count : count}</div>
				<div className="text-container">Виконуйте плавно, не треба поспішати</div>
			</div>
		</>,

		<>
			<div id="field">
				<Ball styles={ballStyles} />
			</div>
			<div id="big-block" style={{ position: "absolute" }}>
				<div className="header">По спіралі</div>
				<div className="counter">{count < 10 ? "0" + count : count}</div>
				<div className="text-container">Робіть не менше, ніж чотири кола очима за раз</div>
			</div>
		</>,

		<>
			<div id="field">
				<Ball styles={ballStyles} />
			</div>
			<div id="big-block" style={{ position: "absolute" }}>
				<div className="header">Покліпайте очима</div>
				<div className="counter">{count < 10 ? "0" + count : count}</div>
				<div className="text-container">Покліпайте очима або закрийте очі до сигналу</div>
			</div>
		</>,

		<>
			<div id="field">
				<Ball styles={ballStyles} />
			</div>
			<div id="big-block" style={{ position: "absolute" }}>
				<div className="header">Там-тут</div>
				<div className="counter">{count < 10 ? "0" + count : count}</div>
				<div className="text-container">Подивіться на предмет за монітором, потім на монітор</div>
			</div>
		</>,

		<>
			<div id="field">
				<Ball styles={ballStyles} />
			</div>
			<div id="big-block" style={{ position: "absolute" }}>
				<div className="header">Розслабтесь</div>
				<div className="counter">{count < 10 ? "0" + count : count}</div>
				<div className="text-container">Заплющіть очі, залишилось небагато</div>
			</div>
		</>,

		<div id="big-block">
			<div className="title">Рекомендації</div>
			<div className="info">
				<p>В комплексі набір вправ, під час яких потрібно дивитися у напрямку, який показує кружечок.</p>
				<p>Білий кружечок вказує тільки напрямок - погляд відводьте максимально, але щоб не було напруги в очах.</p>
				<p>У крайніх точках затримуйте погляд на секунду.</p>
				<p>Після виконання кожної вправи, за бажанням, легко замружитись або покліпати декілька секунд - це допоможе розслабити очі.</p>
				<p>Тривалість одного заняття: 3 хвилини 25 секунд.</p>
			</div>
			<div className="get-info">
				<input type="checkbox" name="check-me" className="do-not-show" />
				<label htmlFor="check-me">Більше не показувати</label>
				<button type="button" className="start-button" onClick={() => main()}>
					Почати
				</button>
			</div>
		</div>,
	];

	return (
		<div className="App">
			<Eye styles={eyeStyles} />
			{pages[currPage]}
		</div>
	);
}

export default App;
