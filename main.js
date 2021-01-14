const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '今日は外では雪が降っていた。:insertx:は:inserty:へ行くために外へ出かけた。:inserty:へいく道中で、大きな池が凍っていた。:insertx:は、そこでスケートをしようと凍った池の上に乗っかると、:insertz:。:insertx: はあまりのショックに一回自分の家に帰ることにした。';
let insertX = ['津田梅子さん','ドナルド','安倍晋三'];
let insertY = ['友達の家','スーパー','恋人の家'];
let insertZ = ['氷が割れて池に落っこちた','滑って転んでけがをした','池の管理人に怒られた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
