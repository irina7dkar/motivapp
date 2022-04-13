import React, { useState, useEffect,useRef } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const userRef = useRef();
	userRef.current = fetchedUser;
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				/*const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);*/
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const rawResponse = await fetch('https://pro-clickapp.ru/motivation.php', {
				method: 'POST',

				body: JSON.stringify({t: "e", id: user.id})
			});
			const content = await rawResponse.json();
			user.balance = content.balance;
			user.now_text = parseInt(content.now_text);
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home setUser={setUser} bridge={bridge} id='home' fetchedUser={fetchedUser} go={go} />
				</View>
			</AppRoot>

		</AdaptivityProvider>
	);
}

export default App;
