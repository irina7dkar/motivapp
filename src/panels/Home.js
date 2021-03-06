import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import fon from "../img/фон2.png";
import but from "../img/but.png";
import balBack from "../img/balBack.png";

import {
    Panel,
    SplitLayout,
    PanelHeader,
    Header,
    Button,
    Group,
    Cell,
    Div,
    Avatar,
    SplitCol,
    ModalRoot, ModalCard, View
} from '@vkontakte/vkui';
import "../css/main.css"
import Text from "../Typisttest";
import $ from "jquery";
import Modal from "./Modal";
import bridge from "@vkontakte/vk-bridge";

const Home = ({id, go,setUser, bridge, fetchedUser}) => {
    const [activeModal, setActiveModal] = useState(null);
    const [disable,setDisable] = useState(false)
    let texts = "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других\n" +
        "Сложнее всего начать действовать, все остальное зависит только от упорства\n" +
        "Жизнь - это то, что с тобой происходит, пока ты строишь планы\n" +
        "Начинать всегда стоит с того, что сеет сомнения\n" +
        "В моем словаре нет слова «невозможно»\n" +
        "Свобода ничего не стоит, если она не включает в себя свободу ошибаться\n" +
        "Либо вы управляете вашим днем, либо день управляет вами\n" +
        "Начинайте делать все, что вы можете сделать – и даже то, о чем можете хотя бы мечтать. В смелости гений, сила и магия\n" +
        "Лучшая месть – огромный успех\n" +
        "Все дело в мыслях. Мысль — начало всего. И мыслями можно управлять. И поэтому главное дело совершенствования: работать над мыслями.\n" +
        "Есть только один способ избежать критики: ничего не делайте, ничего не говорите и будьте никем.\n" +
        "Идите уверенно по направлению к мечте. Живите той жизнью, которую вы сами себе придумали\n" +
        "Стоит только поверить, что вы можете – и вы уже на полпути к цели.\n" +
        "Упади семь раз и восемь раз поднимись\n" +
        "Если тебе плюют в спину, значит ты впереди\n" +
        "Учитесь, пока другие спят, работайте, пока другие отдыхают, будьте готовы, пока другие расслабляются и мечтайте, пока другие плачутся\n" +
        "Не проблемы должны толкать вас в спину, а вперед вести мечты\n" +
        "Вы не будете расти, если не будете пытаться совершить что-то за пределами того, что вы уже знаете в совершенстве.  \n" +
        "Не бойтесь жизни. Поверьте, что жизнь достойна того, чтобы прожить, и вам будет дано по вере вашей. \n" +
        "Вы никогда не сумеете решить возникшую проблему, если сохраните то же мышление и тот же подход, который привел вас к этой проблеме. \n" +
        "А если ты не уверен в себе ничего хорошего никогда не получится. Ведь если ты в себя не веришь, кто же поверит?\n" +
        "Искусство быть счастливым заключается в способности находить счастье в простых вещах. \n" +
        "Если останавливаться всякий раз, когда тебя оскорбляют или в тебя плюются, то ты никогда не дойдешь до места, куда тебе надо попасть. \n" +
        "Для нас не должно существовать никаких пределов. \n" +
        "Разницу между тем, кто что-то достиг, и тем, кто не достиг ничего, определяет то, кто стартовал раньше. \n" +
        "Окружай себя только теми людьми, кто будет тянуть тебя выше. Просто жизнь уже полна теми, кто хочет тянуть тебя вниз. \n" +
        "Умей оставаться самим собой и ты никогда не станешь игрушкой в руках судьбы. \n" +
        "Во-первых, не делай ничего без причины и цели. Во-вторых, не делай ничего, что бы не клонилось на пользу общества. \n" +
        "Знаний недостаточно, ты должен применять их. Желаний недостаточно, ты должен делать. \n" +
        "Если тебе не нравится то, что ты получаешь, измени то, что ты даешь. \n" +
        " Все победы начинаются с победы над самим собой. \n" +
        "Вы не должны сравнивать себя с другими, и если природа создала вас летучей мышью, вы не должны пытаться стать страусом. \n" +
        "Желать и ждать – на этом далеко не уедешь. Встань и начни следовать за своей мечтой. \n" +
        "Ты не можешь ни выйграть, ни проиграть до тех пор, пока ты не участвуешь в гонках. \n" +
        "Что бы ты ни придумал, всегда найдется тот, кто уже делал это до тебя. Так что главное – сделать это лучше. \n" +
        "Спи. Мечтай. Проснись. Действуй. Придумывай. Сражайся. Побеждай. Спи. Мечтай. \n" +
        "Вы хотите знать кто вы? Не спрашивайте. Действуйте! Действие будет описывать и определять вас. \n" +
        "Если хочешь продлить свою жизнь, укороти свои трапезы. \n" +
        "Я этого хочу. Значит, это будет. \n" +
        "Логика может привести вас от пункта А к пункту Б, а воображение – куда угодно. \n" +
        "Главное – отдать все силы избранному делу и от вас пойдет молва. Ибо совершенство – редкость. \n" +
        "Мечтайте так, как будто вам жить вечно. Живите так, как будто вам умирать сегодня. \n" +
        "Если хотите добиться успеха, задайте себе  вопроса: Почему? А почему бы и нет? Почему бы и не я? Почему бы и не прямо сейчас? \n" +
        "Нашу судьбу формируют именно те маленькие незаметные решения, которые мы принимаем по  раз за день. \n" +
        "Неудача – это просто возможность начать снова, но уже более мудро. \n" +
        "Просыпаясь утром, спроси себя: «Что я должен сделать?» Вечером, прежде чем заснуть: «Что я сделал». \n" +
        "Делай сегодня то, что другие не хотят, завтра будешь жит так, как другие не могут. \n" +
        "Тяжелый труд – это скопление легких дел, которые вы не сделали, когда должны были сделать. \n" +
        "Быстрее всего учишься в трех случаях – до  лет, на тренингах, и когда жизнь загнала тебя в угол. \n" +
        "Воин не отказывается от того, что любит. Он находит любовь в том, что делает. \n" +
        "Воин действует, а глупец протестует. \n" +
        "Не ошибается тот, кто ничего не делает! Не бойтесь ошибаться – бойтесь повторять ошибки! \n" +
        "Кораблю безопасней в порту, но он не для этого строился. \n" +
        "Есть только один способ проделать большую работу – полюбить ее! \n" +
        "Лучше зажечь одну свечу, чем проклинать темноту. \n" +
        "Делай, что можешь, с тем, что у тебя есть, и там, где ты находишься. \n" +
        "Без идеи не может быть ничего великого! Без великого не может быть ничего прекрасного. \n" +
        "Каждая мечта тебе дается вместе с силами, необходимыми для ее осуществления. \n" +
        "Жизнь – это большой холст и вы должны бросить на него всю краску какую только можете. \n" +
        "Путь в тысячу ли начинается с одного единственного маленького шага. \n" +
        "Инвестиции в знания дают самые высокие дивиденды.\n" +
        "Успех – это возможность просыпаться утром и засыпать вечером, успевая делать между этими двумя событиями то, что тебе по-настоящему нравится. \n" +
        "Никогда не недооценивайте себя. Все то, что делают другие, можете делать и вы. \n" +
        "Великие умы ставят перед собой цели; остальные люди следуют своим желаниям. \n" +
        "Если вы откажитесь от своей мечты, то что останется? \n" +
        "Или вы управляете днем или день управляет вами. \n" +
        "Счастье не в том, чтобы делать всегда, что хочешь, а в том, чтобы всегда хотеть того, что делаешь. \n" +
        "Когда вы вводите какие-либо новшества будьте готовы к тому, что вас назовут сумасшедшим. \n" +
        "Великие души обладают волей, слабые же имеют только желания. \n" +
        "Старайтесь стать лидерами рынка. Присваивайте и контролируйте важнейшие технологии во всем, что вы делаете. \n" +
        "В вашем подсознании скрыта сила, способная перевернуть мир. \n" +
        "Делайте дела с теми людьми, которые вам нравятся и которые разделяют ваши цели. \n" +
        "Мы являемся тем, что постоянно делаем. Следовательно, совершенство – не действие, а привычка. \n" +
        " Мы – хозяева своей судьбы. Мы – капитаны своих душ. \n" +
        "Одно лишь мотивации недостаточно. Если взять идиота и мотивировать его, получится мотивированный идиот. \n" +
        " Вы никогда не будете слишком стары для того. Чтобы поставить перед собой новую цель или мечтать о чем-то новом. \n" +
        "Самые важные вещи в мире были совершены людьми, которые продолжали попытки, даже когда не оставалось никакой надежды. \n" +
        "Если вы хотите иметь успех, вы должны выглядеть так, как будто вы его имеете. \n" +
        "Тот, кто не может располагать / дня лично для себя, должен быть назван рабом.\n" +
        "Тот, кто хочет видеть результаты своего труда немедленно, должен идти в сапожники. \n" +
        "Наши достижения всегда соответствуют нашим амбициям. \n" +
        "Если ты не научишься управлять собой, тобой будут управлять другие. \n" +
        "Улыбнитесь, потому что жизнь – прекрасная вещь и есть много причин для улыбок. \n" +
        "Еще не все колеса изобретены: мир слишком удивителен, чтобы сидеть сложа руки. \n" +
        "У меня не было рабочих дней и дней отдыха. Я просто делал и получат от этого удовольствие. \n" +
        "Человек не может правильно поступать в одной сфере своей жизни, когда неправильно поступает в других. Жизнь – это неделимое целое. \n" +
        "Вместо того, чтобы сетовать, что роза имеет шипы, я радуюсь тому, что среди шипов растет роза. \n" +
        "Ты никогда не переплывешь океан, если будешь бояться потерять берег из виду. \n" +
        "Говорят, что мотивация длится недолго. Что ж, свежесть после ванны – тоже. Поэтому заботиться о них стоит ежедневно.\n" +
        "Поверьте, что сможете, и пол пути уже пройдено. \n" +
        "Жизнь измеряется не количеством наших вдохов, а количеством моментов, от которых перехватывает дахание. \n" +
        "Почувствуйте попутный ветер в вашем парусе. Двигайтесь…Если нет ветра, беритесь за весла. \n" +
        "Либо напишите книгу, стоящую чтения, либо сделайте что-то, стоящее написания книги. \n" +
        "Неосмысленная жизнь не стоит того, чтобы жить. \n" +
        "Свобода ничего не стоит, если она не включает в себя свободу ошибаться. \n" +
        "Два самых важных дня в твоей жизни: день, когда ты появился на свет, и день, когда понял, зачем. \n" +
        "Лучшая месть – огромный успех. \n" +
        "Начинайте копировать то, что вам нравится. Копируйте. Копируйте. Копируйте. И найдете себя. \n" +
        "Не будь другим, если можешь быть самим собой. \n" +
        "Завтра – первый чистый лист книги в  страниц. Напиши хорошую книгу. \n" +
        "То, что не будет записано, никогда не будет исполнено. \n" +
        "Без любви жить легче. …Но без нее нет смысла. \n" +
        "Кому-то не хватает одной женщины, и он переключается на пятую, десятую. А другому не хватает жизни, чтобы любить одну-единственную. \n" +
        "Двое неидеальных встретили друг друга… Полюбили… И стали идеальными друг для друга… \n" +
        "Старость не может защитить от любви, но любовь легко защитит от старости. \n" +
        "Неразделенная любовь так же отличается от любви взаимной, как заблуждение от истины. \n" +
        "Безответная любовь не унижает человека, а возвышает его. \n" +
        "Любить — значит перестать сравнивать. \n" +
        "Любовь побеждает все, кроме бедности и зубной боли. \n" +
        "Когда любишь, то такое богатство открываешь в себе! Даже не верится, что ты так умеешь любить. \n" +
        "Любовь умирает. Величайшая трагедия жизни состоит не в том, что люди гибнут, а в том, что они перестают любить. \n" +
        "Женщина священна; женщина, которую любишь, священна вдвойне. \n" +
        "Все может отдать мужчина своему верному другу — все, только не ту женщину, которую любит. \n" +
        "Любовь — это то единственное, что обостряет ум, будит творческую фантазию, то, что очищает нас и освобождает. \n" +
        "Дарить любовь гораздо важнее, чем ее получать. \n" +
        "Любовь одна, но подделок под нее — тысячи. \n" +
        "Любовь, а не немецкая философия служит объяснением этого мира. \n" +
        "Я пишу не для того, чтобы просить тебя прийти, я пишу, чтобы предупредить: я всегда буду ждать. \n" +
        "Иногда хватает мгновения, чтобы забыть жизнь, а иногда не хватает жизни, чтобы забыть мгновение.\n" +
        "Иногда хватает мгновения, чтобы забыть жизнь, а иногда не хватает жизни, чтобы забыть мгновение.\n" +
        "Сильные люди не любят свидетелей своей слабости.\n" +
        "Извините за опоздание, я заблудился на дороге под названием жизнь.\n" +
        "Смысл жизни не в том, чтобы ждать, когда закончится гроза, а в том, чтобы учиться танцевать под дождем.\n" +
        "Жизнь состоит не в том, чтобы найти себя. Жизнь состоит в том, чтобы создать себя.\n" +
        "У людей теперь нет времени друг для друга.\n" +
        "Хорошие друзья, хорошие книги и спящая совесть – вот идеальная жизнь.\n" +
        "Жизнь слишком коротка, чтобы тратить её на диеты, жадных мужчин и плохое настроение.\n" +
        "Хотите изменить свою жизнь!? Так действуйте, вместо того, чтобы искать оправдания, запираться и притворяться счастливым...\n" +
        "Жизнь — как вождение велосипеда. Чтобы сохранить равновесие, ты должен двигаться.\n" +
        "Главное — живой жизнью жить, а не по закоулкам памяти шарить.\n" +
        "Жить надо так, чтобы тебя помнили и сволочи.\n" +
        "Все эти вещи, ради которых я готов умереть, просто ничто по сравнению с теми, ради которых я хочу жить.\n" +
        "Пора перестать ждать неожиданных подарков от жизни, а самому делать жизнь.\n" +
        "Что разум человека может постигнуть и во что он может поверить, того он способен достичь\n" +
        "Стремитесь не к успеху, а к ценностям, которые он дает\n" +
        "Надо любить жизнь больше, чем смысл жизни.\n" +
        "Начинать всегда стоит с того, что сеет сомнения.\n" +
        "Настоящая ответственность бывает только личной.\n" +
        "Неосмысленная жизнь не стоит того, чтобы жить.\n" +
        "80% успеха - это появиться в нужном месте в нужное время.\n" +
        "Ваше время ограничено, не тратьте его, живя чужой жизнью\n" +
        "Моя мама думает, что я лучший. А я был воспитан так, чтобы верить всему, что говорит моя мама.\n" +
        "Узнать – это значит разочароваться. Не знать – это значит быть счастливым.\n" +
        "Ад невозможно сделать привлекательным, поэтому дьявол делает привлекательной дорогу туда.\n" +
        "Мечта озаряет дорогу.\n" +
        "Во всяком из нас есть и рай, и ад.\n" +
        "Я не хочу зарабатывать себе на жизнь, я хочу жить.\n" +
        "Кто живёт борьбою с врагом, тот заинтересован в том, чтобы враг сохранил жизнь.\n" +
        "Сегодняшний день завтра войдет в историю и больше никогда не повторится.\n" +
        "Папарацци — такое необычное слово, кажется, это что-то интересное, но это просто люди в кустах.\n" +
        "Всё, что становится обыденным, мало ценится.\n" +
        "Кто чего хочет, тот в то и верит.\n" +
        "Дружба с тем, у кого чистое сердце, – ценна, но встретить его труднее, чем в пустыне воду.\n";
    texts = texts.split("\n");
    const getUpdateProfile = async (type) =>{
        const user = await bridge.send('VKWebAppGetUserInfo');
        const rawResponse = await fetch('https://pro-clickapp.ru/motivation.php', {
            method: 'POST',
            body: JSON.stringify({t: type, id: user.id})
        });
        const content = await rawResponse.json();
        if(content.hasOwnProperty("result") && content.result === false){
            $(".balance_block").addClass("danger_b");
            setTimeout(()=>{
                $(".balance_block").removeClass("danger_b");
            },700)
            return false;
        }
        user.balance = content.balance;
        user.now_text = parseInt(content.now_text);
        setUser(user);
    }
    useEffect(() => {
        $("#balance_but").on("click", () => {
            $("#plus_b").animate({fontSize: "350%"}, 100, () => {
                $("#plus_b").animate({fontSize: "200%"}, 100)
            });

        })
        setInterval(() => {
            let l = $(".count").text().length;
            if (l === 2) {
                $(".count").css("font-size", "110%");
            } else if (l === 3) {
                $(".count").css("font-size", "86%");
            } else if (l === 4) {
                $(".count").css("font-size", "65%");
            }
            let d = $("#main_texts").text().length;

        }, 500)
    }, [])
    const buyGol = (e) => {
        let id = e.currentTarget.dataset.id;
        setActiveModal(null)
        bridge.send("VKWebAppShowOrderBox", {type: "item", item: id})
            .then(data => {
                if (data.success) {
                    setTimeout(()=>{
                        getUpdateProfile("e");
                    },1500)
                }
            })
            .catch(error => console.log(error));
    }
    const nextGoal = async ()=>{
        setDisable(true)
        getUpdateProfile("o").then(()=>{
            setDisable(false)
        });
    }
    return (
        <SplitLayout modal={<Modal setActiveModal={setActiveModal} buyGol={buyGol} activeModal={activeModal}/>}>
            <SplitCol>
                <View activePanel={id}>
                    <Panel id={id}>
                        <div className={"back"} style={{backgroundImage: `url('${fon}')`}}>
                            <div className="content">
                                <div className="header">
                                    <h3>мотивационные карточки именно для
                                        тебя {fetchedUser && fetchedUser.first_name}</h3>
                                    <div className="balance">
                                        <h2>баланс:</h2>
                                        <div  onClick={() => setActiveModal("goals")} id="balance_but"
                                             className={"balance_block"} style={{backgroundImage: `url('${balBack}')`}}>
                                            <span className={"count"}>{fetchedUser ? fetchedUser.balance : 0}к</span>
                                            <span id={"plus_b"} className={"plus"}>+</span>
                                        </div>
                                    </div>

                                </div>
                                <div className={"text"}>
                                    {fetchedUser &&
                                    <Text id={fetchedUser.now_text} class={"text"} text={texts[fetchedUser.now_text]}/>
                                    }

                                </div>
                                <button disabled={disable} onClick={nextGoal} style={{opacity:disable ? .5 : 1,backgroundImage: `url('${but}')`}} className={"but_open_new"}>Открыть
                                </button>
                            </div>

                        </div>
                    </Panel>
                </View>
            </SplitCol>
        </SplitLayout>
    )
};

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default Home;
